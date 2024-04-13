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
/* 
    Partial(可选)
    Required(必填)
    Readonly(只读)
    Record(指定属性类型的对象类型)
    Exclude(排除指定类型)
    Extract(在联合类型中取指定类型)
    Omit(在对象中排除指定属性)
    Pick(在对象只取需要的属性)
    ConstructorParameters(获取构造函数的参数)
    ReturnType(获取函数的返回值属性)
    InstanceType(获取构造函数的实例)
*/
// 可选
type _Partial<T> = {
  [K in keyof T]?: T[K];
};

type R1 = _Partial<Person>;
// 必填
type _Required<T> = {
  [K in keyof T]-?: T[K];
};

type R2 = _Required<R1>;
// 只读
type _Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type R3 = _Readonly<R2>;

// 定义对象的类型 下面两个等价
type R4 = Record<string, number>;
type R41 = {
  [key: string]: number;
};

// 排除联合类型指定属性
type _Exclude<T, U> = T extends U ? never : T;

type R5 = Exclude<1 | 2 | 3, 3>;

// 取联合类型中的指定类型
type _Extract<T, U> = T extends U ? T : never;

type R6 = Extract<1 | 2 | 3, 3>;

// 排除对象内的某种属性
type _Omit<T, U extends keyof T> = {
  [K in _Exclude<keyof T, U>]: T[K];
};

type R7 = _Omit<Person, "age">;

// 只取对象内的指定属性
type _Pick<T, U extends keyof T> = {
  [K in U]: T[K];
};

type R8 = _Pick<Person, "address">;

// 1.获取函数的返回值类型
function getObj(name: string, age: number) {
  return { name, age };
}

type _ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any
) => infer P
  ? P
  : never;

type R9 = _ReturnType<typeof getObj>;

class Per {
  constructor(age: number, name: string) {}
}

type R10 = ConstructorParameters<typeof Per> extends Array<infer P> ? P : never;

// 获取构造函数的参数
type _ConstructorParameters<T extends abstract new (...args: any[]) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;

type R11 = _ConstructorParameters<typeof Per>;

export {};
