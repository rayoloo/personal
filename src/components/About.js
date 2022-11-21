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
					<div className={styles.Accordion}>
						<Accordion allowMultiple>
							<AccordionItem className={styles.AccordionLine}>
								<h2>
									<AccordionButton>
										<Box flex='1' textAlign='left' className={styles.aHeader}>
											Technical Skills
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4} className={styles.font}>
									<ul>
										<li>Web Development</li>
										<li>Object-Orientated Programming</li>
										<li>Digital Systems</li>
										<li>Computer Architecture</li>
										<li>Relational Database</li>
									</ul>
									<img
										height='70px'
										width='70px'
										src='https://freesvg.org/img/preferences-system.png'
										alt=''
									/>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex='1' textAlign='left' className={styles.aHeader}>
											Software Technologies
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4} className={styles.font}>
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
										<Box flex='1' textAlign='left' className={styles.aHeader}>
											Web Development
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4} className={styles.font}>
									<ul>
										<li>HTML</li>
										<li>CSS and Sass</li>
										<li>Javascript and TypeScript</li>
										<li>React</li>
										<li>React Native</li>
										<li>NextJS</li>
										<li>NodeJS</li>
										<li>Flask</li>
										<li>Express</li>
										<li>Django</li>
										<li>Figma</li>
									</ul>
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
										<Box flex='1' textAlign='left' className={styles.aHeader}>
											Education
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4} className={styles.font}>
									<p>Computer Engineering Graduate</p>
									<br></br>
									<p>
										<u>Relevant Courses:</u>
									</p>
									<ul>
										<li>Digital Systems</li>
										<li>Object-Orientated Programming</li>
										<li>Computer Architecture</li>
										<li>Operating Systems</li>
										<li>Embedded Systems</li>
										<li>Computer Networks</li>
										<li>Computer Vision</li>
									</ul>
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
										<Box flex='1' textAlign='left' className={styles.aHeader}>
											Coding Languages
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4} className={styles.font}>
									<ul>
										<li>Java</li>
										<li>C</li>
										<li>Python</li>
										<li>Javascript</li>
										<li>TypeScript</li>
										<li>VHDL</li>
										<li>Assembly(MIPS)</li>
										<li>SQLite</li>
										<li></li>
									</ul>
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
