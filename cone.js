// напишите функции x1 и x2 и измените функцию solve, 
// так, чтобы она показывала решения (решение) 
// уравнения, введенного пользователем на странице 

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
