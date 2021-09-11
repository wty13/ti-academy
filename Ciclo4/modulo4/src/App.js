import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/';
import { Menu } from './components/Menu';

import { Cliente } from './pages/Cliente/Cliente';
import { VisualizarCliente } from './pages/Cliente/VisualizarCliente';
import { EditarCliente } from './pages/Cliente/Editar';
import { CadastrarCliente } from './pages/Cliente/Cadastrar';

import { VisualizarServico } from './pages/Servico/VisualizarServico';
import { Cadastrar } from './pages/Servico/Cadastrar';
import { Editar } from './pages/Servico/Editar';
import { Servico } from './pages/Servico/Servico';

import { VisualizarPedido } from './pages/Pedido/VisualizarPedido';
import { Pedido } from './pages/Pedido/Pedido';
import { EditarPedido } from './pages/Pedido/Editar';
import { CadastrarPedido } from './pages/Pedido/Cadastrar';





function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/visualizarcliente" component={VisualizarCliente} />
          <Route path="/cliente/:id" component={Cliente} />
          <Route path="/editarcliente/:id" component={EditarCliente} />
          <Route path="/cadastrar-cliente" component={CadastrarCliente} />

          <Route path="/visualizarpedido" component={VisualizarPedido} />
          <Route path="/pedido/:id" component={Pedido} />
          <Route path="/cadastrar-pedido" component={CadastrarPedido} />
          <Route path="/editarpedidoss/:id" component={EditarPedido} />

          <Route path="/visualizarservico" component={VisualizarServico} />
          <Route path="/servico/:id" component={Servico} />
          <Route path="/cadastrar-servico" component={Cadastrar} />
          <Route path="/editarservico/:id" component={Editar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
