/*Задание 7.

Написать код приложения, интерфейс которого состоит из поля ввода и кнопки «Получить список задач». При нажатии на кнопку нужно отправить запрос с помощью fetch на URL https://jsonplaceholder.typicode.com/users/3/todos. Число 3 представляет собой id пользователя, вместо него нужно подставить число, введенное в поле. Если пользователь с таким id существует, вернется список задач для этого пользователя, каждая задача представлена объектом.
Где title — описание задачи, а completed — флаг, отображающий, выполнена задача или нет. Вывести данный список на страницу, оформив соответствующим образом: в виде списка (ul или ol), выполненные задачи должны быть написаны зачеркнутым текстом. Если пользователь с введенным id не существует, вывести сообщение:

«Пользователь с указанным id не найден».*/

const btn = document.querySelector('.btn-get-tasks'); // Кнопка из HTML

btn.addEventListener('click', () => {
    const inpValue = +document.querySelector('.tasks-id-input').value;
    // Делаем запрос за данными
    const resultNode = document.querySelector('.tasks-result');        // Ишем ноду для вставки результата запроса
    if (!(inpValue >= 1 && inpValue <= 10)) {
        resultNode.innerHTML = 'Пользователь с указанным id не найден';
    } else {      
    fetch(`https://jsonplaceholder.typicode.com/users/${inpValue}/todos`) //фетч работает на промисах
        .then((response) => {
        // Объект ответа на запрос
        console.log('response', response); //объект респонс после реализации запроса
        // Превращаем объект в JSON. Мы не можем его сразу прочитать,
        // надо отдать в следующий then
        const result = response.json();
        console.log('result', result);
        return result;
        })
        .then ((data) => {
            function displayResult(data){
                let tasks = '';
                data.forEach(item =>{
                    const tasks1 =`<div class="tasks">
                        <li>userId: ${item.userId}</li>
                        <li>id: ${item.id}</li>  
                        <li>title: ${item.title}</li>
                        <li>completed: ${item.completed}</li>
                    <div>
                    `;
                    tasks = tasks + tasks1;        
                });
                resultNode.innerHTML = tasks;
            }
        // Объект результата в формате JSON
        console.log(data);
        displayResult(data);
        })
        .catch(() => { console.log('error') });    
    }
});