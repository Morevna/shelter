// document.addEventListener("DOMContentLoaded", function () {



//     // burger-menu

//     document.getElementById('burger-menu').addEventListener('click', function () {
//         document.querySelector('.burger-menu').classList.toggle('_active');
//         document.querySelector('.nav-menu').classList.toggle('_active');
//         document.getElementById('blackout').classList.toggle('blackout');
//         document.getElementById('body').classList.toggle('_lock');

//         document.getElementById('body').addEventListener('click', function () {
//             document.querySelector('.burger-menu').classList.remove('_active');
//             document.querySelector('.nav-menu').classList.remove('_active');
//             document.getElementById('blackout').classList.remove('blackout');
//             document.getElementById('body').classList.remove('_lock');
//         });

//         document.querySelectorAll('.nav-menu-link').forEach(function (item) {
//             item.addEventListener('click', function () {
//                 document.querySelector('.burger-menu').classList.remove('_active');
//                 document.querySelector('.nav-menu').classList.remove('_active');
//                 document.getElementById('blackout').classList.remove('blackout');
//                 document.getElementById('body').classList.remove('_lock');
//             });
//         });
//     });


// })




const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
if (burgerMenu){
    burgerMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock')
        burgerMenu.classList.toggle('_active');
        navMenu.classList.toggle('_active');
        document.getElementById('blackout').classList.toggle('blackout');
    });
}

// modal///
const btns = document.querySelectorAll('.card');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});



console.log(`Проверка верстки +7

верстка страницы валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ . +4 - есть
логотип в хедере состоит из текстовых элементов +1 - есть
страница содержит ровно один элемент <h1> +1 - есть
добавлен favicon +1 - есть


Вёрстка соответствует макету +35
блок <header> +5 - ест
блок Not only +5 - есть
блок About +5    - есть
блок Our Friends +5 - есть
блок Help +5        - есть
блок In addition +5 - есть
блок <footer> +5    - есть


Требования к css +6
для позиционирования элементов блока Help использована сеточная верстка (flexbox или grid) +2 - есть

при уменьшении масштаба страницы браузера или увеличении ширины страницы (>1280px) вёрстка размещается по центру, а не сдвигается в сторону и не растягивается по всей ширине +2  - есть

фоновый цвет тянется на всю ширину страницы +2 - есть


Интерактивность элементов +12
элемент About the Shelter в навигации подсвечен и неинтерактивен, остальные элементы навигации интерактивны +2 -есть
каждая карточка с питомцем в блоке Our Friends интерактивна при наведении на любую область этой карточки +2
плавная прокрутка по якорям +2 - есть
выполняются все ссылочные связи согласно Перечню ссылочных связей для страницы Main +2 - есть
выполнена интерактивность ссылок и кнопок. Интерактивность заключается не только в изменении внешнего вида курсора, например, при помощи свойства cursor: pointer, но и в использовании и других визуальных эффектов, например, изменение цвета фона или цвета шрифта, согласно стайлгайду в макете. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +2
обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике, не влияющее на соседние элементы +2 - есть`)