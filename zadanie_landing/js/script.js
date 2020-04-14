window.addEventListener('DOMContentLoaded', function() {
    'use strict'

    //TABS
    function onTabs() {
        let tab = document.querySelectorAll('.info-header-tab'),
            info = document.querySelector('.info-header'),
            tabContant = document.querySelectorAll('.info-tabcontent');

        function hideTabContant(a) {
            for (let i = a; i < tabContant.length; i++) {
                tabContant[i].classList.remove('show');
                tabContant[i].classList.add('hide');            
            }
        }

        hideTabContant(1);

        function showTabContant(b) {
            if (tabContant[b].classList.contains('hide')) {
                tabContant[b].classList.remove('hide');
                tabContant[b].classList.add('show');
            }
        } 

        info.addEventListener('click', function(event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContant(0);
                        showTabContant(i);
                        break;
                    }
                }
            }
        
        });
    };
    onTabs();   


    // Timer  
    function onTimer() {
        let deadline = '2020-04-25';

        function getTimeRemaining(endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000*60*60)));    

            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        };

        function setClock(id, endtime) {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endtime);

                hours.textContent = isZero(t.hours);
                minutes.textContent = isZero(t.minutes);
                seconds.textContent = isZero(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }

                function isZero(b) {
                    if (b > 9) {
                        return b;
                    } else {
                        return '0' + b;
                    };
                };
            }

        }

        setClock('timer', deadline);
    };
    onTimer();

    //Modal окно;
    function onModal() {
        let more = document.querySelector('.more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close');

        more.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash')
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function() {
            overlay.style.display = "none";
            more.classList.remove('more-splash');
            document.body.style.overflow = "";
        });

        let btnDescription = document.querySelectorAll('.description-btn');
        
        btnDescription.forEach(function (item) {
            item.addEventListener('click', function() {
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = "hidden";
            });

            close.addEventListener('click', function() {
                overlay.style.display = "none";
                item.classList.remove('more-splash');
                document.body.style.overflow = "";
            });
        });

    }
    onModal();


    // Form
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    }

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('DIV');


    statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        }); 

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success
            } else {
                statusMessage.innerHTML = message.failure
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
});