import React from "react"
import 'antd/dist/antd.css'
import './App.css'
import {Layout} from 'antd'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent"
import SideBarComponent from "./components/SideBarComponent";
import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import ResumeComponent from "./components/ResumeComponent"
import ProjectComponent from "./components/ProjectComponent"
import ExperienceComponent from "./components/ExperienceComponent"

class App extends React.Component{


    render() {
        return(
            <Router>
                <HeaderComponent>
                    <Link to="/"></Link>
                </HeaderComponent>
                <Layout style={{ minHeight: '100vh' }}>
                    <SideBarComponent/>
                    <Layout>
                        <Switch>
                            <Route path='/' exact component={HomeComponent}/>
                            <Route path='/project/1' exact component={ProjectComponent}/>
                            <Route path='/project/2' exact component={ProjectComponent}/>
                            <Route path='/project/3' exact component={ProjectComponent}/>
                            <Route path='/project/4' exact component={ProjectComponent}/>
                            <Route path='/project/5' exact component={ProjectComponent}/>
                            <Route path='/project/6' exact component={ProjectComponent}/>
                            <Route path='/experience' exact component={ExperienceComponent}/>
                            <Route path='/resume' exact component={ResumeComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </Layout>
                </Layout>   
            </Router>
        )
    }
}


export default App
