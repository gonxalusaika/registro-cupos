import React from 'react';
import {Component} from 'react';
import {Grid, FormGroup, ControlLabel, FormControl, Button, Form, Col, Checkbox} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <Col componentClass={ControlLabel} md={3}>
            {label}
        </Col>
        <Col md={9}>
            <FormControl {...props} />
        </Col>
      </FormGroup>
    );
  };


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {contacto:[]};
        this.onChangeContacto = this.onChangeContacto.bind(this);
    }
    onChangeEmail(e) {
        this.setState({email:e.target.value});
    }
    onChangeNombre(e) {
        this.setState({nombre:e.target.value});
    }
    onChangeOrganizacion(e) {
        this.setState({organizacion:e.target.value});
    }
    onChangeUsuario(e) {
        this.setState({usuario:e.target.value});
    }
    onChangeContacto(contacto,e) {
        if (e.target.checked) {
            this.setState((state, props) => ({contacto: [...state.contacto, contacto]}));
        }
        else {
            this.setState((state, props) => ({contacto: this.state.contacto.filter((item) => item !== contacto)}));
        }
    }
    render() {
        const contactos = ['Celular', 'Email', 'Linkedin', 'Otro'].map((contacto) => {
            return (
                <Checkbox 
                    onClick={this.onChangeContacto.bind(this, contacto)} >
                        {contacto}
                    </Checkbox>
            );
        })
        return (
        <Grid>
            <h4>Para continuar ingrese sus datos</h4>
            <Form horizontal>
                <FieldGroup
                    id="idNombre"
                    type="text"
                    label="Nombre"
                    onChange={this.onChangeNombre.bind(this)}
                    placeholder="Juan Pérez" />
                <FieldGroup 
                    id="idEmail"
                    type="text"
                    label="Email"
                    onChange={this.onChangeEmail.bind(this)}
                    placeholder="email@ejemplo.com" />
                <FieldGroup 
                    id="idOrganizacion"
                    type="text"
                    label="Organización"
                    onChange={this.onChangeOrganizacion.bind(this)}
                    placeholder="Nombre de su organización" />
                <FieldGroup 
                    id="idUsuario"
                    type="text"
                    label="Numero de usuario"
                    onChange={this.onChangeUsuario.bind(this)}
                    placeholder="Se indica en el email" />
                <FormGroup>
                    <Col componentClass={ControlLabel}>¿Qué canal de contacto desea compartir con los demás participantes durante una dinámica?</Col>
                    <br />
                    <Col mdOffset={3}>
                        {contactos}
                    </Col>
                </FormGroup>
            </Form>
            <br />
            <Link to={{pathname:"/rotaciones", state:this.state}} style={{float: 'right'}}><Button bsStyle='primary' bsSize='large'>Siguiente</Button></Link>
        </Grid>);
    }
}

export default Signup;