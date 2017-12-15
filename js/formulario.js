function  calcularIMC(){

var form = document.getElementById("formulario");

var kilos = parseInt(form.kilos.value); 
var metros = parseInt(form.metros.value);
var centimetros = parseInt(form.centimetros.value);

var altura = (metros *100 + centimetros)/100;

var imc = kilos/(altura*altura);
formulario.imc.value = imc.toFixed(2);



	if (imc <= 20){
		formulario.resultado.value = "Abaixo do Peso";
	}else if (imc  > 20 && imc <= 25) {
		formulario.resultado.value = "Peso Ideal";
	}else if (imc > 25 && imc <= 30) {
		formulario.resultado.value = "Sobrepeso";
	}else if (imc >30 && imc <= 35) {
		formulario.resultado.value = "Obesidade Moderada";
	}else if (imc > 35 && imc <= 40)  {
		formulario.resultado.value = "Obesidade Severa";
	}else if (imc > 40 && imc <= 50){
		formulario.resultado.value = "Obesidade Mórbida";
	}else{
		formulario.resultado.value = "Super Obesidade";
	}

}//fim da função calcular IMC