import React, { Component } from 'react'
import {Grid,Row} from 'react-bootstrap'
import Header from './components/header.js'
import './App.css'
import Routes from './Routes';
import Relleno from './components/relleno';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Relleno />
        <Header />
        <Grid>
          <Row>
           <Routes />
          </Row>
        </Grid>
      </div>
    )
  }
}
export default App