import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, Row, Grid, Image} from 'react-bootstrap';

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

            <Image src="img/inicio.PNG" responsive style={{padding: '40px'}}/>
            {/* <Row style={{padding: '30px'}}>
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
                <b>19 DE OCTUBRE DE 2018</b><br />
                HOTEL SHERATON MONTEVIDEO
            </Row>
            <br />
            <Row style={letraGrisStyle}>
                ELECCIÓN DE MESAS REDONDAS
            </Row> */}
            <Row style={{textAlign: 'center'}}>
                <Link to="/signup"><Button bsSize='large' bsStyle='primary'>Registrarse</Button></Link>
            </Row>
            </Grid>);
    }
}

export default Home;