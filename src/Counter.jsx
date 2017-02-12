import React, { Component } from 'react';


export default class Counter extends Component {

  constructor(props){
    super(props);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.state = {
      count: 0
    };
  }

  increase(){
    const count = this.state.count+1;
    this.setState({ count });
  }

  decrease(){
    const count = this.state.count-1;
    this.setState({ count });
  }

  render(){
    const count = this.state.count;

    return(
      <div style={{margin: '30px 0 30px 0'}}>
        <span>Count {count}</span>
        <br/>
        <br/>
        <br/>
        <button onClick={this.increase}>Increase</button>

        <button style={{marginLeft: '20px'}} onClick={this.decrease}>Decrease</button>
      </div>
    );
  }
}
