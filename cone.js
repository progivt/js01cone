// напишите функцию coneVolume(d,h) и используйте ее так,
// так, чтобы функция solve() показывала объем ведра
// либо сообщение "Недопустимые данные".

function solve() {
	// получаем данные в виде строк из полей ввода на странице
	let d1 = document.getElementById("d1").value;
	let d2 = document.getElementById("d2").value;
	let h = document.getElementById("h").value;

	alert(coneVolume(d1, h));
}

function coneVolume(d, h){
	// вычисление объема полного конуса
	return d+1;
}
