// Cách 2: Sử dụng đối tượng Array
const names = new Array("A", "B", "C", "D");
console.log("Names: ", typeof names);

// Các cách để khai báo mảng (array)
// Cách 1: Array literal
// typeof dùng để kiểm tra kiểu dữ liệu của một biến trong JavaScript
const numbers = [1, 2, 3, 4, 5];
console.log("Numbers: ", typeof numbers);

// Cách truy xuất phần tử trong mảng
// Vị trí bắt đầu của các phần tử trong mảng : 0
// Vị trí kết thúc của các phần tử trong mảng: độ dài của mảng - 1
console.log("Vị trí đầu tiên trong mảng: ", numbers[0]);
console.log("Vị trí thứ 2 trong mảng: ", numbers[1]);

// Cách đo độ dài của mảng: length
console.log("Độ dài của mảng: ", numbers.length);

// Lặp qua các phần tử của mảng
for (let index = 0; index < numbers.length; index++) {
  console.log("Vị trí: ", index);
  // Truy xuất vào các phần tử của mảng
  console.log(numbers[index]);
}

// Tính tổng các phần tử trong mảng => Output: 15
// B1: Lặp qua mảng
// B2: Tạo biến lưu trữ giá trị của mỗi lần lặp

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  //Tiến hành lưu trữ
  sum += numbers[i];
}

console.log("Sum = ", sum);

// Vòng lặp for...in
if (numbers.length === 0) {
  console.log("Mảng không có phần tử nào");
} else {
  for (let index in numbers) {
    console.log("Element: ", numbers[index]);
  }
}

// Tìm kiếm phần tử có trong mảng
let numberValue = 1;
let flag = false; // Kỹ thuật cắm cờ
for (let i = 0; i < numbers.length; i++) {
  // Kiểm tra phần tử có trong mảng?
  if (numberValue === numbers[i]) {
    flag = true;
    break;
  } else {
    flag = false;
  }
}

// Các giá trị luôn luôn nhận giá trị là False: false, 0, "", NaN, undefined, null

if (flag) {
  console.log("Tìm thấy");
} else {
  console.log("Không tìm thấy");
}

const types = [1, "A", true, null, undefined, NaN];

// Bài 3
const numbers1 = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5];
let number = +prompt("Nhập n = ");
let count = 0;
for (const index in numbers1) {
  if (number === numbers1[index]) {
    // Đếm số lần xuất hiện của nó
    count++;
  }
}

if (count === 0) {
  console.log(`${number} không tồn tại trong mảng`);
} else {
  console.log(`Số lần xuất hiện của ${number} là: ${count}`);
}

//
