import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import MesaItem from '../components/MesaItem';
import Modelo from '../Modelo';

const mesas = [
    {
        id:1,
        topico:"Evento super interesante",
        descripcion:"Esto es un evento que trata de cosas que le pueden interesar a la gente y como es una descripcion muy larga lo muestro como un popover que se dibuja cuando se pasa el mouse por arriba"
    },
    {
        id:2,
        topico:"Evento super interesante 2",
        descripcion:"Esto es un evento que trata de cosas que le pueden interesar a la gente y como es una descripcion muy larga lo muestro como un popover que se dibuja cuando se pasa el mouse por arriba"
    },
    {
        id:3,
        topico:"Evento super interesante 3",
        descripcion:"Esto es un evento que trata de cosas que le pueden interesar a la gente y como es una descripcion muy larga lo muestro como un popover que se dibuja cuando se pasa el mouse por arriba"
    },
    {
        id:4,
        topico:"Evento super interesante 4",
        descripcion:"Esto es un evento que trata de cosas que le pueden interesar a la gente y como es una descripcion muy larga lo muestro como un popover que se dibuja cuando se pasa el mouse por arriba"
    },
    {
        id:5,
        topico:"Evento super interesante 5",
        descripcion:"Esto es un evento que trata de cosas que le pueden interesar a la gente y como es una descripcion muy larga lo muestro como un popover que se dibuja cuando se pasa el mouse por arriba"
    },
    {
        id:6,
        topico:"Evento super interesante 6",
        descripcion:"Esto es un evento que trata de cosas que le pueden interesar a la gente y como es una descripcion muy larga lo muestro como un popover que se dibuja cuando se pasa el mouse por arriba"
    }
]

class Mesas extends Component {
  onComponentDidMount() {
    this.setState({mesas: Modelo.mesas});
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