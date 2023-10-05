// ?1.soru [8,4,6,2,3] => output [4,2,4,2,3] birbiirnde çıkararak ilerleme yöntemi

// const oneFunction = (arr) => {
//   return arr.map((_, i) => {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         arr[i] = arr[i] - arr[j];
//         break;
//       }
//     }

//     return arr[i];
//   });
// };

// console.log(oneFunction([8, 4, 6, 2, 3]));

//?2.soru input[[4,3,2,-1],[3,-2,-1,6],[5,-4,0,-1]] kaçtane eksili değer var

// const negative = (arr) => {
//   return arr
//     .map((row) => row.filter((r) => r < 0).length)
//     .reduce((a, b) => a + b, 0);
// };
// console.log(
//   negative([
//     [4, 3, 2, -1],
//     [3, -2, -1, 6],
//     [5, -4, 0, -1],
//   ])
// );

//

// ?3.soru [555,901,899,1276,12]=> çift basamaklı sayılar 2 sayı vae output:2
//çözüm:1
// const numberFunc = (arr) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toString().length % 2 == 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr.length;
// };
// console.log(numberFunc([555, 901, 899, 1276, 12]));
//çözüm:2
// const numberFunc = (arr) => {
//   return arr.filter((r) => r.toString().length % 2 == 0).length;
// };
// console.log(numberFunc([555, 901, 899, 1276, 12]));

// ?4.soru input dan bir değer gir ve girilen sayı kadar dizinin elemenı olsun ve elemenlerın toplamı 0 olsun
//çözüm:1
// const inputVal = (n) => {
//   const newArray = [];
//   if (n % 2 == 1) {
//     newArray.push(0);
//   }
//   for (let i = 1; i <= n / 2; i++) {
//     newArray.push(i);
//     newArray.unshift(-i);
//   }
//   return newArray;
// };
// console.log(inputVal(7));
//çözüm:2
// const inputVal = (n) => {
//   const newArray = [];
//   if ((n + 1) % 2 == 0) {
//     for (let i = 1; i < (n + 1) / 2; i++) {
//       newArray.push(i);
//       newArray.unshift(-i);
//     }
//     newArray.push(0);
//   } else {
//     for (let i = 1; i < (n + 1) / 2; i++) {
//       newArray.push(i);
//       newArray.unshift(-i);
//     }
//   }
//   return newArray;
// };
// console.log(inputVal(7));
//?5.soru verilen n değerinin rakamları çarp ve yine aynı rakamalrı topla ve birbirinden çıkar
//uzun çözüm
// const newTotal = (n) => {
//   const newArr = [];
//   for (let i = 0; i < n.toString().length; i++) {
//     newArr.push(Number(n.toString().slice(i, i + 1)));
//   }
//   let multiply = 1;
//   let add = 0;
//   for (let j = 0; j < newArr.length; j++) {
//     multiply *= newArr[j];
//     add += newArr[j];
//   }
//   const subtract = multiply - add;
//   return subtract;
// };
// console.log(newTotal(0));
//kısa çözüm

// const solution = (n) => {
//   let total = n.toString().split("").map(Number);
//   return total.reduce((a, b) => a * b, 1) - total.reduce((a, b) => a + b, 0);
// };
// console.log(solution(19));

//? 6.soru verilen diziden yeni bir dizi elde edeceğiz ayrı bir paremetre ile yeni diziyi verilen ikinci paremetreye göre başlatacağız

// const twoParemetre = (arr, n) => {
//   const newArr = [];
//   for (let i = 0; i < n; i++) {
//     newArr.push(arr[i]);
//     newArr.push(arr[i + n]);
//   }
//   return newArr;
// };
// console.log(twoParemetre([1, 2, 3, 4, 4, 3, 2, 1], 4));

//? 7.soru  verilen bir dizide tekrar edenlerden sadece bir değer kalsın ve dizideki tüm elemanlar farklı olduktan sonra elemanları topla
// uzun yöntem
// const editTotal = (arr) => {
//   newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr.reduce((a, b) => a + b, 0);
// };
// console.log(editTotal([-2, 2, 2, 4, 4, 3, 3, 1, 1]));
// kısa yöntem
// const editTotal = (arr) => {
//   newArr = [...new Set(arr)];

