import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';


export default class App extends Component {
  constructor(){
    super();
    this.state= {
      contador: 0,
    };
    this.aumentarContador = this.aumentarContador.bind(this)
  }

  aumentarContador(){
    if (this.state.contador <10){
      this.setState({contador: this.state.contador + 1});
    } 
  }

  decrementoContador(){
    if (this.state.contador >0) {
      this.setState({contador: this.state.contador - 1});
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Contador
        </h3>
        <p>{this.state.contador}</p>
        <button onClick= {this.aumentarContador}>Incrementar</button>
        <br/>
        <button onClick={() => this.decrementoContador()}>Decremento</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}
