import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, Row, Grid} from 'react-bootstrap';
import utils from '../utils';

function DatoIngresado({nombre, valor}) {
    return (
        <Row>
            <Col md={4}><b>{nombre}</b></Col>
            <Col md={8}>{valor}</Col>
        </Row>
    );
}

class Confirmacion extends Component {
    componentDidMount() {
        utils.checkHayEstado(this);
        console.log(this.state)
    }
    render() {
        const state = this.props.location.state;
        console.log(state);
        const mesasSeleccionadas = (
            <div>
                {state.mesasSeleccionadas.map((mesa) => (
                    <p>{state.mesas.find((i) => i.id === mesa).topico}</p>
                ))}
            </div>
        );
        const contactos = (
            <div>
                {state.contacto.map((contacto) => (
                  <p>{contacto}</p>  
                ))}
            </div>
        );
        return (
        <Grid>
            <h4>Confirme que los datos ingresados son correctos</h4>
            <DatoIngresado nombre="Nombre" valor={state.nombre} />
            <DatoIngresado nombre="Email" valor={state.email} />
            <DatoIngresado nombre="Organización" valor={state.organizacion} />
            <DatoIngresado nombre="Usuario" valor={state.usuario} />
            <DatoIngresado nombre="Forma de contacto" valor={contactos} />
            <DatoIngresado nombre="Mesas" valor={mesasSeleccionadas} />
            <Row>
                <Link to={{pathname:"/confirmacion", state:this.state}} style={{float: 'right'}}>
                <Button bsStyle='primary' bsSize='large'>Confirmar</Button>
                </Link>
            </Row>
        </Grid>)
    }
}

export default Confirmacion;