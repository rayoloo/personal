import React from 'react'
import {Layout, Card} from 'antd'


export default function ContentComponent() {
    const {Content} = Layout
    //const resumeLink = "https://drive.google.com/u/0/uc?id=1BR-g3xiQqkBeL8NMKDqBhmsODcHQOFxc&export=download"  
    return (
        <Content>
            <Card>
                <h2>Welcome</h2>
                <p>My name is Raymond Lam.</p>
                <p>I have completed a bachelor in computer engineering (B.Eng) at Ryerson University. I am currently seeking job opportunities.</p>
            </Card>
        </Content>
    )
}
