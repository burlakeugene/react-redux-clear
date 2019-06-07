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
        <Modal opened ref="modal">
          Modal content<br />
          Modal content<br />
          Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />
          Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />Modal content<br />
        </Modal>
        2
      </div>
    )
  }
}
