import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import MesaItem from '../components/MesaItem';
import Modelo from '../Modelo';

class Mesas extends Component {
  constructor(props) {
    super(props);
    this.state = {mesas: []};

    this.fetchMesas();
  }
  fetchMesas = async () => {
    const response = await fetch('/api/mesas');
    const mesas = await response.json();
    console.log(mesas);
    this.setState({mesas: mesas});
  }
  seleccionarMesa(mesa) {
    //if (Modelo.mesasSeleccionadas.)
  }  
  render() {
      var mesasItems = this.state.mesas.map((mesa) => 
          <Col xs={12} md={6}>
              <MesaItem {...mesa} />
          </Col>);

      return (
      <Row>
          {mesasItems}
      </Row>);
  }
}

export default Mesas;