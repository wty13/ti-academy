/*var nome = "Marcelo";
console.log(nome.length);
console.log(nome[0]);//M*/

/*match()
O metodo match procura uma palavra em uma string.
Existem alguns parâmetros de pesquisa que permite uma maior precisão conforme a
flags g / i /m
*/

var palavras ="Maça doce";

//console.log( palavras.match(/D/gi));

/*search()*/
//console.log(palavras.search( /d/gi));

/*replace()*/
/*var str ="lorem	ipsum"+ "elit. pridence quisquam";

var mudarStr = str.replace(/fugiat/gi, 'Xxxx');

console.log(mudarStr);*/

/*localeCompare()*/

/*var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();*/

//console.log(`Este é o c1: ${c1} Este é o c2 ${c2}`);

/*var comparacao = c1.localeCompare(c2);
console.log(comparacao);*/

var p = ' fpalavra+ ';
var r = p.trim();
console.log(r);
var s = r.replace(/f/gi, '');
console.log(s);
var sub_a = s.replace('+', '');
console.log(`Removido: ${sub_a}`);
//console.log(p.replace(/'f'/gi, ''));
//console.log(p);

// toLocaleString
//Formatação de moedas
var valor = 1.35//1,35;
var formatarmoeda = valor.toLocaleString('pt-BR',{
	style: 'currency',
	currency:'BRL'
}); 
console.log(formatarmoeda);
