import React from 'react';
import {Button, Popover} from 'react-bootstrap';

class MesaItem extends React.Component {
    detalles() {

    }
    render() {
        const popover = (
            <Popover id="modal-{this.props.id}">{this.props.descripcion}</Popover>
        );
        return <div>
            <h4>{this.props.topico}</h4>
            <Button onClick={this.detalles.bind(this)}>Detalles</Button>
            <Button>Seleccionar</Button>
        </div>;
    }
};

export default MesaItem;