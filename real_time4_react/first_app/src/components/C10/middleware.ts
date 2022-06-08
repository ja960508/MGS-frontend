export function someMiddleware(store: any) {
  return function (next: any) {
    return function (action: any) {
      const isdiscarded = Math.round(Math.random());

      if (!isdiscarded) {
        next(action);
      }
    };
  };
}

export function otherMiddleware() {
  return function (next: any) {
    return function (action: any) {
      console.log("hello");
      next(action);
    };
  };
}

export function thunkMiddlewere(store: any) {
  return function (next: any) {
    return function (action: any) {
      console.log(action);
      if (typeof action === "function") {
        action(store.dispatch, store.getState);
      } else {
        next(action);
      }
    };
  };
}
