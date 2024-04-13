// ts的基础类型
/* 
  string、number、[]、{}、never、any、unknow、boolean、symbol、bigInt、null、undefined
*/

const name: string = "a";
const age: number = 1;
const isStudent: boolean = true;

// 大写的都是装箱类型
let str1: String = "1";
let str2: string = "1";
let str3: String = new String();

const arr1: number[] = [1, 2, 3];
const arr2: string[] = ["1", "2", "3"];
const arr3: (number | string)[] = [1, "2", "2"];
const arr4: Array<number | string> = [1, "2", "2"];
const arr5: (string | number | boolean)[] = ["1", true, 2];

// 元组类型
// 规定长度和存储类型，但是要根据对应位置的类型存储
const tuple1: [string, number] = ["1", 2];
const tuple2: [string, number, boolean] = ["1", 2, true];

// 可以直接向元组类型内添加已存在的类型
tuple1.push("3");
// tuple1[3]; // 但是直接访问的话会报错，因为不确定该值是否存在

// 枚举类型
// 自带类型的对象，自动增长 可以反举
const enum Color {
  Red,
  Green = 4,
  Blue,
}
// 只取值的话可以使用常量枚举
console.log(Color.Red);

// never 类型
const error = (): never => {
  throw new Error("111");
};
// 可用于完整性保护（保护代码的完整性）
function isComplete(val: never) {}
function arr(state: string | number | boolean) {
  if (typeof state === "string") {
    // 为字符串的逻辑
    return state;
  }
  if (typeof state === "number") {
    // 为数字的逻辑
    return state;
  }
  if (typeof state === "boolean") {
    // 为布尔的逻辑
    return state;
  }
  // 如果只检测了2个类型将会进行报错
  isComplete(state);
}

// object 类型 {} Object

// 对象数组均可检测为对象;
const obj22 = (tag: object) => {};
obj22([]);
obj22({});
obj22(() => {});

const obj: {} = {};

const obj1: object = {};
const obj2: Object = {};

console.log(obj2.constructor);

// Symbol类型
const sym1: symbol = Symbol("1");

// BigInt类型
const number: bigint = BigInt(Number.MAX_SAFE_INTEGER + 10);

export {};
