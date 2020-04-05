'use strict'

const menu = document.querySelector('.menu'),
      menuItem = menu.querySelectorAll('.menu-item');

menu.insertBefore(menuItem[2], menuItem[1]);

const menuItem5 = document.createElement('LI');
menuItem5.classList.add('menu-item');
menuItem5.innerHTML = "Пятый пункт";
menu.appendChild(menuItem5);

const title = document.getElementById('title');
title.innerHTML = 'Мы продаем только <b>подлинную</b> технику Apple'

const adv = document.querySelector('.adv');
adv.remove();

const promptBlock = document.getElementById('prompt');
let questionApple =  prompt('Каково Ваше отношение к технике Apple', '');
promptBlock.textContent = 'К техникtasdasd Apple Вы относитесь: ' + questionApple;
