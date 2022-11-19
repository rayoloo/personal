import React from 'react'
import styles from '../styles/About.module.css'
import Accordion from './Accordion'

const About = () => {
	return (
		<div className={styles.temp} id='about'>
			<div>
				<h1>About Me</h1>
				<br />
				<div className={styles.aboutBox}>
					<p>My name is Raymond.</p>
					<p>
						I am a computer engineering graduate seeking for development
						opportunities.
					</p>
					<p>
						This is my website that I created to provide more information about
						myself.
					</p>
				</div>
			</div>
			<br />
			<Accordion />
			<br />

			<div className={styles.fourCards}>
				{/* drop down menu */}
				<div className={styles['row1-container']}>
					<div
						className={`${styles.box} ${styles['box-down']} ${styles.cyan} `}>
						<h2>Technical Skills</h2>
						<h3>Skills:</h3>
						<ul>
							<li>Web Development</li>
							<li>Object-Orientated Programming</li>
							<li>Digital Systems</li>
							<li>Computer Architecture</li>
							<li>Relational Database</li>
						</ul>
						<h3>Software:</h3>
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
					</div>

					<div className={`${styles.box} ${styles.red} `}>
						<h2>Web Development</h2>
						<p>
							HTML, CSS, JS, SASS, TypeScript, React, React Native, Figma,
							Flask, Express, Django, and NextJS
						</p>
						<img
							src='https://assets.codepen.io/2301174/icon-team-builder.svg'
							alt=''
						/>
					</div>

					<div className={`${styles.box} ${styles['box-down']} ${styles.blue}`}>
						<h2>Education</h2>
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
					</div>
				</div>
				<div className={styles['row2-container']}>
					<div className={`${styles.box} ${styles.orange}`}>
						<h2>Coding Languages</h2>
						<p>
							Java, C, Python, VHDL, MIPS Assembly Language, JS, Typescript,and
							SQLite
						</p>
						<br />
						<p>Learning C++</p>
						<img
							src='https://assets.codepen.io/2301174/icon-karma.svg'
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
