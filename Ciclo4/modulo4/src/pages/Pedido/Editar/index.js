import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { api } from '../../../config';

export const EditarPedido = (props) => {

    const [id] = useState(props.match.params.id);
    const [ClienteId, setClienteId] = useState('');
    const [ServicoId, setServicoId] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState('');

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const edtPedido = async e => {
        e.preventDefault();
        console.log("Editar")

        setStatus({
            formSave: true
        });

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.put(api + "/editarpedido", { id, ClienteId, ServicoId, valor, data }, { headers })
            .then((response) => {
                if (response.data.error) {
                    setStatus({
                        formSave: false,
                        type: 'error',
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        formSave: false,
                        type: 'success',
                        message: response.data.message
                    });
                }

            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível acessar a API.'
                });
            });

    };

    useEffect(() => {
        const getPedido = async () => {
            await axios.get(api + "/pedido/" + id)
                .then((response) => {
                    setClienteId(response.data.pedido.ClienteId);
                    setServicoId(response.data.pedido.ServicoId);
                    setValor(response.data.pedido.valor);
                    setData(response.data.pedido.data);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar a API.")
                });
        }
        getPedido();
    }, [id])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Editar um pedido</h1>
                    </div>

                    <div>
                        <Link to={"/visualizarpedido/"}
                            className="btn btn-outline-primary btn-sm m-1">Listar</Link>

                        <Link to={"/pedido/" + id}
                            className="btn btn-outline-primary btn-sm m-1">Consultar</Link>
                    </div>
                </div>

                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger">
                    {status.message}</Alert> : ""}

                {status.type === 'success' ? <Alert color="success">
                    {status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={edtPedido}>
                    <FormGroup className="p-2">
                        <Label>Id do Cliente</Label>
                        <Input type="text" name="ClienteId"
                            placeholder="Id do Cliente" value={ClienteId}
                            onChange={e => setClienteId(e.target.value)} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Id do serviço</Label>
                        <Input type="text" name="ServicoId"
                            placeholder="ID do servico" value={ServicoId}
                            onChange={e => setServicoId(e.target.value)} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Valor</Label>
                        <Input type="text" name="valor"
                            placeholder="Valor do pedido" value={valor}
                            onChange={e => setValor(e.target.value)} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Data</Label>
                        <Input type="text" name="data"
                            placeholder="Data do pedido" value={data}
                            onChange={e => setData(e.target.value)} />
                    </FormGroup>

                    {status.formSave ?
                        <Button type="submit" outline color="warning" disabled>Salvando...
                            <Spinner size="sm" color="warning" /></Button> :
                        <Button type="submit" outline color="warning">Salvar</Button>}

                </Form>
            </Container>
        </div>
    )
}