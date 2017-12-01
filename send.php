<?php 
// Извлекаем данные из формы
$name = htmlspecialchars ($_POST['name']);
$email = htmlspecialchars ($_POST['email']);
$tel = htmlspecialchars ($_POST['phone']);
$message = htmlspecialchars ($_POST['message']);

// Формируем заголовки письма
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html;charset=utf-8 \r\n";
$headers .= "From: Slava Movshuk <v.movshuk@yandex.ru>\r\n";
$headers .= "Reply-To: v.movshuk@yandex.ru\r\n";

// Составл¤ем текст письма админу
$message = "<p>Привет админ, новая заявка</p>
<p>Имя: $name</p>
<p>Тел: $tel</p>
<p>E-mail: $email</p>
<p>Сообщение: $message</p>";

// отсылаем письмо админу
mail( "v.movshuk@yandex.ru", "mail from site", $message, $headers );


//if (mail( "v.movshuk@yandex.ru", "mail from site", $message, $headers ))
// {
//    echo "сообщение успешно отправлено";
//} else {
//    echo "при отправке сообщения возникли ошибки";
//}

// Отправл¤ем пользователя на страницу "Спасибо"
header( "Location: thank.html");
?>