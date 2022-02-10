import React from 'react'
import ContactForm from './components/ContactForm'
import Navbar from './components/Navbar'
import FooterComponent from './components/FooterComponent'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Projects'
import './styles/App.css'

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Project />
			<ContactForm />
			<FooterComponent />
		</>
	)
}

export default App
