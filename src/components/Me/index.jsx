import React, { Component } from 'react'
import Face from '../Face';
import './styles/styles.scss';
export default class Me extends Component {
	render() {
		return (
			<div className="me">
				<div className="me-top">
					<div className="me-name">
						<h2>Eugene</h2>
						<h1>Burlak</h1>
					</div>
					<Face className="me-photo" />
				</div>
				<div className="me-description">
					<p>
						Hello, i am middle frontend developer, <br />with 5+ years of experience.
					</p>
					<p>
						I develop high-quality, adaptive and cross-browser (reasonably) web applications.
					</p>
				</div>
			</div>
		)
	}
}