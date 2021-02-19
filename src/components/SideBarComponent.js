import React , {useState} from 'react'
import {Layout, Menu} from 'antd'
import * as antdIcon from '@ant-design/icons';


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
                <Menu.Item key="1" icon={<antdIcon.PieChartOutlined />}>Experiences</Menu.Item>
                <SubMenu key="sub1" icon={<antdIcon.DesktopOutlined />} title="Projects">
                    <Menu.Item key="3">Project 1</Menu.Item>
                    <Menu.Item key="4">Project 2</Menu.Item>
                    <Menu.Item key="5">Project 3</Menu.Item>
                </SubMenu>
                <Menu.Item key="8" icon={<antdIcon.FilePdfOutlined />}>Resume</Menu.Item>
            </Menu>
        </Sider>
    )
}
