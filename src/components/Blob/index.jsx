import React, { Component } from 'react'
import './styles/styles.scss';
export class Blob extends Component {
	constructor(props){
		super(props);
		this.state = {
			timer: this.props.timer || 2000
		}
		this.dictionary = {
			'1': 'a',
			'11': 'b',
			'22': 'c',
			'2': 'd',
			'3': 'e',
			'4': 'f',
			'44': 'g',
			'33': 'h'
		}
	}
	random(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	sortObject(obj) {
		return Object.keys(obj).sort().reduce(function (result, key) {
			result[key] = obj[key];
			return result;
		}, {});
	}
	generateBlob(){
		var result = '',
			obj = {};
		for(var i = 1; i <= 4; i++){
		  var rand = this.random(25, 75);
		  obj[this.dictionary[i]] = rand;
		  obj[this.dictionary[''+i+i]] = 100 - rand;
		}
		obj = this.sortObject(obj);
		for(var item in obj){
		  result += obj[item]+'% ';
		}
		result = result.slice(0, result.length - 1);
		var resultPartOne = result.slice(0, result.length / 2),
			resultPartTwo = result.slice(result.length / 2, result.length);
		result = resultPartOne+ ' / '+resultPartTwo;
		return result;
	}
	morphRun(){
		this.refs.blob.style.borderRadius = this.generateBlob();
	}
	componentDidMount(){
		this.interval = setInterval(() => {
			this.morphRun();
		}, this.state.timer);
	}
	componentWillUnmount(){
		clearInterval(this.interval);
	}
	render() {
		let className = 'blob';
		className += this.props.className ? ' '+this.props.className : '';
		let styles = this.props.styles || {};
		styles.WebkitTransitionDuration = styles.transitionDuration = this.state.timer / 1000 + 's';
		return (
			<div ref="blob" className={className} style={styles}>
				{this.props.children}
			</div>
		)
	}
}

export default Blob
