type ItFn = (x: string, y: string) => string;

const fn = (a: string, b: string): string => {
  return a + b;
};

const item: ItFn = (a, b) => {
  return a + b;
};

export {};
