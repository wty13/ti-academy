var nome = prompt("Digite o seu nome:"); 
var n = prompt("Olá "+ nome + ". Digite um número:");

console.log(typeof(n));

var tipoVar = ( n )=>{
	alert("A variável é do tipo "+ typeof(n) );
}

tipoVar ( n );

alert("Uma string: "+ n +" será convertida em um inteiro: "+ typeof(parseInt(n)) );

document.write("Seja bem vindo..: "+ nome + "<br>");

document.write("Você digitou o número..: ("+ parseInt(n) + ")<br>");

document.write("O retorno da comparação booleana é..:"+ (parseInt(n)==parseInt(n)) + "<br>");

document.write("A soma dos valores é..:"+ (parseInt(n) + parseInt(n)) +"<br>");

document.write("A subtração dos valores..:"+ (parseInt(n)-parseInt(n)) +"<br>");

document.write("O resto da divisão é..:"+ (parseInt(n)%parseInt(n)) +"<br>");

document.write("O quadrado do número é..:"+ (parseInt(n) * parseInt(n)) + "<br>"); 

var fruta = prompt("Escolha três fruta se possível da lista [laranja, uva, pera, manga]...:");

switch(fruta){
	case 'laranja':
	document.write("Laranja esta na lista"+ "<br>");
	break;
	
	case 'uva': 
	document.write("Uva esta na lista"+ "<br>");
	break;

	case 'pera': 
	document.write("Pera esta na lista"+ "<br>");
	break;

	case 'manga': 
	document.write("Manga esta na lista"+ "<br>");
	break;
	
	default:
	document.write(nome+" a fruta "+ fruta +" escolhida não está na lista"+ "<br>");
	break;			
}

var fruta = prompt("Escolha três fruta se possível da lista [laranja, uva, pera, manga]...:");

switch(fruta){
	case 'laranja':
	document.write("Laranja esta na lista"+ "<br>");
	break;
	
	case 'uva': 
	document.write("Uva esta na lista"+ "<br>");
	break;

	case 'pera': 
	document.write("Pera esta na lista"+ "<br>");
	break;

	case 'manga': 
	document.write("Manga esta na lista"+ "<br>");
	break;
	
	default:
	document.write(nome+" a fruta "+ fruta +" escolhida não está na lista"+ "<br>");
	break;			
}

var fruta = prompt("Escolha três fruta se possível da lista [laranja, uva, pera, manga]...:");

switch(fruta){
	case 'laranja':
	document.write("Laranja esta na lista"+ "<br>");
	break;
	
	case 'uva': 
	document.write("Uva esta na lista"+ "<br>");
	break;

	case 'pera': 
	document.write("Pera esta na lista"+ "<br>");
	break;

	case 'manga': 
	document.write("Manga esta na lista"+ "<br>");
	break;
	
	default:
	document.write(nome+" a fruta "+ fruta +" escolhida não está na lista"+ "<br>");
	break;			
}