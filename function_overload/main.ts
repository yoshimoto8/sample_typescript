// 関数のオーバーロード

function add(a: number, b: number): number; // シグネチャ
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  if (typeof a === "string" && typeof b === "string") {
    return a + " " + b;
  }
  return a + b;
}

// console.log(add(5, 3)); // 8
// console.log(add("hello", "world")); // hello world

console.log(add("hello", 3));
