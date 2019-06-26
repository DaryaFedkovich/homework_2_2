alert("задание 9");
var name = prompt("Your name"),
	login = prompt("Your login"),
	pass = prompt("Your password");

if (login == 'admin' && pass == 'nimda'){
	alert("Добро пожаловать, " + name + "! Вы успешно войшли на сайт.");
}
else
	alert(name + ", вы неверно ввели логин и пароль!")
