import React, { Component } from 'react'

export default class Contoh extends Component {
  constructor(props){
    super(props);
    this.state={
        nama:this.props.send
    }
  }
  
  componentWillReceiveProps(nextProps){
      if(this.state.nama!=nextProps){
          this.setState({nama:nextProps});
      }
  }
  
    render() {
    return (
      <h1>
        {this.state.nama}
      </h1>
    )
  }
}
