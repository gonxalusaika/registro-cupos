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
                    {this.mesasSeleccionadas().map((mesa) => {
                        return (
                            <Row>
                                <Col md={5} style={{textAlign: 'right'}}>10:30</Col>
                                <Col md={7}><b>{mesa.topico}</b></Col>
                            </Row>
                        );
                    })}
                </div>
            </Grid>
        )
    }
}

export default Resumen;