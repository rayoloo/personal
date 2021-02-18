import React from 'react'
import {Layout, Space} from 'antd'
import * as antdIcon from '@ant-design/icons';

export default function FooterComponent() {
    const {Footer} = Layout
    return(
        <Footer style={{ textAlign: 'center' }}>
            <p>Raymond Lam ©2021</p>
            <Space>
                <a href="mailto:raymond.lam122@gmail..com">
                    <antdIcon.MailOutlined className="bigIcon"/>
                </a>
                <br/>
                <a href="https://github.com/rayoloo" target="_blank" rel="noreferrer">
                    <antdIcon.GithubOutlined className="bigIcon" />
                </a>
            </Space>
        </Footer>
    )
}
