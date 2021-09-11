window.onload = () => {

	const valor1 = document.querySelector("#v1");
	const valor2 = document.querySelector("#v2");
	const valorr = document.querySelector("#vr");
	const btnSomar = document.querySelector("#soma");


	btnSomar.addEventListener('click', ()=>{

		var cx1 = Number(valor1.value);
		var cx2 = Number(valor2.value);
		var cxr = Number(valorr.value);
		var r = cx1 + cx2;

		if (r === Number(cxr)){
			alert('Valor certo');
		} 
		else {
			alert('Valor errado');
		}	 	
	});
};	 