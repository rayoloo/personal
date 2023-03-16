import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import useLocalStorage from 'use-local-storage'

import ContactForm from './components/ContactForm'
import Navbar from './components/Navbar'
import FooterComponent from './components/FooterComponent'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Projects'
import './styles/App.css'

const App = () => {
	const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
	}
	return (
		<ChakraProvider>
			<div data-theme={theme}>
				<Navbar func={switchTheme} theme={theme} />
				<Hero />
				<About />
				<Project />
				<ContactForm />
				<FooterComponent />
			</div>
		</ChakraProvider>
	)
}

export default App
