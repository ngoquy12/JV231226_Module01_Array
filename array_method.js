const numbers = [1, 2, 3, 4, 5];

// Thêm phần tử ở cuối mảng
console.log("Mảng trước khi push: ", numbers);
numbers.push(6);
console.log("Mảng sau khi push: ", numbers);

// Xóa phần tử ở cuối mảng
let element1 = numbers.pop();

console.log("Mảng sau khi pop: ", numbers);
console.log("Phần tử vừa xóa ở cuối mảng: ", element1);

// Thêm phần tử ở đầu mảng
numbers.unshift(0);
console.log("Mảng sau khi thêm vào đầu: ", numbers);

// Xóa phần tử ở đầu mảng
const element2 = numbers.shift();
console.log("Mảng sau khi xóa ở đầu: ", numbers);
console.log("Phần tử vừa xóa ở đầu mảng: ", element2);

// Chuyển đổi mảng thành chuỗi
// Sử dụng dụng toString()
let convertArrayToString = numbers.toString();
console.log("Sau khi chuyển đổi: ", convertArrayToString);

// Sử dụng join()
let convertArrayToString1 = numbers.join(" - ");
console.log("Sau khi dùng join(): ", convertArrayToString1);

// Hợp nhất các mảng
const number1 = [1, 2, 3, 4];
const number2 = [5, 6, 7, 8];

// concat()
const number3 = number1.concat(number2);
console.log("Mảng sau khi nối: ", number3);

// Từ mảng number3, Hãy đảo ngược vị trí của các phần tử: Input: [1,2,3,4], Output: [4,3,2,1]
// B1: Duyệt mảng theo thứ tự ngược lại
// B2: Thêm những phần tử đấy vào trong mảng mới
const newArray = [];
for (let i = number3.length - 1; i >= 0; i--) {
  newArray.push(number3[i]);
}

console.log("New array: ", newArray);
