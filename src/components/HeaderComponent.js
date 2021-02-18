import React from 'react'
import {Layout} from 'antd'

export default function HeaderComponent() {
    const {Header} = Layout
    return (
        <div>
            <Header className="headerStyle">
                <h1 className="title">Raymond Lam</h1>
            </Header>
        </div>
    )
}
