import React from 'react'
import styled from 'styled-components'

export const Calculadora = styled.div`

background-color: #5721D9;
width: 40%;
height: 370px;
margin: 0 auto;
display: flex;
flex-direction:column;
align-items: center;
justify-content: space-between;
border-radius: 8px;

button{
  background-color: #DBFA4F;
}
         
input{
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size:1.5rem;
  text-align:center;
  width:10rem;
  height: 2rem;
  color:#5721D9;
  background-color: #DBFA4F;
  padding: 0.3rem;
  border-radius:5px;
  outline: none;
  border: none;

}
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
h2{
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size:2rem;
  width: 50%;
  height:50px;
  background-color: #DBFA4F;
  display:flex;
  justify-content:center;
  align-items: center;
  color: #5721D9;

}
`
export const Titulo = styled.h1`

color:#DBFA4F;

`

export default class App extends React.Component{

  state = {
    n1:``,
    n2:``,
    resultado:``
  }

  divisao = () => {

   this.setState({
    resultado: this.state.n1 / this.state.n2

   })

  }

  adicao = () => {

    this.setState({
     resultado: this.state.n1 + this.state.n2
 
    })
 
   }

   multiplicacao = () => {

    this.setState({
     resultado: this.state.n1 * this.state.n2
 
    })
 
   }

   menos = () => {

    this.setState({
     resultado: this.state.n1 - this.state.n2
 
    })
}
apagar = () => {

  this.setState({
    n1:``,
    n2:``,
    resultado:``
  }
  )
}

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    })
  }

  handleChange2 = (event) => {
    this.setState({
   n2: Number(event.target.value)
  })  

  }

  render(){
    return(
      <Calculadora>
      <Titulo>Calculadora</Titulo>
      <input type="number" onChange={this.handleChange1} value={this.state.n1}/>
      <input type="number" onChange={this.handleChange2} value={this.state.n2}/>
      <div>
        <button  onClick={this.adicao}>+</button>
        <button onClick={this.menos}>-</button>
        <button onClick={this.multiplicacao}>x</button>
        <button onClick={this.divisao}>/</button>
        <button onClick={this.apagar}>c</button>
      </div>
      <h2>{this.state.resultado}</h2>
      </Calculadora>
    )
  }
}

