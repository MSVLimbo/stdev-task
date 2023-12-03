/* eslint-disable @typescript-eslint/ban-types */
const compose =
  (...functions: Function[]) =>
  <A>(args?: A) =>
    functions.reduceRight((acc, current) => current(acc), args);

export default compose;
