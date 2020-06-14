import React, {Component} from 'react'
import CardList from '../components/CardList'
import {robots} from '../robots'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from './Scroll'
import ErrorBoundary from '../components/ErrorBoundary'


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
		this.handleSearchChange = this.handleSearchChange.bind(this)
	}

	async handleSearchChange (event) {
		await this.setState({searchField: event.target.value})
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots:robots}))
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		if (this.state.robots.length === 0) {
			return <h1 className="tc">Loading...</h1>
		} else {
			return (
				<div className="tc">
					<div>
						<h1 className="f1">RobotFriends</h1>
						<SearchBox onSearchChange={this.handleSearchChange}/>
					</div>
					<Scroll>
						<ErrorBoundary>
							<CardList robotList={filteredRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
				)
			}
	}
}

export default App