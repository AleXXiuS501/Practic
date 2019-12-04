'use strict';

let money = prompt("Ваш бюджет на месяц ");
console.log(money);

let time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(time);



let appData = {
    Budget: money,
    timeData:time,
    expenses: {}, 
    optionalExpenses: {},
    income: [],
    savings: false,
};

let requireValue = prompt("Введите обязательную статью расходов в этом месяце");
let realValue = prompt("Во сколько обойдется?");

appData.expenses[requireValue] = realValue;

requireValue = prompt("Введите обязательную статью расходов в этом месяце");
realValue = prompt("Во сколько обойдется?");

appData.expenses[requireValue] = realValue;

console.log(appData);

let oneDeyBudget = appData.Budget/30;

alert("Бюджет за 1 день = " +oneDeyBudget);