import React from "react"
import styled from "styled-component" 

export default class Produto extends React.Component {

  render(){
    return (
      <div>
        <div>
          {this.props.qtProdutos}
          {this.props.filtro}
        </div>
      </div>
    )
  }

}