import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, Row, Grid, Glyphicon, Modal} from 'react-bootstrap';
import Mesas from './Mesas';
import utils from '../utils';

const itemStyle = {
    background: '#eee',
    padding: '30px',
    marginBottom: '15px',
    boxShadow: '0 0 2px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22)',
    textAlign: 'center'
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
    render() {
        return (
            <Grid>
                <h4>Elija los temas de su interés</h4>
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
                        <Mesas mesas={this.state.mesas} mesasSeleccionadas={this.state.mesasSeleccionadas} seleccionarMesa={this.seleccionarMesa.bind(this)} />
                    </Modal.Body>
                </Modal>
                <Link to={{pathname:"/confirmacion", state:this.state}} style={{float: 'right'}}><Button bsStyle='primary' bsSize='large'>Siguiente</Button></Link>
            </Grid>
        )
    }
}

export default Rotaciones;