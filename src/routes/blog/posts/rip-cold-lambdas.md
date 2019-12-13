---
title: RIP cold lambdas
date: "2019-12-05"
---

[https://aws.amazon.com/blogs/aws/new-provisioned-concurrency-for-lambda-functions/](https://aws.amazon.com/blogs/aws/new-provisioned-concurrency-for-lambda-functions/)

With Amazon’s introduction of Provisioned Concurrency, they’ve solved the problem of lambda cold starts.

Now developers can’t argue which, if any, language is better than the other for lambdas. For an upcoming project, I was considering writing my APIs in Go because I enjoy it, and namely because of its perceived faster startup time. Now it’s just one less argument, and my own personal bias shouldn’t be reason enough to split a codebase into two languages.

I’ll be writing more Node in the meantime. Maybe layering bits of some compile-to-js language,
