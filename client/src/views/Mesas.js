import React, {Component} from 'react';
import {Row, Col, Button, Grid} from 'react-bootstrap';
import MesaItem from '../components/MesaItem';

class Mesas extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      var mesasItems = this.props.mesas.map((mesa) => 
          <Col xs={12} md={6} sm={12} key={mesa.id}>
              <MesaItem {...mesa}
                id={mesa.id}
                topico={mesa.topico}
                descripcion={mesa.descripcion}
                moderador={mesa.moderador}
                rol={mesa.rol}
                organizacion={mesa.organizacion}
                cupos={mesa.cupos[this.props.rotacion]}
                todosCupos={mesa.cupos}
                seleccionado={this.props.mesasSeleccionadas.indexOf(mesa.id) > -1}
                seleccionar={this.props.seleccionarMesa} />
          </Col>);

      return (
        <Grid>
            <Row>
              {mesasItems}
            </Row>
        </Grid>);
  }
}

export default Mesas;