export {};

declare global {
  type TFunction = (...args: any[]) => any;
  type TDispatch = <T = any, U = any>(arg: T) => U;
}
