import React from 'react';
import Person from './components/Person.js';
import './App.css'
import { Button } from 'react-bootstrap';

class App extends React.Component {
 
  constructor(){
    super();
    this.state = {
      show : true,
      count:0,
     
      btnText : "show profile",
     
      color : "primary",      
    };
  }
  

  componentDidMount(){
    setInterval(() => this.setState({count: this.state.count+1}),1000);
  }
 
  btnClick(){
    this.setState({show: !this.state.show})
    if(this.state.btnText === "show profile"){
      this.setState({
        btnText : "hide profile",
        color: "danger"})
    }
    if(this.state.btnText === "hide profile"){
      this.setState({
        btnText : "show profile",
        color:"success"})
    }
  }
  
  render() {
    return (
      <div className='App'>       
        {!this.state.show && <Person />}
        <h2> {this.state.count}</h2>
        <Button className='button-53'
              onClick={() => this.btnClick()}
              variant={this.state.color}>
          {this.state.btnText}
        </Button>
      </div>
    )
  }
}

export default App;