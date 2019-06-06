import React, { Component } from 'react'
import {testFunc} from 'actions/App';
import Modal from 'components/Modal/index.jsx';
import {store} from '../../redux/store/';
export default class componentName extends Component {
  constructor(){
    super();
  }
	componentDidMount(){
    store.dispatch(testFunc());
	}
  render() {
    return (
      <div>
        <span onClick={() => {
          this.refs.modal.open();
        }}>modal</span>
        <Modal ref="modal">
          Modal content
        </Modal>
        2
      </div>
    )
  }
}
