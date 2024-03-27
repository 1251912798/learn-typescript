// 1.获取函数的返回值类型
function getObj(name: string, age: number) {
  return { name, age };
}

// type funcType<T extends (...arg: any[]) => any> = T extends (
//   ...arg: any
// ) => infer P
//   ? P
//   : never;

// type R1 = funcType<typeof getObj>;

// 求差集  用第一个和第二个类型的公共部分
type R6 = Cha<1 | 2 | 3, 1 | 2 | 4>;

type Cha<T, U> = T extends U ? T : never;

//  实现[ 30 , 'jw']
// type Swap<T> = T extends Array<>
// type R13 = Swap<["jw", 30]>;

// 头尾交换
type R14 = SwapHeadTail<[1, 2, 3, 4, 5, 6, 7]>;
type SwapHeadTail<T> = T extends [infer P, ...infer G, infer H]
  ? [H, ...G, P]
  : never;

// 实现promise 递归调用
type R15 = PromiseReturnValue<Promise<Promise<Promise<Promise<100>>>>>;

type PromiseReturnValue<T> = T extends Promise<infer P>
  ? PromiseReturnValue<P>
  : T;

// 元组转联合类型
type TupleToArray = ElementToUnion<[number, boolean, string]>;

type ElementToUnion<T> = T extends Array<infer P> ? P : never;

interface Person {
  name: string;
  age: number;
  address: IAddress;
}
interface IAddress {
  n: 501;
  x: 100;
  y: 100;
}
// 实现Partial属性可选
type MyPartial<T> = {
  [K in keyof T]?: T[K] extends object ? MyPartial<T[K]> : never;
};

type R22 = MyPartial<Person>;

// 实现Required必填
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

type R21 = MyRequired<R22>;

// 实现readonly 只读
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type R11 = MyReadonly<R21>;
// 实现Pick 挑出需要的属性
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};

type R222 = MyPick<Person, "address" | "age">;

// 实现Omit 去掉不需要的属性
type MyOmit<T, K extends keyof T> = MyPick<T, Exclude<keyof T, K>>;

type R2221 = MyOmit<Person, "name">;
