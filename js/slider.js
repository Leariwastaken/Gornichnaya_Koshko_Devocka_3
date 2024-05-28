window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let slideIndex = 1,
            slides = document.querySelectorAll('.slider_slides__slide'),
            prev = document.querySelector('.slider_slides__prev'),
            next = document.querySelector('.slider_slides__next'),
            dotsWrap = document.querySelector('.slider_dots'),
            dots = document.querySelectorAll('.slider_dots__dot');

            showSlides(slideIndex);

        function showSlides (n) {
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach((item) => item.style.display = 'none');
            // for (let i = 0; i < slides.length; i++) {
            //     slides[i].style.display = 'none';
            // }
            dots.forEach((item) => item.classList.remove('dot-active'));

            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].classList.add('dot-active');
            
        }
        function plusSlides(n) {
            showSlides(slideIndex += n); 
        }
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        prev.addEventListener('click', function() {
            plusSlides(-1);
        });

        next.addEventListener('click', function() {
            plusSlides(1);
        });
        //Создаем событие клика на родителя, используя делегирование событий
        dotsWrap.addEventListener('click', function(event) {
            // перебираем все dot и узнаем на какую именно кликнули
            for (let i = 0; i < dots.length + 1; i++) {
                // проверяем элемент на соответствие и узнаем номер точки
                if (event.target.classList.contains('slider_dots__dot') && event.target == dots[i-1]) {
                    currentSlide(i);
                }
            }
        });

    });