import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
	return (
		<div className={styles.temp} id='about'>
			<div>
				<h1>About Me</h1>
				<br />
				<p>Computer Engineering Bachelors</p>
				<br />

				<p>
					Digital Systems, Object-Orientated Programming, Computer Architecture,
					Operating Systems, Embedded Systems, Computer Networks, Computer
					Vision, Database Manipulation, and Web Development.
				</p>

				<br />
				<p>Technical Skills/Experience for the following:</p>
				<list>
					<li>
						Java, C, Python, VHDL, MIPS Assembly Language, Matlab, Arduino, SQL,
						Git
					</li>
					<li>
						HTML, CSS, SASS, JavaScript,React, React Native, Flask, Express,
						Django, NextJS
					</li>
					<li>
						Microsoft Office, Visual Studio Code, NetBeans, Eclipse, Ubuntu,
						Figma
					</li>
				</list>
			</div>
			<br />
			<br />
			<div className={styles.fourCards}>
				<div className={styles['header']}>
					<h1>Reliable, efficient delivery</h1>
					<h1>Powered by Technology</h1>

					<p>
						Our Artificial Intelligence powered tools use millions of project
						data points to ensure that your project is successful
					</p>
				</div>
				<div className={styles['row1-container']}>
					<div
						className={`${styles.box} ${styles['box-down']} ${styles.cyan} `}>
						<h2>Supervisor</h2>
						<p>Monitors activity to identify project roadblocks</p>
						<img
							src='https://assets.codepen.io/2301174/icon-supervisor.svg'
							alt=''
						/>
					</div>

					<div className={`${styles.box} ${styles.red} `}>
						<h2>Team Builder</h2>
						<p>
							Scans our talent network to create the optimal team for your
							project
						</p>
						<img
							src='https://assets.codepen.io/2301174/icon-team-builder.svg'
							alt=''
						/>
					</div>

					<div className={`${styles.box} ${styles['box-down']} ${styles.blue}`}>
						<h2>Calculator</h2>
						<p>
							Uses data from past projects to provide better delivery estimates
						</p>
						<img
							src='https://assets.codepen.io/2301174/icon-calculator.svg'
							alt=''
						/>
					</div>
				</div>
				<div className={styles['row2-container']}>
					<div className={`${styles.box} ${styles.orange}`}>
						<h2>Karma</h2>
						<p>Regularly evaluates our talent to ensure quality</p>
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
