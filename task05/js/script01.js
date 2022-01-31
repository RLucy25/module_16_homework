﻿/*Задание 5.

Написать скрипт, который при открытии страницы будет делать следующее:

Если пользователь зашел в первый раз, вывести окно prompt с сообщением: «Добро пожаловать! Назовите, пожалуйста, ваше имя».

После того, как пользователь введет имя, записать имя, дату и время визита в localStorage.

Если пользователь открывает страницу не впервые (это можно узнать по наличию соответствующих записей в localStorage),
вывести в alert сообщение вида: «Добрый день, *имя пользователя*! Давно не виделись.
В последний раз вы были у нас *дата последнего посещения*» и перезаписать дату последнего посещения.

Дату можно вывести в любом удобочитаемом формате (не Timestamp, должен четко читаться день, месяц, год и время — часы и минуты).*/

function greeting() {

    let userName01 = localStorage.getItem('userName01');
    let now1 = localStorage.getItem('now1');

    if (userName01 === null) {
        userName01 = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя.");
        localStorage.setItem('userName01', userName01);
        let now = new Date();
        localStorage.setItem('now1', now);
    } else {
        alert(`Добрый день, ${userName01}! Давно не виделись. Последний раз вы были у нас ${now1}`);
        let now = new Date();
        localStorage.setItem('now1', now);
    }  
};

greeting();

//localStorage.clear(); // Очистка всех значений