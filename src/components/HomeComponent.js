import React from 'react'
import { Layout, Card } from 'antd'
import 'antd/dist/antd.css'

export default function HomeComponent() {
	const { Content } = Layout
	//start a onepage design
	//section off different components
	return (
		<div>
			<Content>
				<Card>
					<h2>Welcome to my site!</h2>
					<p>Learn more about me through browsing my website</p>
				</Card>
				<Card>
					<h2>About Me</h2>
					<p>My name is Raymond.</p>
					<p>I like making cool stuff.</p>
				</Card>
			</Content>
		</div>
	)
}
