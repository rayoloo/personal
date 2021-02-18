import React from "react"
import 'antd/dist/antd.css'
import './App.css'
import {Layout} from 'antd'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent"
import SideBarComponent from "./components/SideBarComponent";
import FooterComponent from "./components/FooterComponent";
import ContentComponent from "./components/ContentComponent";


class App extends React.Component{


    render() {
        return(
            <Router>
                <HeaderComponent/>
                <Layout style={{ minHeight: '100vh' }}>
                    <SideBarComponent/>
                    <Layout>
                        <ContentComponent/>
                        <FooterComponent/>
                    </Layout>
                </Layout>   
            </Router>
        )
    }
}


export default App
