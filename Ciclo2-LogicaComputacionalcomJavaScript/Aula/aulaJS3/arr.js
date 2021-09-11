var frutas=["Uva", "Banana", "Amora", "Melão"]; // var frutas = Array();
console.log(`Qts do Array: ${frutas.length} fruta: ${frutas[0]}`);

var frutas2 = ["Maça", "Pera", "Laranja"];

var todasAsFrutas = frutas.concat(frutas2);
console.log(frutas);
console.log(todasAsFrutas);

var retornoIndexOf = todasAsFrutas.indexOf("Amora");
console.log(retornoIndexOf);//2

var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray);

var outraLista = ["Bola", "Peteca"]; 
var novaLista = outraLista.push("Boneca", "Qualquer brinquedo"); 

console.log(novaLista);
console.log(outraLista);
console.log(outraLista[3]);

console.log(outraLista.pop());

console.log(outraLista);
console.log(outraLista.reverse());

var removerPrimeiro = ["fusca", "variante"];
removerPrimeiro.shift();
console.log(removerPrimeiro);

var alfa = [4, 6, 9, 2];
alfa.sort();

console.log(alfa);

alfa.unshift(10);
console.log(alfa);

var f=["Uva", "Banana", "Amora", "Melão"];
var idx = f.indexOf("Banana");
console.log(idx);
console.log( f.splice(idx, 1));
console.log(f);
//var r = f.splice()
//console.log(f);


var dados = [
{nome:"Marcelo"},
{nome:"Raphael"}
]

//console.log(dados[0].nome);
//console.log(dados[1].nome);

function Pessoa2(nome, sobrenome, idade, doc=[]){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg : doc[0],
		cpf : doc[1]
	} 
}

var pessoa2 = new Pessoa2("Rapahel","", "",['22','555']);

//console.log("Nome: "+ pessoa2.nome+' '+ pessoa2.doc.rg);
console.log(`Nome ${pessoa2.nome} - cpf: ${pessoa2.doc.cpf}`);
