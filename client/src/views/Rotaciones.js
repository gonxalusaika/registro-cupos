import React, {Component} from 'react';
import {Button, Col, Row, Grid, Glyphicon, Modal} from 'react-bootstrap';
import Mesas from './Mesas';
import utils from '../utils';

const itemStyle = {
    background: '#eee',
    padding: '25px',
    marginBottom: '15px',
    boxShadow: '0 0 2px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22)',
    textAlign: 'center',
    height: '170px'
};

const RotacionItem = function({index, mesa, onShow}) {
    let elemento;
    if (mesa) {
        elemento = (
                <p>{mesa.topico}</p>
        );
    }
    else {
        elemento = (<div>
                <div>No hay una mesa seleccionada</div>
                <Button bsSize="large"><Glyphicon glyph="plus" /></Button>
            </div>
        );
    }
    return (
        <div style={itemStyle} onClick={onShow}>
            <h4>Rotacion {index+1}</h4>
            {elemento}
        </div>
    )
}

class Rotaciones extends Component {
    constructor(props) {
        super(props);
        this.state = {mesasSeleccionadas: [null, null, null, null, null], mesas: []};
    }
    fetchMesas = async () => {
        const response = await fetch('/api/mesas');
        const mesas = await response.json();
        console.log(mesas);
        this.setState({mesas: mesas});
    }
    componentDidMount() {
        utils.checkHayEstado(this);
        if (!this.state.mesasSeleccionadas) {
            this.setState({mesasSeleccionadas: [null, null, null, null, null]});
        }
        this.fetchMesas();
    }
    onShow(index) {
        this.setState({ show: true, indexActual: index });
    }
    onHide() {
        this.setState({show: false});
    }
    seleccionarMesa(mesa) {
        const mesasSeleccionadas = Array.from(this.state.mesasSeleccionadas);
        mesasSeleccionadas[this.state.indexActual] = mesa.id;
        this.setState({show: false, mesasSeleccionadas: mesasSeleccionadas});
        console.log(this.state);
    }
    siguientePantalla() {
        if (this.state.mesasSeleccionadas.indexOf(null) > -1)
        {
            alert('Debe llenar todas las rotaciones antes de continuar');
        }
        else {
            this.props.history.push({pathname:"/confirmacion", state:this.state});
        }
    }
    render() {
        return (
            <Grid>
                <h4>Elección de mesas redondas.</h4>
                <p>La dinámica se llevará a cabo en 5 rotaciones de 30 minutos cada una.
                    Debe elegir 5 mesas de acuerdo a sus intereses.
                    Tenga en cuenta que cada mesa tiene un cupo limitado.</p>
                <br />
                <Row>
                    {this.state.mesasSeleccionadas.map((mesa, index) => {
                        const offset = index === 3 ? 2 : 0;
                        return (
                            <Col md={4} mdOffset={offset} key={index}>
                                <RotacionItem index={index} mesa={this.state.mesas.find((m) => m.id === mesa)} onShow={this.onShow.bind(this, index)} />
                            </Col>)
                    })}
                </Row>
                <Modal bsSize="large" show={this.state.show} onHide={this.onHide.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Seleccione una mesa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Mesas mesas={this.state.mesas} rotacion={this.state.indexActual} mesasSeleccionadas={this.state.mesasSeleccionadas} seleccionarMesa={this.seleccionarMesa.bind(this)} />
                    </Modal.Body>
                </Modal>
                <Button bsStyle='primary' bsSize='large' style={{float: 'right'}} onClick={this.siguientePantalla.bind(this)}>Siguiente</Button>
            </Grid>
        )
    }
}

export default Rotaciones;