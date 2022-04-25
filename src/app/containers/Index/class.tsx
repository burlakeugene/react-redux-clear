import React, { Component } from 'react';

type TProps = {
  items: any[];
};

class ClassTest extends Component<TProps> {
  render() {
    return (
      <>
        class
        {this.props.items.map((item) => (
          <div>{item.name}</div>
        ))}
      </>
    );
  }
}

export default ClassTest;
