# UMI4-BUG-SHOWCASE

## Bug 1: the history object consoled under pages folder is correct but consoled in app.ts is undefined

## Bug 2: no matter the route change, histroy.location.pathname won't change in onRouteChange

![](https://user-images.githubusercontent.com/16903266/180467571-6d74aa1e-f6b1-46bd-9d9e-a77050f800ba.png)

As shown above, history's value is undefined in app.ts, and no matter the route change, `histroy.location.pathname` won't change in onRouteChange,