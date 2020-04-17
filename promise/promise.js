let drink = 0;
//созднание промиса 
function shoot(arrow) {
    console.log("Вы сделали выстрел...");
    let promise = new Promise(function(resovle, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resovle({}) : reject("Вы промахнулись");
        }, 3000);
    });
    return promise;
};
//
function win() {
    console.log("вы победили!");
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log("Вам купили пиво");
}

function giveMoney() {
    console.log("Вам заплатили");
}

function loose() {
    console.log("вы проиграли!");    
}
//Использование промиса
shoot({})
    .then(mark => console.log("Вы попали в цель"))  
    .then(win) 
    .catch(loose)
//