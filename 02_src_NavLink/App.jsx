import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
// route component
import Home from './pages/Home' 
// route component
import About from './pages/About' 
// general component
import Header from './components/Header' 

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* Route Link */}
							<NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
							<NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* register Route */}
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
