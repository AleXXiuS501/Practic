// function showThis(a, b) {
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);

// 1) просто вызов функции. Получаем или Window или Undefined

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() { //функция внутри функции
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// // 2) Метод объекта - this = самому объекту. При вызове function внутри другой функции мы получаем Window 

// function User() {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(name) {
//         console.log('Hello' + this.name);
//     };
// }
// User.prototype.exit = function(name) {
//     console.log('Ползователь' + this.name + 'ушел');
// };

// let ivan = new User('Ivan', 25);
//     alex = new User('Alex', 30);

// console.log(ivan);
// console.log(alex);

// ivan.exit();

// 3) Конструктор (new) - This = новый cозданый объект 

// let user = {
//     name: 'John'
// };
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// console.log(sayName.call(user, 'Smith')); // Передаются данные в виде строки 
// console.log(sayName.apply(user, ['Snow'])); // через квадратные скобки мы добавляем несколько параметров (массивы с кучей данных

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);
//     console.log(double(3));
//     console.log(double(10));

// Указание конкретного контекста = через call, apply, bind

// let btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     console.log(this);
//     this.style.backgroundColor = 'blue';
//     function showThis() {
//         console.log(this);
//     }
//     showThis();
// });
    
