import React from 'react'
import {Slider, Layout, Row, Col, Card} from "antd"
import 'antd/dist/antd.css'

export default function ExperienceComponent() {
    
    const {Content} = Layout

    return (
        <Content>
            <Card >
                <Row>
                    <Col span={12}>
                        <Slider
                        max ={10}
                        defaultValue={7}
                        disabled={true}
                        />
                    </Col>
                    <p>Java</p>
                    <Col span={12}>
                        <Slider
                        max ={10}
                        defaultValue={4}
                        disabled={true}
                        />
                    </Col> 
                    <p>C</p>
                    <Col span={12}>
                        <Slider
                        max ={10}
                        defaultValue={2}
                        disabled={true}
                        />
                    </Col> 
                    <p>Python</p>
                    <Col span={12}>
                        <Slider
                        max ={10}
                        defaultValue={2}
                        disabled={true}
                        />
                    </Col>  
                    <p>VHDL</p>
                    <Col span={12}>
                        <Slider
                        max ={10}
                        defaultValue={2}
                        disabled={true}
                        />
                    </Col> 
                    <p>MATLAB</p>
                    <Col span={12}>
                        <Slider
                        max ={10}
                        defaultValue={1}
                        disabled={true}
                        />
                    </Col> 
                    <p>HTML</p>
                    <Col span={12}>
                        <Slider
                        max ={10}
                        defaultValue={1}
                        disabled={true}
                        />
                    </Col> 
                    <p>CSS</p>
                    <Col span={12}>
                        <Slider
                        max ={10}
                        defaultValue={1}
                        disabled={true}
                        />
                    </Col> 
                    <p>JavaScript</p>
                    <Col span={12}>
                        <Slider
                        max ={10}
                        defaultValue={1}
                        disabled={true}
                        />
                    </Col> 
                    <p>React</p>
                    <Col span={12}>
                        <Slider
                        max ={10}
                        defaultValue={1}
                        disabled={true}
                        />
                    </Col> 
                    <p>SQL</p>
                </Row>
            </Card>
        </Content>    
    )
}
