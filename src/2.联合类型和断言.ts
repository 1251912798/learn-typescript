// 类型推导

let a: string | number;

a = "123";
a.charAt(0);
a = 123;
a.toFixed;

let str1 = "js"; // 被 ts 识别为 string 类型
const str2 = "js"; // 被 ts 识别为 "js" 类型

// 联合类型

// 字面量类型
// 使用方法一
type name = "张三" | "李四" | "王五";

// 使用方法而
type props =
  | {
      name: "man";
      money: string;
    }
  | {
      name: "women";
      waste: string;
    };

let app: props = {
  name: "man",
  money: "1",
};
// 可以使用联合类型来做到属性之间的互斥（可辨识联合类型）

// 类型断言
// 1.as
let ele: HTMLElement | null = document.querySelector("app");

ele!.style.color = "red";
(ele as HTMLElement).style.color = "red";
(<HTMLElement>ele).style.color = "red";

export {};
