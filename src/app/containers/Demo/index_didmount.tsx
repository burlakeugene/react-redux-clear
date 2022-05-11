import React, { Component } from 'react';

class index extends Component {
  target: any;
  constructor(props: any){
    super(props);
    this.target = React.createRef();
  }
  componentDidMount(){
    const target = this.target.current;
    const cloneTarget = target.cloneNode();
    cloneTarget.style.background = 'green';
    target.parentNode.appendChild(cloneTarget);
  }
  render() {
    return (
      <div>
        <div ref={this.target} className="target" style={{
          width: '100px',
          height: '100px',
          background: 'red'
        }}></div>
      </div>
    );
  }
}

export default index;