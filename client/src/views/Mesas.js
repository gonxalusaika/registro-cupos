import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Button, Grid} from 'react-bootstrap';
import MesaItem from '../components/MesaItem';
import utils from '../utils';

class Mesas extends Component {
  constructor(props) {
    super(props);
    this.state = {mesas: [], mesasSeleccionadas: []};

  }
  render() {
      var mesasItems = this.props.mesas.map((mesa) => 
          <Col xs={12} md={6} key={mesa.id}>
              <MesaItem {...mesa}
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