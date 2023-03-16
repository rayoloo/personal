import React from 'react'
import styles from '../styles/Switch.module.css'

const Switch = props => {
	return (
		<div>
			<label className={styles.switch}>
				<input
					onClick={props.func}
					type='checkbox'
					checked={props.theme === 'light' ? true : false}
				/>
				<span className={styles.slider}></span>
			</label>
		</div>
	)
}

export default Switch
