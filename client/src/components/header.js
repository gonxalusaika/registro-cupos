import React, {Component} from 'react';
import {Image, Col, Grid} from 'react-bootstrap';

const tituloStyle = {
    color: '#449'
}
const headerStyle = {
    backgroundColor: "white",
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    width: '100%'
}

class Header extends Component {
    render() {
        return (
        <Grid style={headerStyle}>
            <Col md={6} sm={6} style={{marginTop: '10px', marginBottom: '10px'}}>
                <Image src="img/adpugh-logo.png" responsive style={{maxWidth:'40%', justifyContent:'flex-end'}} />
            </Col>
            <Col md={6} sm={6}>
                <h2 style={tituloStyle}>EL <b>FUTURO</b> DEL <b>TRABAJO</b></h2>
            </Col>
        </Grid>
        );
    }
}

export default Header;