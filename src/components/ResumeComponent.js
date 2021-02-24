import React from 'react'
import {Layout, Button} from 'antd'
import { DownloadOutlined } from '@ant-design/icons';



export default function ResumeComponent() {
    const {Content} = Layout
    const resumeLink = "https://drive.google.com/u/0/uc?id=1BR-g3xiQqkBeL8NMKDqBhmsODcHQOFxc&export=download"
    return (
        <Content>
            <br/>
            <div style={{position: "absolute", right: "30px", top: "100px"}}>
            <Button type="primary" icon={<DownloadOutlined />} size="large" href={resumeLink}>
            Download
            </Button>
            </div>
            <br/>
            <div style={{textAlign:'center', height: "92%"}}>
                <iframe 
                    title="resume document"
                    src="https://docs.google.com/document/d/e/2PACX-1vTsws3RWgMXyKdfc_Jt05oksXem4x-FyqlWDGh8SQpOUW7uUfa9V7DrtVbxw9JqRR6WTfQ--ijkdxof/pub?embedded=true"
                    height="100%"
                    width="50%"
                />
            </div>

        </Content>
    )
}
