---
title: Reminder why Redux is great when used well
date: "2019-11-24"
---

[https://medium.com/@longho/scaling-react-redux-in-yahoo-finance-88ef9e89b55c](https://medium.com/@longho/scaling-react-redux-in-yahoo-finance-88ef9e89b55c)

many redux users get hung up on the network layer in redux, which in many cases, most definitely gets cumbersome when all you need is a basic fetch. skip the sagas, skip the observables.

to multiply the effectiveness of redux, utilize middlewares to enhance and simplify your workflow. redux thunk is only the beginning. do performance monitoring, get/set your cache layer, handle errors, anything that is repeated often as part of a reducer or action creator has a chance of being extracted into a middleware.
