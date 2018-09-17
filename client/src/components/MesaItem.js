import React from 'react';
import {Button, Popover, OverlayTrigger} from 'react-bootstrap';

const generalStyle = {
    background: '#eee',
    padding: '20px',
    marginBottom: '15px',
    boxShadow: '0 0 2px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22)'
};

const botonSeleccionableStyle = (mesa) => {
    return {
        marginRight: '10px',
        background: mesa.seleccionado ? '#bbf' : 'white'
    }
};

const botonStyle = {
    marginRight: '10px'  
};

class MesaItem extends React.Component {
    constructor(props) {
        super(props);
        console.log('en constructor: ' + this.props.seleccionado)
    }
    onSeleccionar() {
        if (this.props.seleccionado) {
            this.props.deseleccionar(this.props.id);
        }
        else {
            this.props.seleccionar(this.props.id);
        }
    }
    render() {
        const popover = (
            <Popover id="modal-{this.props.id}">{this.props.descripcion}</Popover>
        );
        return <div style={generalStyle}>
            <h4>{this.props.topico}</h4>
            <Button style={botonSeleccionableStyle(this.props)} onClick={this.onSeleccionar.bind(this)} >Seleccionar</Button>
            <OverlayTrigger overlay={popover} placement="bottom">
                <Button style={botonStyle}>Detalles</Button>
            </OverlayTrigger>
        </div>;
    }
};

export default MesaItem;