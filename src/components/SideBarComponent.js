import React , {useState} from 'react'
import {Layout, Menu} from 'antd'
import * as antdIcon from '@ant-design/icons';
import {Link} from "react-router-dom"


export default function SideBarComponent() {

    const {Sider} = Layout
    const {SubMenu} = Menu

    const [sidebar, setSetbar] = useState(false)
    const showSidebar = () => setSetbar(!sidebar)

    const[key, setKey] = useState("")
    const currentKey = e => {
        console.log('click', e)
        setKey(e.key)
    }

    return (
            <Sider collapsible collapsed={sidebar} onCollapse={showSidebar}>
                <Menu theme="dark"mode="inline" onClick={currentKey} selectedKeys={[key]}>
                    <Menu.Item key="1" icon={<antdIcon.PieChartOutlined />}>
                        <Link to="/experience">Experiences</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<antdIcon.DesktopOutlined />} title="Projects">
                    
                        <Menu.Item key="3">
                            <Link to="/project/1">Project 1</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/project/2">Project 2</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/project/3">Project 3</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/project/4">Project 4</Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/project/5">Project 5</Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to="/project/6">Project 6</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="2" icon={<antdIcon.FilePdfOutlined />}>
                    <Link to="/resume">Resume</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
    )
}
