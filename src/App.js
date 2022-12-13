import React, { Component } from "react";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Christian Medeiros",
      contador: 0,
    };

    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  increase() {
    let state = this.state;
    if (state.contador === 1) {
      alert("the maximum number is 1!");
      return;
    }
    state.contador += 1;
    state.nome = "Christian";
    this.setState(state);
  }

  decrease() {
    let state = this.state;
    if (state.contador === 0) {
      alert("Oops reached zero!");
      return;
    }
    state.contador -= 1;
    state.nome = "Medeiros";

    this.setState(state);
  }
  render() {
    return (
      <div>
        <h2>Counter</h2>
        {this.state.nome}
        <h2>
          <button onClick={this.increase}> + </button>
          <h2>{this.state.contador}</h2>
          <button onClick={this.decrease}> - </button>
        </h2>
      </div>
    );
  }
}

export default App;
