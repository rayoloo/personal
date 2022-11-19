import React from 'react'
import styles from '../styles/About.module.css'

import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from '@chakra-ui/react'

const About = () => {
	return (
		<div className={styles.temp} id='about'>
			<div>
				<h1>About Me</h1>
				<br />
				<div className={styles.aboutContainer}>
					<div className={styles.aboutBox}>
						<p>My name is Raymond.</p>
						<p>
							I am a computer engineering graduate seeking for development
							opportunities.
						</p>
						<p>
							This is my website that I created to provide more information
							about myself.
						</p>
					</div>
					<br />
					<br />
					<div className={styles.fourCards}>
						<Accordion defaultIndex={[0]} allowMultiple>
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex='1' textAlign='left'>
											Technical Skills
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<ul>
										<li>Web Development</li>
										<li>Object-Orientated Programming</li>
										<li>Digital Systems</li>
										<li>Computer Architecture</li>
										<li>Relational Database</li>
									</ul>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex='1' textAlign='left'>
											Software Technologies
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<ul>
										<li>Microsoft Office</li>
										<li>Visual Studio Code</li>
										<li>NetBeans</li>
										<li>Eclipse</li>
										<li>Ubuntu</li>
										<li>SQLite</li>
										<li>Figma</li>
										<li>Git</li>
										<li>Matlab</li>
										<li>Arduino</li>
									</ul>

									<img
										src='https://assets.codepen.io/2301174/icon-supervisor.svg'
										alt=''
									/>
									<br />
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex='1' textAlign='left'>
											Web Development
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<p>
										HTML, CSS, JS, SASS, TypeScript, React, React Native, Figma,
										Flask, Express, Django, and NextJS
									</p>
									<img
										src='https://assets.codepen.io/2301174/icon-team-builder.svg'
										alt=''
									/>
									<br />
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex='1' textAlign='left'>
											Education
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<p>Computer Engineering Graduate</p>
									<br></br>
									<p>
										<u>Relevant Courses:</u>
									</p>
									<p>
										Digital Systems, Object-Orientated Programming, Computer
										Architecture, Operating Systems, Embedded Systems, Computer
										Networks, and Computer Vision
									</p>
									<br />
									<img
										src='https://assets.codepen.io/2301174/icon-calculator.svg'
										alt=''
									/>
									<br />
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex='1' textAlign='left'>
											Coding Languages
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<p>
										Java, C, Python, VHDL, MIPS Assembly Language, JS,
										Typescript,and SQLite
									</p>
									<br />
									<p>Learning C++</p>
									<img
										src='https://assets.codepen.io/2301174/icon-karma.svg'
										alt=''
									/>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</div>
			<br />
			<br />
		</div>
	)
}

export default About
