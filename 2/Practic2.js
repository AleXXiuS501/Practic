'use strict';

let money = +prompt("Ваш бюджет на месяц ", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(money);
console.log(time);

let appData = {
    budget: money,
    timeData:time,
    expenses: {}, 
    optionalExpenses: {},
    income: [],
    savings: false,
};

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let b = prompt("Во сколько обойдется?", "");

//     if ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null 
//         && a != "" && b != "" && a.length < 50) {
//         console.log("done");        
//     appData.expenses[a] = b;
//     } else {
//         console.log("Заполните строку");
//     }
// }

// let i = 0;
//     while (i < 2) {
//     console.log(i);
//     i++;

//     let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let b = prompt("Во сколько обойдется?", "");
       
//     if ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null 
//         && a != "" && b != "" && a.length < 50) {
//         console.log("done");        
//     appData.expenses[a] = b;
//     } else {
//         console.log("Заполните строку");
//     }
// }

let i = 0;
    do {
    console.log(i);
    i++;
    
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = prompt("Во сколько обойдется?", "");
       
    if ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null 
        && a != "" && b != "" && a.length < 50) {
        console.log("done");        
    appData.expenses[a] = b;
    } else {
        console.log("Заполните строку");
    }
}
while (i < 2);

appData.PerDay = appData.budget/30;
      
alert("Ежедевный бюджет: " + appData.PerDay);

if(appData.PerDay < 1000) {
    console.log("Минимальный уровень достатка");
} else if(appData.PerDay > 1000 && appData.PerDay < 2300) {
    console.log("Средний уровень достатка");
} else if (appData.PerDay > 2300) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
    

