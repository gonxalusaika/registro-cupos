import React, {Component} from 'react';
import {Image, Col} from 'react-bootstrap';

const tituloStyle = {
    paddingTop: '20px',
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
        <div style={headerStyle}>
            <Col md={6}>
                <h2 style={tituloStyle}>EL <b>FUTURO</b> DEL <b>TRABAJO</b></h2>
            </Col>
            <Col md={6}>
                <Image src="img/adpugh-logo.png" responsive />
            </Col>
        </div>
        );
    }
}

export default Header;