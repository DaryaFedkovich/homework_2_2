alert("задание 2");
var our = prompt("количество часов"),
	minute = prompt("количество минут"),
	secunda = prompt("количество секунд");

	if((our >= 0 && our <= 24) || (minute >= 0 && minute <= 59) ||(secunda >= 0 && secunda <= 59)){
		document.write(our + ":" + minute +":" + secunda);
	}
	else{
		document.write("Число вне диапозона");	
	}
