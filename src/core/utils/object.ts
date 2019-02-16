export const objectCast = <O>(obj: O) => (oldKey: keyof O) => newobj =>
  Object.keys(obj).reduce(
    (newobj, key) =>
      key === oldKey
        ? newobj
        : Object.defineProperty(newobj, key, {
            value: obj[key],
            writable: true,
            enumerable: true,
            configurable: true
          }),
    newobj
  )
