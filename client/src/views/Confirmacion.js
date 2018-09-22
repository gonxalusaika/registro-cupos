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
    constructor(props){
        super(props);
        this.state = {mesasSeleccionadas:[], datosPersonales: {contacto:[]}};
    }
    componentDidMount() {
        utils.checkHayEstado(this);
    }
    confirmarInscripcion = async () =>  {
        const body = {
            datosPersonales: this.state.datosPersonales,
            rotaciones: this.state.mesasSeleccionadas
        }
        fetch('/api/inscripcion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then((resJson) => {
            alert('Respuesta: ' + resJson);
            resJson.json()
            .then((res) => alert(res));
        })
        .catch((err) => {
            alert('Error: ' + err);
        });
    }
    render() {
        const state = this.state;
        const mesasSeleccionadas = (
            <div>
                {state.mesasSeleccionadas.map((m) => {
                    const mesa = state.mesas.find((mesa) => mesa.id == m);
                    if(mesa){
                        return <p key={mesa.id}>{mesa.topico}</p>
                    }
                    else {
                        return <div></div>
                    }
                })}
            </div>
        );
        const contactos = (
            <div>
                {state.datosPersonales.contacto.map((contacto) => (
                  <p>{contacto}</p>  
                ))}
            </div>
        );
        return (
        <Grid>
            <h4>Confirme que los datos ingresados son correctos</h4>
            {state.mesasSeleccionadas}
            <DatoIngresado nombre="Nombre" valor={state.datosPersonales.nombre} />
            <DatoIngresado nombre="Email" valor={state.datosPersonales.email} />
            <DatoIngresado nombre="Organización" valor={state.datosPersonales.organizacion} />
            <DatoIngresado nombre="Usuario" valor={state.datosPersonales.usuario} />
            <DatoIngresado nombre="Forma de contacto" valor={contactos} />
            <DatoIngresado nombre="Mesas" valor={mesasSeleccionadas} />
            <Row>
                <Button bsStyle='primary' bsSize='large' onClick={this.confirmarInscripcion.bind(this)}>Confirmar</Button>
            </Row>
        </Grid>)
    }
}

export default Confirmacion;