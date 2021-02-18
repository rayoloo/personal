import React from "react"
import 'antd/dist/antd.css'
import './App.css'
import {Layout, Menu, Space} from 'antd'
import {
    DesktopOutlined,
    PieChartOutlined,
    FilePdfOutlined, 
    MailOutlined,
    GithubOutlined,
} from '@ant-design/icons';
import PageContent from "./PageContent"


const {Header, Content, Footer, Sider} = Layout
const {SubMenu} = Menu

class App extends React.Component{

    state = {
        collapsed:false
    }

    onCollapse = collapsed => {
        this.setState({ collapsed })
    }

    render() {
        const {collapsed} = this.state
        return(
            <div>
                <Header className="headerStyle">
                    <h1 className="title">Raymond Lam</h1>
                </Header>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                Experiences
                            </Menu.Item>
                            <SubMenu key="sub1" icon={<DesktopOutlined />} title="Projects">
                                <Menu.Item key="3">Project 1</Menu.Item>
                                <Menu.Item key="4">Project 2</Menu.Item>
                                <Menu.Item key="5">Project 3</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="8" icon={<FilePdfOutlined />}>
                                Resume    
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Content>
                            <p>Conditional Render info based on key selected</p>
                            <p>Updated coming soon</p>
                            <PageContent/>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            <p>Raymond Lam ©2021</p>
                            <Space>
                                <a href="mailto:raymond.lam122@gmail..com"><MailOutlined className="bigIcon"/></a>
                                <br/>
                                <a href="https://github.com/rayoloo" target="_blank" rel="noreferrer"><GithubOutlined className="bigIcon" /></a>
                            </Space>
                        </Footer>
                    </Layout>
                </Layout>   
            </div>
            
        )
    }
}


export default App
