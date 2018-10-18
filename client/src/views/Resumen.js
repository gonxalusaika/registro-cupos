import React, {Component} from 'react';
import {Col, Row, Grid} from 'react-bootstrap';
import utils from '../utils';

class Resumen extends Component {
    constructor(props) {
        super(props);
        this.state = {rotaciones: [], mesas: []}
    }
    componentDidMount() {
        utils.checkHayEstado(this);
    }
    mesasSeleccionadas() {
        return this.state.rotaciones.map((rotacion) => this.state.mesas.find((mesa) => mesa.id === rotacion));
    }
    render() {
        return (
            <Grid>
                <h3>¡Muchas gracias por inscribirse!</h3>
                <p>Este es su cronograma para el congreso:</p>
                <div style={{paddingTop: '20px'}}>
                    {this.mesasSeleccionadas().map((mesa, index) => {
                        return (
                            <Row>
                                <Col md={1} style={{textAlign: 'right'}}>{index+1}</Col>
                                <Col md={11}><b>{mesa.topico}</b></Col>
                            </Row>
                        );
                    })}
                </div>
            </Grid>
        )
    }
}

export default Resumen;