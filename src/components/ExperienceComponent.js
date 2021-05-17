import React from 'react'
import {Layout, Row, Col, Card} from "antd"
import 'antd/dist/antd.css'

export default function ExperienceComponent() {
    
    const {Content} = Layout

    return (
        <Content>
            <Card >
                <Row>
                    <Col span={1}>Java</Col>
                    <Col span={14}>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width:"70%"}}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={1}>C</Col>
                    <Col span = {14}>
                    <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width:"40%"}}>    
                            </div>
                        </div>
                    </Col> 
                    
                </Row>
                <Row>
                    <Col span={1}>Python</Col>
                    <Col span={14}>
                    <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width:"20%"}}>    
                            </div>
                        </div>
                    </Col> 
                </Row>
                <Row>
                    <Col span={1}>VHDL</Col>
                    <Col span={14}>
                    <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width:"20%"}}>    
                            </div>
                        </div>
                    </Col>  
                </Row>
                <Row>
                    <Col span={1}>MATLAB</Col>
                    <Col span={14}>
                    <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width:"20%"}}>    
                            </div>
                        </div>
                    </Col> 
                </Row>
                <Row>
                    <Col span={1}>HTML</Col>
                    <Col span={14}>
                    <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width:"10%"}}>    
                            </div>
                        </div>
                    </Col> 
                </Row>
                <Row>
                    <Col span={1}>CSS</Col>
                    <Col span={14}>
                    <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width:"10%"}}>    
                            </div>
                        </div>
                    </Col> 
                </Row>
                <Row>
                    <Col span={1}>JavaScript</Col>
                    <Col span={14}>
                    <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width:"10%"}}>    
                            </div>
                        </div>
                    </Col> 
                </Row>    
                <Row>
                    <Col span={1}>React</Col>
                    <Col span={14}>
                    <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width:"10%"}}>    
                            </div>
                        </div>
                    </Col> 
                </Row>    
                <Row>
                    <Col span={1}>SQL</Col>
                    <Col span={14}>
                    <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width:"10%"}}>    
                            </div>
                        </div>
                    </Col> 
                </Row>    
            </Card>
        </Content>    
    )
}
