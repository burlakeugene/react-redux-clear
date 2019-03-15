import React, {Component} from 'react';
import {loadSwitch} from '../../actions/app';
import {store} from '../../store/';
import './styles/styles.scss';

class Preloader extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: this.props.loading,
            first: true,
            full: false
        }
    }
    componentWillReceiveProps(props){
        let visibleState = this.state.loading,
            visibleProps = props.loading;
        if(visibleProps !== visibleState){
            if(visibleProps){
                this.setState({
                    loading: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            full: false,
                        })
                    }, 300)
                });
            }
            else{
                this.setState({
                    full: true
                },() => {
                    setTimeout(() => {
                        this.setState({
                            loading: false
                        })
                    }, 300);
                });
            }
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                first: false
            })
        }, 500);
    }
    render(){
        let {loading, full, first} = this.state,
            className = 'preloader';
        if(first) className += ' preloader__first';
        if(loading) className += ' preloader__loading';
        if(full) className += ' preloader__full';
        if(first) {
            setTimeout(() => {
                store.dispatch(loadSwitch(false))
            }, 3000);
        }
        return(
            <div className={className}>
                <div className="preloader-inner"></div>
            </div>
        )
    }
}

export default Preloader;