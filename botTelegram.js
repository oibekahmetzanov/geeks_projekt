
const botToken = '6328732926:AAGBq5BD92kHgEYlFXU0ISrNPIjqmJ-OVug';
const chatId = '730949705';

const modalSuccess = document.getElementById('myModalSuccess');
const span = document.getElementsByClassName("closeSuccess")[0];
const modalFailure = document.getElementById('myModalFailure');



document.getElementById('sendMessage').addEventListener('click', () => {
    const input1Value = document.getElementById('input1').value;
    const input2Value = document.getElementById('input2').value;
    const message = `Имя: ${input1Value}\nНомер телефона: ${input2Value}`;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `https://api.telegram.org/bot${botToken}/sendMessage`, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    const data = JSON.stringify({
        chat_id: chatId,
        text: message
    });

    xhr.send(data);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            modalSuccess.style.display = "block";
            console.log('Сообщение отправлено:', xhr.responseText);
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            modalFailure.style.display = "block";
            console.error('Ошибка отправки сообщения:', xhr.status, xhr.statusText);
        }
    };
});

span.onclick = function () {
    modalSuccess.style.display = "none";
    modalFailure.style.display = "none";
}