//   return newArr.reduce((a, b) => a + b, 0);
// };
// console.log(editTotal([-2, 2, 2, 4, 4, 3, 3, 1, 1]));
// kısa yöntem

// ?8.soru  verilen bir sayı ters çevirmemzi istiyor input 120  output 021 negatifse negatif pozitifse pozitif olacak şekilde
// uzun çözüm
// const reversing = (n) => {
//   let m;
//   if (n < 0) {
//     m = -n;
//   } else {
//     m = n;
//   }
//   let total = m
//     .toString()
//     .split("")
//     .reverse()
//     .reduce((a, b) => a + b, "");

//   return n < 0 ? -Number(total) : Number(total);
// };
// console.log(reversing(-210));

//kısa çözüm
//
//? 9.soru paremetre olarak bir dizi ve number verilecek dizi içerisindeki sayıların toplamı verilen sayı ya eşitse bu dizi deki toplanan sayıların index numaralarını dizi olarak döndür
// const totalIndex = (arr, n) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] == n && i != j) {
//         return [i, j];
//       }
//     }
//   }
// };
// console.log(totalIndex([4, 3, 5, 11], 15));

// ?10. soru verien iki dizi yi ters çevirip toplamamızı istiyor
// const totalIndex = (arr1, arr2) => {
//   const total1 = arr1.reverse().join("");
//   const total2 = arr2.reverse().join("");

//   return Number(total1) + Number(total2);
// };
// console.log(totalIndex([4, 3], [5, 11]));

//?11.Soru  verilen iki diziyi birleştirip medyan bulacağız
// const median = (arr1, arr2) => {
//! veya diziyi arr1 de toplayabiliriz arr1.push(...arr2)
//   const newArr = arr1.concat(arr2).sort((a, b) => a - b);
//   if (newArr.length % 2 == 1) {
//     return newArr[Math.floor(newArr.length / 2)];
//   } else {
//     return (
//       (newArr[Math.floor((newArr.length - 1) / 2)] +
//         newArr[Math.ceil(newArr.length / 2)]) /
//       2
//     );
//   }
// };
// console.log(median([6, 2, 1], [3, 4, 5]));

//?12.soru input "5.5.5.5.5" output "5[.]5[.]5[.]5[.]5"

// const dfd = (str) => {
//   return str.replaceAll(".", "[.]");
// };
// console.log(dfd("5.5.5.5.5"));

//?13.soru bir sayının asal çarpanlarını nasıl bulursunuz?

// const primeNumber = (str) => {
//   const prime = [];
//   let start = 2;
//   while (str > 2) {
//     if (str % start == 0) {
//       if (!prime.includes(start)) {
//         prime.push(start);
//       }
//       str = str / start;
//     } else {
//       start++;
//     }
//   }

//   return prime;
// };

// console.log(primeNumber(16));

//? 14.soru   finobonacci  =>0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987 => input 12 output.....
// const finobonacci = (num) => {
//   let start = 0;
//   const total = [];
//   while (num > total.length) {
//     if (total.length == 0) {
//       total.push(start);
//       start++;
//     } else if (total.length == 1) {
//       start = 1;
//       total.push(start);
//       start++;
//     } else {
//       start = total[total.length - 2] + total[total.length - 1];
//       total.push(start);
//     }
//   }

//   return total;
// };
// console.log(finobonacci(11));

//? 15.sorufakteriyel oluşturma

// const factoriel = (num) => {
//   let total;
//   let totalArray = [];
//   if (num < 0) {
//     total = "lütfen doğal sayı giriniz ";
//     return total;
//   }
//   if (num === 0) {
//     total = 0;
//     return total;
//   }
//   if (num === 1) {
//     total = 1;
//     return total;
//   }
//   while (num > 1) {
//     totalArray.push(num);
//     num--;
//   }
//   return totalArray.reduce((a, b) => a * b, 1);
// };
// console.log(factoriel(5));

// 16. OPP çalışma

class Person {
  constructor(name, age, color, country) {
    this._name = name;
    this._age = age;
    this._color = color;
    this._country = country;
  }
  greet() {
    console.log(
      `hello my name is ${this._name} I am ${this._age} years old my favori color is ${this._color}. I live in ${this._country} `
    );
  }
}

const halil = new Person("halil", 32, "red", "sweden");

halil.greet();
