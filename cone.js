// напишите функцию coneVolume(d,h) и используйте ее так,
// так, чтобы функция solve() показывала объем ведра
// либо сообщение "Недопустимые данные".

function solve() {
	let d1 = document.getElementById("d1").value;
	let d2 = document.getElementById("d2").value;
	let h = document.getElementById("h").value;
	// высота конуса
	let h1 = (d2*h)/(d2-d1);
	// объём ведра
	let v = 0;
	if (d1>0 & d2>0 & h>0) {
		if(d1!=d2){  //если диаметры не равны, то (объем конуса) - (объем усеченного конуса)
			 v = (coneVolume(d2, h1) - coneVolume(d1, h1-h)); //задача №2
		}
		else{
			 v = Math.PI * ((d1/2)**2) * h; // если диаметры равны, то ищем объем цилиндра // задача №2
		}
		alert("Объем конуса: " + v/1000.0 + " л ");
	}
    else {
		alert("Недопустимые данные");
    }
}   
function coneVolume(d, h) {
	// вычисление объема полного конуса
	// задача №1
	let v = 1/3*Math.PI*((d/2)**2)*h;
	return v;
}        
