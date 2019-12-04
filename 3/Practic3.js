'use strict';


let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц ", "");
    console.log(money);
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    console.log(time);

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц ", "");
    }    
}
start();

let appData = {
    budget: money,
    timeData:time,
    expenses: {}, 
    optionalExpenses: {},
    income: [],
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let b = prompt("Во сколько обойдется?", "");
    
        if ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null 
            && a != "" && b != "" && a.length < 50) {   
            console.log("a: " + b);    
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.PerDay = (appData.budget/30).toFixed(1);
    alert("Ежедевный бюджет: " + appData.PerDay);
}
detectDayBudget();

function detectLevel() {
    if(appData.PerDay < 1000) {
        console.log("Минимальный уровень достатка");
    } else if(appData.PerDay > 1000 && appData.PerDay < 2300) {
        console.log("Средний уровень достатка");
    } else if (appData.PerDay > 2300) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();
    
function checkSevings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            persent = +prompt("Под какой процент?");
        appData.monthincome = save/100/12*persent;
        alert("Доход в месяц с вашего депозита: " + appData.monthincome);
    }
}
checkSevings();

function chooseOptExpenses() {

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();
