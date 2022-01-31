/*
Задание 3.

Дан JSON-файл с информацией о выручке фирмы по кварталам за период с 2017 по 2019 год. Файл доступен по этой ссылке.

Вам нужно написать код приложения, интерфейс которого состоит из:

        Выпадающего списка (использовать тег select, подробная документация здесь), в котором можно выбрать год с 2017 по 2018.
        Кнопки «Загрузить отчет».

Пользователь выбирает год в списке и нажимает кнопку «Загрузить отчет». Если год не выбран, вывести сообщение «Выберите, пожалуйста, год». Если год выбран, отправить XHR-запрос к JSON-файлу, используя URL, указанный выше, обработать его содержимое и вывести информацию о выручке в выбранном году в виде таблицы.*/

function pageLoaded() {
    // Окно выбора года
const period = document.getElementById('period');
   //Ищем кнопку, по нажатию на которую будет запрос
const btn = document.querySelector('report-button');
   
    
    btn.addEventListener("click", sendRequest);
    
    function sendRequest() {
      if (validatePeriod()) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440`);
        xhr.send();
        
        xhr.onerror = function() {
          writeOutput('При отправке запроса произошла ошибка');
        }
        
        xhr.onload = function() {
          if (xhr.status == 200) {
            let data = JSON.parse(xhr.response);
            writeOutput();
          }
        }
      }
    
  
    function writeOutput() {

    
        var table = document.createElement("table");
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);
    
            var tr1 = document.createElement('tr');
            var tr2 = document.createElement('tr');
         
                var th1 = document.createElement('th');
                var th2 = document.createElement('th');
                var th3 = document.createElement('th');
                var th4 = document.createElement('th');
    
                th1.innerHTML = '1 кв.'; 
                th2.innerHTML = '2 кв.';
                th3.innerHTML = '3 кв.';
                th4.innerHTML = '4 кв.';
    
                tr1.appendChild(th1);
                tr1.appendChild(th2);
                tr1.appendChild(th3);
                tr1.appendChild(th4);
            
                var td5 = document.createElement('td');
                var td6 = document.createElement('td');
                var td7 = document.createElement('td');
                var td8 = document.createElement('td');

                td5.innerHTML = (`${data[0].sales.q1}`);
                td6.innerHTML = (`${data[0].sales.q2}`);
                td7.innerHTML = (`${data[0].sales.q3}`);
                td8.innerHTML = (`${data[0].sales.q4}`);
   
                tr2.appendChild(td5);
                tr2.appendChild(td6);
                tr2.appendChild(td7);
                tr2.appendChild(td8);
              
            tbody.appendChild(tr1);
        
            tbody.appendChild(tr2);
    
        document.getElementById("myTable").appendChild(table);
    } 

  function validatePeriod() 
      let validated = true;
      if (period.value === "Выберете, пожалуйста, год" || isNaN(+period.value)) {
        validated = false;
      }
      return validated;
    }
  }
  
  document.addEventListener("DOMContentLoaded", pageLoaded);
 