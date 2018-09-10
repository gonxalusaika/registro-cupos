import React from 'react';
import {Component} from 'react';
import {Grid, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    );
  }

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {email: ''};

    }
    onChangeEmail(e) {
        this.setState({email:e.target.value});
    }
    onChangeNombre(e) {
        this.setState({nombre:e.target.value});
    }
    render() {
        return (
        <Grid>
            <form>
            <FieldGroup 
                id="idEmail"
                type="text"
                label="Email"
                onChange={this.onChangeEmail.bind(this)}
                placeholder="Enter text" />
            <FieldGroup
                id="idNombre"
                type="text"
                label="Nombre"
                onChange={this.onChangeNombre.bind(this)} />
                <p>{this.state.email}</p>
                <p>{this.state.nombre}</p>
            </form>
            <Button><Link to="/mesas">Siguiente</Link></Button>
        </Grid>);
    }
}

export default Signup;