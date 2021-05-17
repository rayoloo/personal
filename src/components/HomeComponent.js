import React from 'react'
import {Layout, Card} from 'antd'
import 'antd/dist/antd.css'

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
                <p>I like creating stuff.</p>
            </Card>
        </Content>
    )
}
