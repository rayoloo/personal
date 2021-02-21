import React from 'react'
import {Layout, Button} from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import PDF from "../pdf/Resume.pdf"


export default function ResumeComponent() {
    const {Content} = Layout
    const resumeLink = "https://drive.google.com/u/0/uc?id=1BR-g3xiQqkBeL8NMKDqBhmsODcHQOFxc&export=download"
    return (
        <Content style={{textAlign:'center'}}>
            <br/>
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large" href={resumeLink}>
            Download
            </Button>
            <br/>
            <br/>
            <iframe src={PDF} title="Resume PDF" width="50%" height="90%"/>

        </Content>
    )
}
