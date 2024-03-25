function newArr<T>(num: number, string: T) {
  return Array(num).fill(string);
}

newArr(1, "2");

function arr<T, K>(tup: [T, K]) {
  return [tup[1], tup[0]];
}
console.log(arr([1, "2"]));

interface LoginType {
  token: string;
  roles: number[];
}

interface ResData<T> {
  code: number;
  data: T;
  msg?: string;
}

function Login(): ResData<LoginType> {
  return {
    code: 0,
    data: {
      token: "token",
      roles: [1, 2, 3],
    },
  };
}

export {};
