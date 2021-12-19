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
					<h1>Welcome to my site!</h1>
					<p>Learn more about me through browsing my website</p>
				</Card>
				<Card>
					<h2>About Me</h2>
					<p>My name is Raymond.</p>
					<p>I like making cool stuff.</p>
				</Card>
				<Card>
					<h2>Technical Skills</h2>
				</Card>
				<Card>
					<h2>Education?</h2>
				</Card>
				<Card>
					<h2>Projects</h2>
				</Card>
				<Card>
					<h2>Contact?</h2>
				</Card>
			</Content>
		</div>
	)
}
