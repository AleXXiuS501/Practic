// function menuClickAbout() {
//     displayElement("photo",false); 
//     displayElement("about", true);
//     displayElement("price",false);
//     displayElement("contacts",false);
// }

// function menuClickPhoto(){
//     displayElement("photo",true); 
//     displayElement("about",false);
//     displayElement("price",false);
//     displayElement("contacts",false); 
// }

// function displayElement(elementID, displayBool) {
//     var x = document.getElementById(elementID);
//     if (displayBool) {
//         x.style.display = "block";
//       } else {
//         x.style.display = "none";
//       }
// }



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
    
    let dots = document.querySelectorAll('.dot'),
        dotsArea = document.querySelector('.slider-dots'),
        slides = document.querySelectorAll('.slider-item'),
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next'),
        slideIndex = 1;
    
    showSlides(slideIndex);
    
    function showSlides (n) {
        if (n < 1) {
            slideIndex = slides.length;
        }else if (n > slides.length) {
            slideIndex = 1;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex -1].classList.add('active');
    }
    
    function plusSlides (n) {
        showSlides(slideIndex += n);
    }
    function currentSlide (n) {
        showSlides(slideIndex = n);
    }
    prevBtn.onclick = function () {
        plusSlides(-1);
    };
    nextBtn.onclick = function () {
        plusSlides(1);
    };
    dotsArea.onclick = function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if(event.target.classList.contains('dot') &&
            event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    };
    // Timer

    let deadLine = '2020-04-15 00:17:00'; 

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

    setClock('timer', deadLine);

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; //запрет
         //прокрутки страницы при открытом модальном окне
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
});
    const moreTab = document.querySelectorAll('.description-btn');
//выбираем все кнопки 
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay');

    moreTab.forEach(function(item){
        item.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; 
    });
});

