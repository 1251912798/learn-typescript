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

// 1. Partial(可选)
type myPartial<T> = {
  [K in keyof T]?: T[K];
};

type R11 = myPartial<Person>;

// 2. Required(必填)
type myRequired<T> = {
  [K in keyof T]-?: T[K];
};

type R1 = myRequired<R11>;

// 3. Readonly(只读)
type myReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type R2 = myReadonly<R1>;

// 4. Pick(选择需要的)
type myPick<T, U extends keyof T> = {
  [P in U]: T[P];
};

type R3 = myPick<Person, "age" | "address">;

// 5. Exclude(排除并集)
type myExclude<T, U> = T extends U ? never : T;
type R12 = myExclude<1 | 2 | 3, 1 | 2 | 4>;

// 6. Omit(排除不需要的)
type myOmit<T, U extends keyof T> = { [P in myExclude<keyof T, U>]: T[P] };

type R33 = myOmit<Person, "address">;

// 7. Extract(求差集)
type onExtract<T, U> = T extends U ? T : never;
type R222 = onExtract<1 | 2 | 3, 2 | 3 | 5>;

// 8. InstanceType(取类本身的类型判断构造函数的参数)



// 9. ReturnType(取函数返回值的参数)
export {};
