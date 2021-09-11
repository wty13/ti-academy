window.onload=function(){

//produtos
(()=>{

	let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");

	for(let idx in produtos){
		mostrarProdutosCliente.innerHTML += `<li class='itemProduto' data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc} </li>`
	}

})(produtos)

//compra
const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");

const cestaDoCliente = document.querySelector("ul#cestaDoCliente");

const mostraTotalCompra = document.querySelector("#mostraTotalCompra");

const armazenaIten=[];
var totalPedido=0;

itemProduto.forEach((item)=>{

	item.addEventListener('click',()=>{
		//alert("lista");
		li = document.createElement("li");
		li.setAttribute('data-preco', (item.dataset.preco));
		li.setAttribute('class', 'itemProduto');

		if(armazenaIten.indexOf(item.textContent) == -1){

			armazenaIten.push(item.textContent);
			
			cestaDoCliente.appendChild(li).textContent = item.textContent;	

			totalPedido += Number(item.dataset.preco);

			mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', 
				{style: 'currency', currency:'BRL'}
				)			

		}else{
			alert(`este item ${item.textContent} já está na sua cesta`);
		}
	});
});

const itemDaCesta = document.querySelectorAll("#cestaDoCliente");
const list = document.querySelector("ul#cestaDoCliente");

itemDaCesta.forEach((itens)=>{
	
	itens.addEventListener('click',(itemDaCesta)=>{
		
		var itens = armazenaIten.indexOf(itemDaCesta.target.textContent);
		if (itens > -1) {
			
			totalPedido -= Number(itemDaCesta.target.dataset.preco);

			armazenaIten.splice(itens, 1);
			
			cestaDoCliente.removeChild(list.childNodes[itens]);
			
			mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
		}	
	});
});

}//fim