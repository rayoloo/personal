import React from 'react'
import ContactForm from './components/ContactForm'
import Navbar from './components/Navbar'
import FooterComponent from './components/FooterComponent'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Projects'
import './styles/App.css'

import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
	return (
		<ChakraProvider>
			<Navbar />
			<Hero />
			<About />
			<Project />
			<ContactForm />
			<FooterComponent />
		</ChakraProvider>
	)
}

export default App
