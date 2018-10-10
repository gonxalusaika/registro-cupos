import React from 'react';
import {Button, Popover, OverlayTrigger, Modal, Grid} from 'react-bootstrap';

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
        background: mesa.seleccionado ? '#bbf' : undefined
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
        this.state = {};
    }
    onSeleccionar() {
        if (this.props.cupos > 0) {
            this.props.seleccionar(this.props);
        }
    }
    onShow() {
      this.setState({ show: true});
    }
    onHide() {
      this.setState({show: false});
    }
    render() {
        const popoverDescripcion = <Popover id={"modal-descripcion-" + this.props.id}>{this.props.descripcion}</Popover>
        const popoverCupos = (
            <Popover id={"modal-cupos-" + this.props.id}>
                {this.props.todosCupos.map((cupo, index) => <p>Rotación {index+1}: {cupo}</p>)}
            </Popover>
        )
        const estilo = this.props.seleccionado ? 'info' : 'primary';

        return <div style={generalStyle} >
            <h4>{this.props.topico}</h4>
            <OverlayTrigger overlay={popoverCupos} placement="bottom">
                <div style={cuposStyle}>Cupos: {this.props.cupos}</div>
            </OverlayTrigger>
            <Button style={botonSeleccionableStyle(this.props)} onClick={this.onSeleccionar.bind(this)} bsStyle={estilo} disabled={this.props.cupos <= 0} >Seleccionar</Button>
            {/* <OverlayTrigger overlay={popoverDescripcion} placement="bottom"> */}
                <Button onClick={this.onShow.bind(this)} style={botonStyle} bsSize='sm'>Detalles</Button>
            {/* </OverlayTrigger> */}
            
            <Modal bsSize="large" show={this.state.show} onHide={this.onHide.bind(this)} bsSize="medium" dialogClassName="modal-mesas">
              <Modal.Header closeButton>
                  
              </Modal.Header>
              <Modal.Body className='row'>
                  <Grid>
                  {this.props.descripcion}
                  <br />
                  <small>{this.props.moderador} - {this.props.rol}</small>
                  </Grid>
              </Modal.Body>
            </Modal>
        </div>;
    }
};

export default MesaItem;