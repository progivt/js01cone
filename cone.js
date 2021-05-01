// напишите функцию coneVolume(d,h) и используйте ее так,
// так, чтобы функция solve() показывала объем ведра
// либо сообщение "Недопустимые данные".

function solve() {
	// получаем данные в виде строк из полей ввода на странице
	let d1 = (+document.getElementById("d2").value);
	let d2 = (+document.getElementById("d1").value);
	let h = (+document.getElementById("h").value);
	let h1 = d1*h/(d2-d1);
	let h2 = h1+h;
	
	
	
	 alert((coneVolume(d2, h2) - coneVolume(d1,h1)) + " Литров");
}

function coneVolume(d, h){
	// вычисление объема полного конуса
	return 1/12*Math.PI*d*d*h/1000; 
}

