import React from 'react';
import {Button, Popover, OverlayTrigger} from 'react-bootstrap';

const generalStyle = {
    background: '#eee',
    padding: '20px',
    marginBottom: '15px',
    boxShadow: '0 0 2px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22)',
    wordWrap: 'break-word'
};

const botonSeleccionableStyle = (mesa) => {
    return {
        marginRight: '10px',
        background: mesa.seleccionado ? '#bbf' : 'white'
    }
};

const cuposStyle = {
  float: 'right',
  bottom: 0,
  position: 'relative'
}

const botonStyle = {
    marginRight: '10px'
};

class MesaItem extends React.Component {
    constructor(props) {
        super(props);
    }
    onSeleccionar() {
        if (this.props.cupos > 0) {
            this.props.seleccionar(this.props);
        }
    }
    render() {
        const popoverDescripcion = <Popover id={"modal-descripcion-" + this.props.id}>{this.props.descripcion}</Popover>
        const popoverCupos = (
            <Popover id={"modal-cupos-" + this.props.id}>
                {this.props.todosCupos.map((cupo, index) => <p>Rotación {index+1}: {cupo}</p>)}
            </Popover>
        )
        const estilo = this.props.seleccionado ? 'info' : 'default';

        return <div style={generalStyle}>
            <h4>{this.props.topico}</h4>
            <OverlayTrigger overlay={popoverCupos} placement="bottom">
                <div style={cuposStyle}>Cupos: {this.props.cupos}</div>
            </OverlayTrigger>
            <Button style={botonSeleccionableStyle(this.props)} onClick={this.onSeleccionar.bind(this)} bsStyle={estilo} disabled={this.props.cupos <= 0} >Seleccionar</Button>
            <OverlayTrigger overlay={popoverDescripcion} placement="bottom">
                <Button style={botonStyle}>Detalles</Button>
            </OverlayTrigger>
        </div>;
    }
};

export default MesaItem;