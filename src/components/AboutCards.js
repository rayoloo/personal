import React from 'react'
import styles from '../styles/Project.module.css'

const AboutCard = props => {
	return (
		<div>
			<div className={styles['card-header']}>
				<img src={props.imageLink} alt='project header' />
			</div>
			<div className={styles['card-body']}>
				<div className={styles['card-tag']}>
					{props.tag1 != null && props.tag2 == null && (
						<span className={styles[props.tag1Style]}>{props.tag1}</span>
					)}
					{props.tag2 != null && (
						<div>
							<p>
								<span className={styles[props.tag1Style]}>{props.tag1}</span>
								{'  '}
								<span className={styles[props.tag2Style]}>{props.tag2}</span>
							</p>
						</div>
					)}
				</div>
				<h3>{props.heading}</h3>
				<p className={styles.cardText}>{props.text}</p>
				{props.link != null && (
					<a href={props.link} target='_blank' rel='noreferrer'>
						<button type='button' className={styles.button}>
							Visit Site
						</button>
					</a>
				)}
			</div>
		</div>
	)
}

export default AboutCard
