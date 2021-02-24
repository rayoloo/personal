import React from 'react'
import {Slider, Layout, Row, Col, Card} from "antd"

export default function ExperienceComponent() {
    
    const mark = {

    }
    
    const {Content} = Layout

    return (
        <Row>
            <Col span={16}>
                <Content>
                    <Card>
                    <p>Java</p>
                    <Slider
                        max ={15}
                        defaultValue={7}
                        disabled={true}>
                            7 Years
                    </Slider>
                    </Card>
                </Content>
            </Col>
        </Row>
        
    )
}
