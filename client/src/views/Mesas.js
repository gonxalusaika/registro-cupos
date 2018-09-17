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
  componentDidMount() {
    if (utils.checkHayEstado(this)) {
      this.fetchMesas();
    }
  }
  fetchMesas = async () => {
    const response = await fetch('/api/mesas');
    const mesas = await response.json();
    console.log(mesas);
    this.setState({mesas: mesas});
  }
  seleccionarMesa(mesa) {
    this.setState((state, props) => ({mesasSeleccionadas: [...state.mesasSeleccionadas, mesa]}));
  }
  deseleccionarMesa(mesa) {
    this.setState((state, props) => ({mesasSeleccionadas: this.state.mesasSeleccionadas.filter((item) => item !== mesa)}));
  }
  render() {
      var mesasItems = this.state.mesas.map((mesa) => 
          <Col xs={12} md={6} key={mesa.id}>
              <MesaItem {...mesa}
                seleccionado={this.state.mesasSeleccionadas.indexOf(mesa.id) > -1}
                seleccionar={this.seleccionarMesa.bind(this)}
                deseleccionar={this.deseleccionarMesa.bind(this)} />
          </Col>);

      return (
      <Grid>
          <h4>Seleccione 5 mesas de su preferencia</h4>
          <Row>
            {mesasItems}
          </Row>
          <Row>
            <Link to={{pathname:"/confirmacion", state:this.state}} style={{float: 'right'}}>
              <Button bsStyle='primary' bsSize='large'>Siguiente</Button>
            </Link>
          </Row>
      </Grid>);
  }
}

export default Mesas;