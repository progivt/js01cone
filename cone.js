// напишите функцию coneVolume(d,h) и используйте ее так,
// так, чтобы функция solve() показывала объем ведра
// либо сообщение "Недопустимые данные".

function solve() {
	// получаем данные в виде строк из полей ввода на странице
	let d1 = document.getElementById("d1").value;
	let d2 = document.getElementById("d2").value;
	let h = document.getElementById("h").value;
	// высота конуса
	let h1 = (d2*h)/(d2-d1);
	// объём ведра
	if (d1>0 & d2>0 & h>0) {
		if(d1!=d2){  //если диаметры не равны, то (объем конуса) - (объем усеченного конуса)
			let v = (coneVolume(d2, h1) - coneVolume(d1, h1-h));
		}
		else{
			 v = Math.PI * ((d1/2)**2) * h; // если диаметры равны, то ищем объем цилиндра
		}
		alert("Объем конуса: " + v + " см^3");
	}

	else {
		alert("Недопустимые данные");
}

}
function coneVolume(d, h) {
	// вычисление объема полного конуса
	let v = 1/3*Math.PI*((d/2)**2)*h;
	return v;
}


