import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, Row, Grid} from 'react-bootstrap';

const letraGrandeStyle = {
    fontSize: '7rem',
    textAlign: 'right'
}

const letraMedianaStyle = {
    fontSize: '2rem'
}

const letraGenericoStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    lineHeight: '100%'
}

const letraAzulStyle = {
    ...letraGenericoStyle,
    color: '#449'
}

const letraGrisStyle = {
    ...letraGenericoStyle,
    color: '#777'
}

class Home extends Component {
    render() {
        return (
        <Grid>
            <Row>
                <Col xs={6} md={6} style={letraGrandeStyle}>
                    XXII
                </Col>
                <Col xs={6} md={6} style={letraMedianaStyle}>
                    CONGRESO<br />
                    INTERNACIONAL DE<br />
                    GESTIÓN HUMANA
                </Col>
            </Row>
            <Row style={letraAzulStyle}>
                <b>18 Y 19 DE OCTUBRE DE 2018</b><br />
                HOTEL SHERATON MONTEVIDEO
            </Row>
            <Row style={letraGrisStyle}>
                4 CONFERENCISTAS INTERNACIONALES <br />
                6 TALLERES TEÓRICO-PRÁCTICO <br />
                PANELES DE INTERACTIVOS<br />
                ACTIVIDADES RECREATIVAS Y SOCIALES<br />
                MÁS DE 20 MESAS REDONDAS CON EXPERTOS DE LA REGIÓN
            </Row>
            <Row>
                <Link to="/signup" style={{display: 'inline-block'}}><Button>Registrarse</Button></Link>
            </Row>
        </Grid>);
    }
}

export default Home;