let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function getMoney () {
        return new Promise ((resolve, reject)=> {
            const request = new XMLHttpRequest();

            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onload = function() {
            // request.addEventListener('readystatechange', ()=> {
                if (request.readyState === 4 && request.status === 200) {
                    let data = JSON.parse(request.response);
                    resolve(data); // передали data в resolve
                } else if (request.status !== 200) {
                    reject("Reject");
                }
            }; 
        });
    }
    getMoney()
    .then ((data)=> inputUsd.value = inputRub.value / data.usd)
    .catch (()=> inputUsd.value = "Что-то пошло не так!");
}); 