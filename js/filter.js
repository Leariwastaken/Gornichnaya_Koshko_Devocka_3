window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //Получаем табы (переключатели), родительский элемент табов, и контент табов
    let tab = document.querySelectorAll('.gallery_filter__tab'),
    info = document.querySelector('.gallery_filter'),
    tabContect = document.querySelectorAll('.gallery_imgs');
    //Функция которая скрывает контентные табы
    function hideTabContect(a) {
        for (let i = a; i < tabContect.length; i++) {
            tabContect[i].classList.remove("g-show");
            tabContect[i].classList.add("g-hide");
        }
    }
    //Скрываются все кроме 1 элемента
    hideTabContect(1);
    //Функция показа контентных табов
    function ShowTabContect(b) {
        if (tabContect[b].classList.contains('g-hide')){
            tabContect[b].classList.remove("g-hide");
            tabContect[b].classList.add("g-show");
        }
    }    

    //Создаем событие клика на родителя, используя делегирование событий
    info.addEventListener('click', function (event) {
        let target = event.target;

        if (target && target.classList.contains('gallery_filter__tab')){
            // Связь элементов при совпадении target
            for(let i =0; i < tab.length; i++){
                //если совпадают
                if (target == tab[i]){
                    //Скрываем все табы
                    hideTabContect(0);
                    // удаляем класс активности таба
                    tab.forEach(item => {
                    item.classList.remove('active');
                    });
                    //элементу target(на который кликнули) добавляем активный класс 
                    target.classList.add('active');
                    
                    //Совпадение по нумерации
                    ShowTabContect(i);
                    
                    break
                } 
            }
        }
    });
});