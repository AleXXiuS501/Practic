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