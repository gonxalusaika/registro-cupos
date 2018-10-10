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

let seEstaMandando = false;

class Confirmacion extends Component {
    constructor(props){
        super(props);
        this.state = {mesasSeleccionadas:[], datosPersonales: {contacto:[]}};
    }
    componentDidMount() {
        utils.checkHayEstado(this);
    }
    confirmarInscripcion = async () =>  {
        if (!seEstaMandando) {
            seEstaMandando = true;
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
                resJson.json()
                .then((res) =>{
                    console.log(res);
                    this.props.history.push({pathname:"/resumen", state:{...res, mesas:this.state.mesas}});
                });
            })
            .catch((err) => {
                alert('Ha ocurrido un error al completar su inscripcion. Por favor, intente mas tarde');
            });
        }
    }
    render() {
        const state = this.state;
        const mesasSeleccionadas = (
            <div>
                {state.mesasSeleccionadas.map((m) => {
                    const mesa = state.mesas.find((mesa) => mesa.id === m);
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
                  <p><small>{contacto}</small></p>  
                ))}
            </div>
        );
        return (
        <Grid>
            <h4>Confirme que los datos ingresados son correctos</h4>
            <DatoIngresado nombre="Nombre" valor={state.datosPersonales.nombre} />
            <DatoIngresado nombre="Email" valor={state.datosPersonales.email} />
            <DatoIngresado nombre="Organización" valor={state.datosPersonales.organizacion} />
            <div style={{marginTop:'10px'}} >
                <DatoIngresado nombre="Mesas" valor={mesasSeleccionadas} />
            </div>
            <Row>
                <Button bsStyle='primary' bsSize='large' style={{float: 'right'}} disabled={seEstaMandando} onClick={this.confirmarInscripcion.bind(this)}>Confirmar</Button>
            </Row>
        </Grid>)
    }
}

export default Confirmacion;