const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.get('/', function(req,res){
    res.send('Olá mundo!');
});
/*Desafio 27/08/2021*/
app.post('/clientes', async(req,res)=>{
    
    await cliente.create(
        req.body
    ).then(cliente =>{
        return res.json({
            error:false,
            cliente
        });
    }).catch(function(erro){
        return res.json.status(400).json({
            error: true,
            message: "Código não está cadastrado!"
        });
    });
    res.send('Ciente foi inserido!');

    await aguardar(3000);

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve.ms);
        });
    };
});

app.post('/servicos', async(req,res)=>{

    await servico.create(
        req.body
    ).then(servico =>{
        return res.json({
            error:false,
            servico
        });
    }).catch(function(erro){
        return res.json.status(400).json({
            error: true,
            message: "Código não está cadastrado!"
        });
    });
    res.send('Serviço foi inserido!');

    await aguardar(3000);

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve.ms);
        });
    };
});

app.post('/pedidos', async(req,res)=>{
    let create=await pedido.create(
        req.body
    );
    res.send('Pedido foi inserido!');
});

app.get('/listaservicos', async(req,res)=>{
    await servico.findAll({
        order: [['nome', 'DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/ofertas', async(req,res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json(servicos);
    });
});

app.get('/servico/:id', async(req,res)=>{
    servico.findByPk(req.params.id)
    .then(servico =>{
        return res.json({
            error:false,
            servico
        });
    }).catch(function(erro){
        return res.json.status(400).json({
            error: true,
            message: "Código não está cadastrado!"
        });
    });
});

app.get('/cliente/:id', async(req,res)=>{
    cliente.findByPk(req.params.id)
    .then(cliente =>{
        return res.json({
            error: false,
            cliente
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message: "Código não cadastrado!"
        });
    });
});

app.get('/pedido/:id', async(req,res)=>{
    pedido.findByPk(req.params.id)
    .then(pedido =>{
        return res.json({
            error: false,
            pedido
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message: "Código não cadastrado!"
        });
    });
});


//1-Lista Cliente
app.get('/listaclientes', async(req,res)=>{
    await cliente.findAll({
        raw:true
    }).then(function(clientes){
        res.json({clientes})
    });
}); 

//2-Lista Cliente Antigo
app.get('/listaclientesAntigo', async (req, res) => {
    await cliente.findAll({
        order : [['createdAt','DESC']]
    }).then((cliente) => {
        res.json({
            cliente
        })
    });
});
 
//3-Lista Pedidos
app.get('/totalpedidos', async(req, res)=>{
    await pedido.findAll({
        raw: true
    }).then((pedido) => {
        res.json({
        pedido
        })
    });
});

//4-Todos Pedidos decrescente 
app.get('/listapedidos', async(req, res)=>{
    await pedido.findAll({
        order : [['valor','DESC']]
    }).then(function(pedidos){
        res.json({
            pedidos
        })
    });
});

//5-Total de cliente
app.get('/totalcliente', async (req, res) => {
    await cliente.count('id').then((clientes) => {
        res.json(clientes)
    });
});

//6-Informe a quantidade de pedidos solicitados
app.get('/qtdpedidos', async(req,res)=>{
    await pedido.count('id').then(function(pedidos){
        res.json(pedidos);
    });
});

//Desafio 30/08/2021

 app.get('/tpedido/:id', async(req,res)=>{
    await pedido.sum('valor', { where: {ClienteId: req.params.id}})
    .then((pedido)=>{
        return res.json({
            pedido
        })
    });
}); 

//Aula 31/08/2021
app.get('/atualizaservico', async(req,res)=>{
    await servico.findByPk(1)
    .then(servico =>{
       servico.nome='HTML/CSS/JS';
       servico.descricao='Páginas estáticas e dinâmica estilizadas';
       servico.save();
       return res.json({servico});
    });
});

app.put('/editarservico', (req,res)=>{
     servico.update(req.body,{
        where:{id: req.body.id}
    }).then(function(){
        return res.json({
          error: false,
          message: "Serviço foi alterado com sucesso."    
        });       
    }).catch(function(erro){
       return res.status(400).json({
        error:true,
        message:"Erro na alteração do serviço."
    });
   });
});

app.get('/servicosperdidos', async(req,res)=>{
    await servico.findByPk(1, {
        include:[{all:true}]
    }).then(servico=>{
        return res.json({servico});
    });    
});

app.put('/editarpedidoss', (req, res)=>{
    pedido.update(req.body,{
        where: {ServicoId: req.body.ServicoId}
    }).then(function(){
        return res.json({
            error:falsa,
            message: "Pedido modificado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            erro: true,
            message: "Não foi possível modificar o pedido"
        });
    });
});

//exercio 31/08/2021
//ex.1
app.get('/listaservicocliente/:id', async (req, res)=>{     
   
    await pedido.findAll({ where:{ ClienteId: [req.params.id]  } })
    .then(function(pedidos){
        res.json(pedidos)        
    });
    console.log(pedidos.valor.ClienteId)
});

//ex.2
app.put('/editarcliente',(req,res)=>{
    cliente.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente foi alterado com sucesso."
        });
        }).catch(function(erro){
            return res.status(400).json({
            error: true, 
            message: "Erro na alteração do serviço."
        });
    });
});

//ex3
app.put('/editarpedido',(req,res)=>{
    pedido.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso."
        });
        }).catch(function(erro){
            return res.status(400).json({
            error: true, 
            message: "Erro na alteração do serviço."
        });
    });
});

app.get('/excluircliente', async(req,res)=>{
    cliente.destroy({
        where: {id: 2}
    });
});

app.delete('/apagarcliente/:id',(req,res)=>{
    cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error:false,
            message: 'Cliente foi excluido com sucesso.'
        });
    }).catch(function(erro){
        return res.status(400).json({
        error: true,
        message: "Não foi possivel excluir o cliente."
        });
    });
});

app.delete('/apagarservico/:id',(req,res)=>{
    servico.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error:false,
            message: 'Serviço foi excluido com sucesso.'
        });
    }).catch(function(erro){
        return res.status(400).json({
        error: true,
        message: "Não foi possivel excluir o servico."
        });
    });
});

app.delete('/apagarpedido/:id',(req,res)=>{
    pedido.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error:false,
            message: 'Pedido foi excluido com sucesso.'
        });
    }).catch(function(erro){
        return res.status(400).json({
        error: true,
        message: "Não foi possivel excluir o pedido."
        });
    });
});

//Desafio 31/08/2021
//1. Liste todos os pedidos de um cliente
app.get('/listapedidocliente/:id', async (req, res)=>{     
   
    await pedido.findAll({ where:{ ClienteId: [req.params.id]  } })
    .then(function(pedidos){
        res.json(pedidos)        
    });
    console.log(pedidos.valor.ClienteId)
});

//2. Alterar o pedido acima utilizando o ClienteId
app.put('/editarpedido',(req,res)=>{
    pedido.update(req.body,{
        where: {ClienteId: req.body.ClienteId}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso."
        });
        }).catch(function(erro){
            return res.status(400).json({
            error: true, 
            message: "Erro na alteração do serviço."
        });
     });
});

let port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});