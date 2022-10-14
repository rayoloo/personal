import React from 'react'
import styles from '../styles/Project.module.css'

const AboutCard = props => {
	return (
		<div>
			<div className={styles['card-header']}>
				<img src={props.imageLink} alt='project header' />
			</div>
			<div className={styles['card-body']}>
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
				<h3>{props.heading}</h3>
				{props.subheading != null && <h5>{props.subheading}</h5>}
				<p>{props.text}</p>
			</div>
		</div>
	)
}

export default AboutCard
