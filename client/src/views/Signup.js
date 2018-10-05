import React from 'react';
import {Component} from 'react';
import {Grid, FormGroup, ControlLabel, FormControl, Button, Form, Col, Checkbox} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import emailValidator from 'email-validator';

function FieldGroup({ id, label, help, validationState, ...props }) {
    return (
      <FormGroup controlId={id} style={{paddingTop: '10px'}} validationState={validationState()}>
        <Col componentClass={ControlLabel} md={3}>
            {label}
        </Col>
        <Col md={9}>
            <FormControl {...props} />
            <FormControl.Feedback />
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
    validarNombre() {
        if (!this.state.nombre) return null; 
        return this.state.nombre.length  > 0 ? 'success' : 'error';
    }
    validarEmail() {
        if (!this.state.email) return null;
        return emailValidator.validate(this.state.email) ? 'success' : 'error';
    }
    validarOrganizacion() {
        if (!this.state.organizacion) return null;
        return this.state.organizacion.length > 0 ? 'success' : 'error';
    }
    proximoState() {
        return {
            datosPersonales: {
                email: this.state.email,
                nombre: this.state.nombre,
                organizacion: this.state.organizacion,
                usuario: this.state.usuario,
                contacto: this.state.contacto
            }
        }
    }
    continuar() {
        fetch('/api/validacion/email/' + this.state.email)
            .then((res) => {
                res.json()
                    .then((resJson) => {
                        if (resJson.valido) {
                            if (this.validarNombre() === 'success' && this.validarEmail() === 'success' && this.validarOrganizacion() === 'success') {
                                this.props.history.push({pathname:"/rotaciones", state: this.proximoState()});
                            }
                            else {
                                alert('Debe completar todos los campos para continuar.');
                            }
                        }
                        else {
                            alert('No se puede continuar. Este email ya ha sido registrado.')
                        }
                    });
            })
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
                    validationState={this.validarNombre.bind(this)}
                    placeholder="Juan Pérez" />
                <FieldGroup 
                    id="idEmail"
                    type="email"
                    label="Email"
                    onChange={this.onChangeEmail.bind(this)}
                    validationState={this.validarEmail.bind(this)}
                    placeholder="email@ejemplo.com" />
                <FieldGroup 
                    id="idOrganizacion"
                    type="text"
                    label="Organización"
                    onChange={this.onChangeOrganizacion.bind(this)}
                    validationState={this.validarOrganizacion.bind(this)}
                    placeholder="Nombre de su organización" />
                {/* <FieldGroup 
                    id="idUsuario"
                    type="text"
                    label="Numero de usuario"
                    onChange={this.onChangeUsuario.bind(this)}
                    validationState={this.validarNombre.bind(this)}
                    placeholder="Se indica en el email" />
                <FormGroup>
                    <Col componentClass={ControlLabel}>¿Qué canal de contacto desea compartir con los demás participantes durante una dinámica?</Col>
                    <br />
                    <Col mdOffset={3}>
                        {contactos}
                    </Col>
                </FormGroup> */}
            </Form>
            <br />
            <Button bsStyle='primary' bsSize='large' style={{float: 'right'}} onClick={this.continuar.bind(this)}>Siguiente</Button>
        </Grid>);
    }
}

export default Signup;