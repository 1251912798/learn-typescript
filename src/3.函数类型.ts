type ItFn = (x: string, y: string) => string;

const fn = (a: string, b: string): string => {
  return a + b;
};

const item: ItFn = (a, b) => {
  return a + b;
};

// 1）常见的类型推导的方式
// let name = "jiangwen"; // 根据赋值来进行推导
// let age = 30;

// 2）根据返回值来进行类型推导， 自动推导返回值类型
// function sum(a: string, b: string) {
//   return a + b;
// }

// type ISum = (x: string, y: string) => string;
// let sum: ISum = (a, b) => {
//   return a + b;
// };

// 3）会根据上下文来推导赋予值的类型 (根据位置来进行推导的)
type ICallback = (a: string, b: number, c: boolean) => void;

// void 表示不关心返回的具体类型
function fn1(callback: ICallback) {}
fn1((x, y, z) => {
  return "112";
});

// typeof 和 keyof的使用
const prsn = {
  name: "jiangwen",
  age: 11,
};

type Props = typeof prsn;
function getVal(this: Props, key: keyof Props) {
  // keyof 索引类型插叙 只能查询类型
  return this[key];
}
let r = getVal.call(prsn, "name");

/* 
  typeof 是获取对象的类型
  keyof 是获取对象的键
*/

// 函数的重载
function arr(val: string): string[];
function arr(val: number): number[];
function arr(val: string | number) {
  if (typeof val === "string") {
    return val.split("");
  } else {
    return val.toString().split("").map(Number);
  }
}
arr("111");
arr(111);

export {};
