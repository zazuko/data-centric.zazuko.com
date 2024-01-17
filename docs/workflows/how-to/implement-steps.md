---
title: Implement steps
sidebar_position: 1
---

# Implementing steps

As explained on the [Pipeline Concepts](../explanations/pipeline.md#step) page, steps are linked from a pipeline using
`code:link` property. Out of the box barnard59 supports JavaScript steps. The implementation of a step is a factory
function which returns a stream or an async generator.

This page presents three common ways to implement JavaScript steps.

## Async generators

The recommended way to implement a step is to use an async generator. Simply return an async generator from the factory.
It must have a single argument which is the stream itself as an iterable. The generator can then yield values to the stream.

```js
import nanoid from 'nanoid'

/**
 * @this {import('barnard59-core').Context}
 */
export default function step() {
  // 1. prepare the step
  const { env } = this
  const id = nanoid()
  const ex = env.namespace('http://example.org/')
  
  return async function* (stream) {
    // 2. before first chunk
    let total = 0
    yield env.quad(env.blankNode(id), env.ns.rdf.type, ex.StepSummary)
    
    for await (const quad of stream) {
      // 3. push chunks down the pipeline
      total++
      yield quad;
    }
    
    // 4. after last chunk
    yield env.quad(rdf.blankNode(id), ex.totalQuads, total)
  }.bind(this)
}
```

Commented are the four phases of a step:

1. The first phase is the preparation of the step. This happens before the pipeline
starts processing data. Can be `async`.
2. The second phase is right before the first chunk is processed. 
3. The third phase is the processing of the stream. Implementors `yield` values to the stream. Individual chunks can be transformed, or skipped by continuing the loop without yielding.
4. The fourth phase is after the last chunk has been processed. This is the place to clean up resources or push additional data.

:::caution
The operations implemented using async generators always create [Duplex streams](https://nodejs.org/api/stream.html#stream_class_stream_duplex), which means that they will be used as both readable and writable streams. As a consequence,
they will not be able to be used as the first step in a pipeline, as the first step must be a readable stream.
:::

## through2

If, for some reason, you cannot use async generators, you can use the [through2](https://npm.im/through2) module as an 
easy alternative to using the NodeJS streams API directly.

```js
import through2 from 'through2'
import nanoid from 'nanoid'

/**
 * @this {import('barnard59-core').Context}
 */
export default function step() {
  const { env } = this
  
  // 1. prepare the step
  const id = nanoid()
  const ex = env.namespace('http://example.org/')
  let total = 0
  
  return through2.obj(function (chunk, encoding, callback) {
    // 3. push chunks down the pipeline
    total++
    this.push(chunk)
    callback()
  }, function (callback) {
    // 4. after last chunk
    this.push(env.quad(env.blankNode(id), env.ns.rdf.type, ex.StepSummary))
    this.push(env.quad(env.blankNode(id), ex.totalQuads, total))
    callback()
  })
}
```

Note that there are some important differences between the through2 step and async generators:

1. When using through2, it is not possible to capture a specific `before` stage. Any additional data must be pushed at the end, in the `flush` callback.
   - Alternatively, a library like [onetime](https://npm.im/onetime) can be used to create a `before` stage which is only executed once.
2. The stream transform and flush functions are not bound to the context. This means that the context must be captured in a closure, or they must be implemented as arrow functions.

:::caution
Similarly, a through2 step will always create a Duplex stream, and cannot be used as the first step in a pipeline.
:::

## NodeJS streams

If you need more control over the stream, you can implement the step using the NodeJS streams API directly. This is the
most verbose and powerful way.

Below is the above example of a step that uses the NodeJS streams API directly. Same principles as with through2 apply here.

```js
import { Transform } from 'stream'
import nanoid from 'nanoid'

/**
 * @this {import('barnard59-core').Context}
 */
export default function step() {
  const { env } = this
  
  // 1. prepare the step
  const id = nanoid()
  const ex = env.namespace('http://example.org/')
  let total = 0
  
  return new Transform({
    objectMode: true,
    transform (chunk, encoding, callback) {
      // 3. push chunks down the pipeline
      total++
      this.push(chunk)
      callback()
    },
    flush (callback) {
      // 4. after last chunk
      this.push(env.quad(env.blankNode(id), env.ns.rdf.type, ex.StepSummary))
      this.push(env.quad(env.blankNode(id), ex.totalQuads, total))
      callback()
    }
  })
}
```

The major difference between this and methods above is the possibility to implement streams which are only `Readable` or
only `Writable`. This means that this method can be used to implement the first and last step in a pipeline.

For example, the following step will create a stream which emits a single quad and then ends.

```js
import { Readable } from 'stream'

/**
 * @this {import('barnard59-core').Context}
 */
export default function step() {
  const { env } = this
  
  return new Readable({
    objectMode: true,
    read () {
      this.push(env.quad(env.blankNode(), env.ns.rdf.type, env.ns.rdfs.Resource))
      this.push(null)
    }
  })
}
```
