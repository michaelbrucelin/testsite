//Array对象
var arr = new Array();
arr[0] = "a";
arr[1] = "b";
arr[3] = "d";

console.log(arr);
console.log(arr.join());
console.log(arr.join(';'));
console.log(arr.toString());

var arr2 = ["A", "B", "C", "D"];
for (let i = 0; i < arr2.length; i++) {
    console.log(i);
}
for (let item in arr2) {
    console.log(item);
}