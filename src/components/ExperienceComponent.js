import React from 'react'
import {Slider, Layout, Row, Col, Card} from "antd"

export default function ExperienceComponent() {
    
    const {Content} = Layout

    return (
        <Content>
            <Card>
                <Row>
                    <p>Java</p>
                    <Col span={12}>
                        <Slider
                        max ={15}
                        defaultValue={7}
                        disabled={true}
                        />
                    </Col> 
                </Row>
            </Card>
        </Content>    
    )
}
