import React from "react"
import WelcomeContent from "./WelcomeContent"
import {Layout} from 'antd'

export default function PageContent(props){
    //const resumeLink = "https://drive.google.com/u/0/uc?id=1BR-g3xiQqkBeL8NMKDqBhmsODcHQOFxc&export=download"
    const {Content} = Layout
    
    return(
        <div>
                <Content>
                    <WelcomeContent/>
                </Content>
        </div>
    )             

}
