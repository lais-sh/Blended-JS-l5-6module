//!task 1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

//  const numbers = [1, 2, 3, 4, 5];
//  function arrNum(numbers) {
//   return  numbers.map( number => number * number);
//  }
//  console.log(arrNum(numbers));



//!task 2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];
 

//  const flatData = data.flatMap( arr => arr.values);
//  console.log(flatData);
 
 
 //!task 3
 // Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// const somePeople = people.some(user => user.age < 10);
// console.log(somePeople);

 //!task 4
// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

//  const numbers = [2, 4, 6, 8, 10];
//  const everyNum = numbers.every( num => num % 2 === 0);
//  console.log(everyNum);
 
//!task 5
// Знайдіть перше непарне число

// const numbers = [2, 6, 8, 9, 10, 12];
// const findNum = numbers.find( num => num % 2 !== 0);
// console.log(findNum);

//!task 6

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const sortedArr = numbersArray.toSorted((a, b) => a - b);
// console.log(sortedArr);

//!task 7

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const sortString = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(sortString);

//!task 8

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// const sortedArr = users.toSorted((a, b) => a.age - b.age);
// console.log(sortedArr);

//! task 9
// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// function filterObj (user) {
// return user.filter( item => item.age > 20);
// }
// console.log(filterObj(user));


//!task 10
// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

//  const numbers = [1, 2, 3, 4, 5];

//  const reduceNum = numbers.reduce((acc, num) => acc + num,0);
//  console.log(reduceNum);
 
//!task 11
// Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:
//  class Calculator {
//     #result = 0;
  
//     number(value) {
//       this.#result = value;
//       return this;
//     }
  
//     getResult() {
//       return this.#result;
//     }
  
//     add(value) {
//       this.#result += value;
//       return this;
//     }
  
//     subtract(value) {
//       this.#result -= value;
//       return this;
//     }
  
//     multiply(value) {
//       this.#result *= value;
//       return this;
//     }
  
//     divide(value) {
//       if (value === 0) {
//         throw new Error("Ділення на нуль неможливе");
//       }
//       this.#result /= value;
//       return this;
//     }
//   }

 


//  const calc = new Calculator();

//  const result = calc
//    .number(10)   // 10
//    .add(5)       // 15
//    .subtract(3)  // 12
//    .multiply(4)  // 48
//    .divide(2)    // 24
//    .getResult();
 
//  console.log(result); // 24

//!task 12
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email


//  class Client {
//     #login;
//     #email;
//     constructor (login, email) {
//         this.#login = login;
//         this.#email = email;
//     }
//     get email (){
//         return this.#email;
//     }
//     set email (newEmail) {
//         this.#email = newEmail;
//     }
//     get login () {
//         return this.#login;
//     }
//     set login (newLogin) {
//         this.#login = newLogin;
//     }
//  }
//  const client = new Client("KikotoSs", "zinchenko@gmail.com");
//  console.log(client.login); // "NikitaZ"
// console.log(client.email); // "nikita@example.com"

// client.login = "NewLogin";
// client.email = "new@email.com";

// console.log(client.login); // "NewLogin"
// console.log(client.email); // "new@email.com"

//!task 13 
//  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

//   class Person {
//     name;
//     age;
//     gender;
//     email;
//     constructor (name, age, gender, email) {
//         this.name = name;
//         this.age= age;
//         this.gender = gender;
//         this.email = email;
//     }
//     getDetails() {
//         return {
//           name:  this.name,
//           age: this.age ,
//           gender: this.gender ,
//           email: this.email,
//     }
//   }
// }
// const person1 = new Person ("Nikita", 32, "male", "nikita@example.com")

// class Employee extends Person {
//     constructor (name, age, gender, email, salary, department ) {
// super(name, age, gender, email);
// this.salary = salary;
// this.department = department;
//     }
//     getEmployeeDetails() {
//         return {
//         ...this.getDetails(),
//         salary: this.salary,
//         department: this.department,
//         };
//     }
// }
// const emp = new Employee ("Nikita", 32, "male", "nikita@example.com", "Frontend Developer", 2000, "IT");
// console.log(emp.getEmployeeDetails());