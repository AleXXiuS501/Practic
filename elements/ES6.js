let name = 'Ivan';
    age = 30;
    mail = 'es@gmail.com';

// document.write('Пользователь ' + name + ' ' + age + ' лет. + Его почтовый адрес: ' + mail);
// станый вид записи

document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес ${mail}`);
// формат ЕS6 заносится вся строка в кавычки тильды (Ё) и все переменные записываются через ${....}

function makeArray () {
    var items = [];

    for (let i = 0; i < 10; i++) { //через var мы создаем переменную одну на весь цикл
        var item = function() {
            console.log(i); 
        };
        items.push(item);
    }
    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

// Стрелочные функции

let fun = () => {
    console.log(this);
};
// fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => { // у стрелочной функции нет своего контекста, она берет у своего родителя (sayNumber)
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();

let btn = document.querySelector('button');
    
    btn.addEventListener('click', function() {
        let show = () => {
            console.log(this);
        };
        show();
    });

    function calcOrDouble (number, basis = 2) { //ES6
        // basis = basis || 2; ES5
        console.log(number*basis);
    }
    calcOrDouble(3,5);
    calcOrDouble(6);

    class Rectangle {
        constructor(height, width){
            this.height = height;
            this.width = width;
        }
        calcArea() {
            return this.height * this.width;
        }
    }

    const square = new Rectangle( 9, 9);
    
    console.log(square.calcArea());

let video = ['youtube', 'vimeo', 'rutube'];
    blogs = ['wordpress', 'livejournal', 'blogger'];
    internet = [...video, ...blogs, 'vk', 'facebook'];// три точки разворачивают переменную, показывают что в ней

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let numbers = [2, 5, 7];

log(...numbers);
