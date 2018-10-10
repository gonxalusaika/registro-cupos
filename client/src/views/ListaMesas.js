import React, {Component} from 'react';
import {Row, Col, Button, Grid} from 'react-bootstrap';
import MesaItem from '../components/MesaItem';

class ListaMesas extends Component {
    constructor(props) {
      super(props);
      this.state = {mesas: []}
    }
    fetchMesas = async () => {
        const response = await fetch('/api/mesas');
        const mesas = await response.json();
        console.log(mesas);
        this.setState({mesas: mesas});
    }
    componentDidMount() {
        this.fetchMesas();
    }
    render() {
        var mesasItems = this.state.mesas.map((mesa) => 
            <Col xs={12} md={6} sm={12} key={mesa.id} className='elemento-mesa'>
                <div >
                <MesaItem
                  id={mesa.id}
                  topico={mesa.topico}
                  descripcion={mesa.descripcion}
                  moderador={mesa.moderador}
                  rol={mesa.rol}
                  organizacion={mesa.organizacion}
                  todosCupos={mesa.cupos}/>
                  </div>
            </Col>);
  
        return (
          <Grid>
              <Row bsClass='row-eq-height'>
                {mesasItems}
              </Row>
          </Grid>);
    }
  }
  
  export default ListaMesas;