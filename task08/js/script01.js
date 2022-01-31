/*Задание 8.

Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

        Заголовок первого input — «номер страницы».
        Заголовок второго input — «лимит».
        Заголовок кнопки — «запрос».

При клике на кнопку происходит следующее:

        Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводится ниже текст «Номер страницы вне диапазона от 1 до 10»;
        Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводится ниже текст «Лимит вне диапазона от 1 до 10»;
        Если и первый, и второй input не в диапазонах или не являются числами — выводится ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
        Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input. */


const button05 = document.getElementById('button05');     

button05.addEventListener('click', () => {           
  const pageNumber = +document.getElementById('inputPageNumber').value;      
  const limit = +document.getElementById('inputLimit').value;   
  let pageError = document.getElementById('pageError');
  let limitError = document.getElementById('limitError');        // Объявляем поля для вывода сообщений об ошибках
  let totalError = document.getElementById('totalError');
  const resultNode = document.querySelector('.j-result05');        // Ишем ноду для вставки результата запроса
  if (!(pageNumber >= 1 && pageNumber <= 10 || limit >= 1 && limit <= 10)) {
    totalError.textContent = "Номер страницы и лимит вне диапазона от 1 до 10";
  }
  else if (!(pageNumber >= 1 && pageNumber <= 10)) {
    pageError.textContent = "Номер страницы вне диапазона от 1 до 10";
  }
  else if (!(0 < limit&&limit < 11)) {                                          // Проверка
    limitError.textContent = "Лимит вне диапазона от 1 до 10";
  } else {
    fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)   // Если проверка прошла, делаем запрос с условиями из input
    .then((response) => {               //Объект response после реализации запроса
      const result = response.json();   
      return result;
      })
      .then ((data) => {                // Объект результата в формате JSON
        function displayResult(data) {
          let cards = '';
          data.forEach(item => {
            const cardBlock = `
              <div class="card">          
                <img
                  src="${item.download_url}"
                  class="card-image"
                  width="50%" 
                  height="50%"
                />
                <p>id: ${item.id}</p>
                <p>author: ${item.author}</p>
                <p>width: ${item.width}</p>
                <p>height: ${item.height}</p>
                <p>url: ${item.url}</p>
                <p>download_url: ${item.download_url}</p>
              <div>
            `;
            cards = cards + cardBlock;  // Верстка карточек
          });
          resultNode.innerHTML = cards; 
          localStorage.setItem("cards", cards); // Записываем cards в localStorage 
        }
        displayResult(data);
      });
  }
});