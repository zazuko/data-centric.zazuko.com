---
sidebar_position: 3
---

# Writing valid pipelines

## Step Lists

Pipelines are just a chain of streams.
That makes it possible to check if the types of the streams are suitable to combine them.

The following streams can be connected:

- `Readable` -> `Writable`
- `ReadableObjectMode` -> `WritableObjectMode`

Every combination not in the list must throw an error.

### Pipeline

A pipeline itself is also represented as a stream.
That requires to have `Readable` or `Writable` interface depending on the first and last stream of the step list.

The pipeline should have the same type if the first stream in the step list has one of the following types:

- `Writable`
- `WritableObjectMode`

The pipeline should have the same type if the last stream in the step list has one of the following types:

- `Readable`
- `ReadableObjectMode`
