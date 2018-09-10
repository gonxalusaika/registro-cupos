import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
        <div>
            Esta es la pagina inicial
            <br />
            <Button><Link to="/signup">Registrarse</Link></Button>
        </div>);
    }
}

export default Home;