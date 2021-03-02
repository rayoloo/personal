import React from 'react'
import {Layout, Card} from 'antd'
import MemeApp from '../memeGenProject/MemeApp'
const {Content} = Layout

export const project1 = () => {
    return(
        <Content>
            <Card>
            <span><u>RFID Security Door – Arduino</u></span>
            <br/> 
            <span class="li">Created a motorized door that opened for the specific RFID keys</span>
            </Card>
        </Content>
    )
}

export const project2 = () => {
    return(
        <Content>
            <Card>
            <span><u>Bank Account Application - Java</u></span>
                <br/> 
                <br/> 
                <span class="li">A login page for customers and banking manager to perform different banking operations: deposits, withdraws, opening account(s)</span>
            </Card>
        </Content>
    )
}

export const project3 = () => {
    return(
        <Content>
            <Card>
            <span><u>Pokedex - Java</u></span>
                <br/> 
                <br/> 
                <span class="li">Created a Pokemon Database for the first 150 Pokemons that can be accessed with a set of queries that is selected through a Java IDE console</span>
            </Card>
        </Content>
    )
}

export const project4 = () => {
    return(
        <Content>
            <Card>
            <span><u>Arithmetic Logic Unit – VHDL</u></span>
                <br/> 
                <br/> 
                <span class="li">ALU used to perform several operations on two 8-bit input and display the 8-bit output on the seven segment display </span>
                <span class="li">ALU is composed of a CPU, (de)multiplexer, latches, cache, cache controller, SDRAM controller and SRAM memory</span>
            </Card>
        </Content>
    )
}
export const project5 = () => {
    return(
        <Content>
            <Card>
            <span><u>Parallel Computing Stock Market Forecasting - Python</u></span>
                <br/> 
                <br/> 
                <span class="li">Using the Tensorflow library, forecast the closing value of a single security over the next 30 days</span>
            </Card>
        </Content>
    )
}

export const project6 = () => {
    return(
        <Content>
            <Card>
            <span><u>Online Cafeteria - Fullstack Application</u></span>
                <br/> 
                <br/> 
                <span class="li">Companies can register to employ an online cafeteria where employees can order lunch meals from an online website to made on a chosen date.</span>
                <span class="li">React Frontend</span>
                <br/>
                <span class="li">Flask Backend</span>
                <br/>
                <span class="li">SQLite Database</span>
            </Card>
        </Content>
    )
}

export const project7 = () => {
    return(
        <Content>
            <Card>
                <MemeApp/>
            </Card>
            <p>*Some images are more suitable than others</p>
        </Content>
    )
}
