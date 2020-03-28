import React, { Component } from 'react';
import Data from './Data'
import App2 from './App2'
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      confirmeddeaths: null,
      confirmed: null,
      recovered: null ,
      loading: true
    }

  }

  async componentDidMount () {

    try{

      const response = await fetch('https://enrichman.github.io/covid19/world/full.json')
      const data = await response.json()

      this.setState({
        deaths: data.deaths,
        confirmed: data.confirmed,
        recovered: data.recovered,
        loading: false
      })

    } catch (e){
      console.log(e)
    }
  }

  render(){
    
    return(
      this.state.loading ?
     
      <div>Cargando los datos de hoy ...</div> 

      :
      
      <>
        <Data deaths={this.state.deaths} confirmed={this.state.confirmed} recovered={this.state.recovered}></Data>
        <App2></App2>
      </>
    )
    
  }
}

export default App;
