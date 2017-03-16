<?php

$msg_box = ""; // в этой переменной будем хранить сообщения формы
$errors = array(); // контейнер для ошибок

$name = trim($_POST['name']);
$email = trim($_POST['email']);
// проверяем корректность полей
if($name == "") $errors[] = "Поле 'Представтесь, пожалуйста' не заполнено! <br />";
if(trim($_POST['tel'] == "")){
	if($email == ""){ 
		$errors[] = "Поле 'Ваш номер телефона' или 'Ваш электронный адрес' не заполнено! <br />";
	}else{
		if(!preg_match("|^[-0-9a-z_\.]+@[-0-9a-z_^\.]+\.[a-z]{2,6}$|i", $email)) { // прoвeрим email нa вaлиднoсть
			$errors[] = 'Нe вeрный фoрмaт email! >_< <br />'; // пишeм oшибку в мaссив
		}
	}
}
if(trim($_POST['text'] == "")) $errors[] = "Поле 'Ваше сообщение' не заполнено! <br />";

if(!empty($errors)){
	array_push($errors, "Обмaнуть рeшили?");
}

// если форма без ошибок
if(empty($errors)){     
	// собираем данные из формы
	$message  = "Имя пользователя: " . $name . "<br />";
	$message .= "Телефон пользователя: " . $_POST['tel'] . "<br />";
	$message .= "E-mail пользователя: " . $email . "<br />";
	$message .= "Текст письма: " . $_POST['text'];      
	send_mail($message); // отправим письмо
	// выведем сообщение об успехе
	$msg_box = "<span style='color: green;'>Сообщение успешно отправлено! Через некоторое время с вами свяжутся.</span>";
}else{
	// если были ошибки, то выводим их
	$msg_box = "";
	foreach($errors as $one_error){
		$msg_box .= "<span style='color: red;'>$one_error</span><br/>";
	}
}

// делаем ответ на клиентскую часть в формате JSON
echo json_encode(array(
	'result' => $msg_box
));

// функция отправки письма
function send_mail($message){
	
	// почта, на которую придет письмо
	$mail_to = "miznikov.1995@mail.ru"; 
	// тема письма
	$subject = "Письмо с Abi.ru";
			
	// заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
	$headers .= "From: Письмо с обратной связи <no-reply@test.com>\r\n"; // от кого письмо         
	 
	// отправляем письмо 
	mail($mail_to, $subject, $message, $headers);
}

?>