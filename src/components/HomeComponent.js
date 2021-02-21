import React from 'react'
import {Layout, Card} from 'antd'


export default function HomeComponent() {
    const {Content} = Layout
    return (
        <Content>
            <Card>
                <h2>Welcome to my site!</h2>
                <p>Learn more about me through browsing my website</p>
            </Card>
            <Card>
                <h2>About Me</h2>
                <p>My name is Raymond Lam.</p>
                <p>I have completed a bachelor in computer engineering (B.Eng) at Ryerson University. I am currently seeking job opportunities.</p>
            </Card>
        </Content>
    )
}
