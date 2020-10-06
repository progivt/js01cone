// напишите функции x1 и x2 и измените функцию solve, 
// так, чтобы она показывала решения (решение) 
// уравнения, введенного пользователем на странице 

function solve() {
	// получаем данные в виде строк из полей ввода на странице
	let d1 = Number(document.getElementById("d1").value);
	let d2 = Number(document.getElementById("d2").value);
	let h = Number(document.getElementById("h").value);
	
	if (typeof(d1) === "number" && typeof(d2) === "number" && typeof(h) === "number" && d1 > 0 && d2 > 0 && h > 0) { // проверяем ввод
		// пытаемся найти объем усеченного конуса функцией для обычного
		let v1 = 0;
		let v2 = 0;
		if (Math.abs(d1 - d2) > 0.000000000001) { // проверяем, что диаметры не равны
			let k = (d1 / 2.0) / ((d1 - d2) / 2.0); // коэф. подобия
			let h2 = h * k; // высота полного конуса с таким же основанием
			v1 = coneVolume(d2, h2 - h); // натягиваем сову на глобус
			v2 = coneVolume(d1, h2); // x2
		}
		else {
			v2 = Math.PI * ((d1/2.0)**2.0) * h; // если равны, ищем объем цилиндра
		}
		alert("Объем конуса: " + (v2 - v1)/1000.0 + " л");
		//alert("Проверка: " + testVolume(d1, d2, h)/1000.0);
	}
	else {
		alert("Недопустимые данные!");
	}
}

function coneVolume(d, h) {
	// вычисление объема полного конуса
	return ((1.0/3.0) * Math.PI * ((d/2.0)**2.0) * h);
}

/*
function testVolume(d1, d2, h) {
	return ((1.0/3.0) * Math.PI * h * ((d1/2.0)**2.0 + (d1/2.0)*(d2/2.0) + (d2/2.0)**2.0));
}*/
