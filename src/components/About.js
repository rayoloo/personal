import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
	return (
		<div className={styles.temp} id='about'>
			<div>
				<h1>About Me</h1>
				<br />
				<p>
					My name is Raymond, and this is my website that I created to provide
					you with some more information about myself.
				</p>
			</div>
			<br />
			<br />
			<div className={styles.fourCards}>
				<div className={styles['row1-container']}>
					<div
						className={`${styles.box} ${styles['box-down']} ${styles.cyan} `}>
						<h2>Technical Skills</h2>
						<p>
							Web Development, Object-Orientated Programming, Digital Systems,
							Computer Architecture,and Relational Database Manipulation
						</p>
						<p>
							Microsoft Office, Visual Studio Code, NetBeans, Eclipse,Ubuntu,
							Figma, SQLite, Git, Matlab,and Arduino
						</p>
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
