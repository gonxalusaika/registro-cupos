import React, { Component } from 'react'
import {Grid,Row} from 'react-bootstrap'
import Header from './components/header.js'
import './App.css'
import Routes from './Routes';
import Relleno from './components/relleno';
class App extends Component {
  state = {
    cow: '',
    text: ''
  }
componentDidMount() {
     
  }
fetchCow = async () => {
    const response = await fetch(`/api/cow`)
    const initialCow = await response.json()
    const cow = initialCow.moo
    this.setState({ cow })
  }
customCow = async evt => {
    //evt.preventDefault()
    const text = this.state.text
    //const response = await fetch(`/api/cow/${text}`)
    //const custom = await response.json()
    //const cow = custom.moo
    //this.setState({ cow })
  }
handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
    console.log(this.state.text)
    this.customCow()
  }
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