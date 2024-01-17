# Fail pipeline gracefully

The easiest way to stop a pipeline is to throw an exception. However, this will stop the pipeline immediately.
Consider the simple step implementation below.

```js
export default function streamFailingRandomly() {
  return async function * (source) {
    let total = 0;

    for await (const chunk of source) {
      if (Math.random() > 0.5) {
        throw new Error('Random error');
      } else {
        total += chunk.length;
        yield chunk;
      }
    }
   
    this.logger.info(`Total processed: ${total}`);
  }
}
```

When the error is thrown, the pipeline will stop immediately. No further chunks will be processed and the code following
the async loop will not be reached.
It is quite clear from a generator-style operation implementation but can be a surprise when implementing steps using low
level streams. In the latter case, the flush callback will also not be called.

What's more, an exception thrown in one step affects other steps in the pipeline, preventing their respective flush
callbacks from being called.

:::note
`try..catch` block will not help here. When an error is thrown inside the async generator, it will be caught by the
pipeline and the processing is stopped immediately.
:::

## `this.error()` to the rescue

The solution is to use the `this.error()` method. It will instruct barnard that an error occurred but will not stop
processing. It is the responsibility of the step implementor how to handle the rest of the stream.

For the example above, the implementation could be changed to break the loop and call `this.error` instead of throwing.

```js
export default function streamFailingRandomly() {
  return async function * (source) {
    let error = null;
    let total = 0;
    
    for await (const chunk of source) {
      if (Math.random() > 0.5) {
        this.error(new Error('Random error'));
        break;
      } else {
        total += chunk.length;
        yield chunk;
      }
    }

    this.logger.info(`Total processed: ${total}`);
  }.bind(this)
}
```

:::caution
When `this.error` is called, even when the implementor breaks the loop, the pipeline will still continue to the end. 
All chunks which were already processed will be passed to the subsequent steps and the pipeline itself will not break. 
This is important for example when writing to a HTTP endpoint. Unlike when throwing an exception, the HTTP request will
be sent, albeit possibly incomplete.
:::
