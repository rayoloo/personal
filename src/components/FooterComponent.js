import React from 'react'
import { GithubOutlined } from '@ant-design/icons'
import styles from '../styles/Footer.module.css'

export default function FooterComponent() {
	return (
		<div className={styles.Footer}>
			<div className={styles.container}>
				<p>©2022 Raymond Lam</p>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<a href='https://github.com/rayoloo'>
						<GithubOutlined style={{ fontSize: 20, color: '#fff' }} />
					</a>
				</div>
			</div>
		</div>
	)
}
