import React from 'react'
import ContactForm from './components/ContactForm'
import Navbar from './components/Navbar'
import FooterComponent from './components/FooterComponent'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Projects'
import styles from './styles/App.module.css'

const App = () => {
	return (
		<div className={styles.center}>
			<Navbar />
			<Hero />
			<About />
			<Project />
			<ContactForm />
			<FooterComponent />
		</div>
	)
}

export default App
