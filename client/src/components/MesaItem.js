import React from 'react';
import {Button, Popover, OverlayTrigger} from 'react-bootstrap';

const generalStyle = {
    background: '#ddd',
    padding: '20px',
    marginBottom: '15px',
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
        this.state = {seleccionado: props.seleccionado}
    }
    onSeleccionar() {
        this.setState({seleccionado: !this.state.seleccionado});
    }
    render() {
        const popover = (
            <Popover id="modal-{this.props.id}">{this.props.descripcion}</Popover>
        );
        return <div style={generalStyle}>
            <h4>{this.props.topico}</h4>
            <Button style={botonSeleccionableStyle(this.state)} onClick={this.onSeleccionar.bind(this)} >Seleccionar</Button>
            <OverlayTrigger overlay={popover}>
                <Button style={botonStyle}>Detalles</Button>
            </OverlayTrigger>
        </div>;
    }
};

export default MesaItem;