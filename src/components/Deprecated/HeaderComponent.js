import React from 'react'
import {Layout} from 'antd'
import {Link} from "react-router-dom";
import 'antd/dist/antd.css'

export default function HeaderComponent() {
    const {Header} = Layout
    return (
        <div>
            <Header className="headerStyle">
                <Link to="/">
                    <h1 className="title">Raymond Lam</h1>
                </Link>
            </Header>
        </div>
    )
}
