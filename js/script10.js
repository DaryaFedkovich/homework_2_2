alert("задание 10");
var month = prompt("введите число:"),
	season = 0,
	seasonName = '0';
if (month == 1 || month == 2 || month == 12){
	season = 1;
}
else if (month == 3 || month == 4 || month == 5){
	season = 2;
}
else if (month == 6 || month == 7 || month == 8){
	season = 3;
}
else if (month == 9 || month == 10 || month == 11){
	season = 4;
}
else {
	alert("введено некорректное число");
}
switch(season){
	case 1:
	document.write('Winter <br />')
	break;
	case 2:
	document.write('Spring <br />')
	break;
	case 3:
	document.write('Summer <br />')
	break;
	case 4:
	document.write('Autumn <br />')
	break;
	default:
	document.write('упс...');
}
