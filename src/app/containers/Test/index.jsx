import React, { Component } from 'react'
import {testFunc} from 'actions/App';
import {store} from '../../redux/store/';
export default class componentName extends Component {
	componentDidMount(){
    store.dispatch(testFunc());
	}
  render() {
    return (
      <div>
        2
      </div>
    )
  }
}
