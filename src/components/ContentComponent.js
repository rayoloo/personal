import React from 'react'
import {Layout} from 'antd'
import PageContent from "./PageContent"

export default function ContentComponent() {
    const {Content} = Layout
    return (
        <Content>
            <PageContent/>
        </Content>
    )
}
