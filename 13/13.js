// let options = {
//     width: 1366,
//     hide: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };

// console.log(JSON.parse(JSON.stringify(options)));

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    // request.open(method, url, saync, login, pass); принимает 5 различных элементов

    request.open('GET', 'current.json');//настройки что мы делаем 
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');//что нам нужно
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "что то пошло не так!";
        }
    });
})