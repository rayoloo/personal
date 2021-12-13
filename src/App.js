import React from 'react'
import 'antd/dist/antd.css'
import './App.css'
import { Layout } from 'antd'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import SideBarComponent from './components/SideBarComponent'
import FooterComponent from './components/FooterComponent'
import HomeComponent from './components/HomeComponent'
import ResumeComponent from './components/ResumeComponent'
import ContactForm from './components/ContactForm'
import {
	project1,
	project2,
	project3,
	project4,
	project5,
	project6,
	project7,
} from './components/ProjectComponent'
import ExperienceComponent from './components/ExperienceComponent'

class App extends React.Component {
	render() {
		return (
			<Router>
				<HeaderComponent>
					<Link to='/'></Link>
				</HeaderComponent>
				<Layout style={{ minHeight: '92vh' }}>
					<SideBarComponent />
					<Layout>
						<Switch>
							<Route path='/' exact component={HomeComponent} />
							<Route path='/contact' exact component={ContactForm} />
							<Route path='/project/1' exact component={project1} />
							<Route path='/project/2' exact component={project2} />
							<Route path='/project/3' exact component={project3} />
							<Route path='/project/4' exact component={project4} />
							<Route path='/project/5' exact component={project5} />
							<Route path='/project/6' exact component={project6} />
							<Route path='/project/7' exact component={project7} />
							<Route path='/experience' exact component={ExperienceComponent} />
							<Route path='/resume' exact component={ResumeComponent} />
						</Switch>
						<FooterComponent />
					</Layout>
				</Layout>
			</Router>
		)
	}
}

export default App
