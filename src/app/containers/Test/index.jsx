import React, { Component } from 'react'
import {testFunc} from 'actions/App';
import Modal from 'burlak-react-modal';
import Form from 'burlak-react-form';
import {store} from 'store';
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
        <Modal opened={true} ref="modal">
          dsd
        </Modal>
        <Form
          onSubmit={() => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
              }, 1000);
            })
          }}
          styled
          fields={[{
            name: '1',
            type: 'text',
            validation: (e) => {
              if(!e) return 'alarm'
            }
          },{
            value: 'aaa',
            type: 'submit'
          }]}
        />
      </div>
    )
  }
}
