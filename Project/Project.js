window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', event => {
        let target = event.target;
        if(target.className == 'info-header-tab') {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    
// Timer

    let deadLine = '2020-04-25 00:17:00'; 

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60))),
        days = Math.floor((t/(1000*60*60*24)));
    
        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);
                days.textContent = ('0' + t.days).slice(-2);
                hours.textContent = ('0' + t.hours).slice(-2);
                minutes.textContent = ('0' + t.minutes).slice(-2);
                seconds.textContent = ('0' + t.seconds).slice(-2);
            if (t.total <=0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }    
        }
    }
// Modal

    setClock('timer', deadLine);

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descr_btns = document.querySelectorAll('.description-btn'),

	showModal = function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	};

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; //запрет
         //прокрутки страницы при открытом модальном окне
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = ''; //снимаем запрет прокрутки страницы
    });
    for (let i = 0; i < descr_btns.length; i++) {
        descr_btns[i].addEventListener('click', showModal);
    }
//Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы скоро с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        formContact = document.getElementById('form'),
        inputContact = formContact.getElementsByTagName('input');

        statusMessage.classList.add('.status');

    function requestForm(event) {
        event.preventDefault();
        this.appendChild(statusMessage);
         
    let request = new XMLHttpRequest(); // Создаём запрос.
        request.open('POST', 'server.php'); 
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
         
    let formData = new FormData(this);
         
        // передаем в JSON формате.
    let obj = {}; 
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
         
    let json = JSON.stringify(obj);
         
    request.send(json);
         
        // Сообщение как все прошло 
    request.addEventListener('readystatechange', function() {
        if(request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if(request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
    });
         
        // Очистить поля формы.
       
    for(let i = 0; i < input.length; i++) {
        input[i].value = '';
        }
    for(let i = 0; i < inputContact.length; i++) {
        inputContact[i].value = '';
        }
    
    form.addEventListener('submit', requestForm);
    formContact.addEventListener('submit', requestForm);
    }

//slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);    
    
    function showSlides(n) {

        //цикличность слайда
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        //скрытие всех слайдов
        slides.forEach((item) => item.style.display = 'none'); //современная запись
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex -1].style.display = 'block';
        dots[slideIndex -1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex +=n);
    }
    function currentSlide (n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for(let i = 0; i < dots.length + 1; i++) {
            if(event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

//calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000;
            if (restDays.value == '' || restDays.value == 0 || persons.value == 0) {
                totalValue.innerHTML = 0;

                totalValue.style.textShadow = 'none';
            } else {
                totalValue.innerHTML = total;
            }           
        });
    
        restDays.addEventListener('change', function() {
            daysSum = +this.value;
            total = (daysSum + personsSum)*4000;
            if (persons.value == '' || restDays.value == 0 || persons.value == 0) {
                totalValue.innerHTML = 0;
                totalValue.style.textShadow = 'none';
            } else {
                totalValue.innerHTML = total;    
            }            
        });
    
        place.addEventListener('change', function() {
            if (persons.value == '' || restDays.value == '' || restDays.value == 0 || persons.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;  
            }
        });
}); 


