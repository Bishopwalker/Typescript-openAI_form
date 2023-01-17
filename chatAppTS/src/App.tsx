import { useState } from 'react'

import './App.css'
import Form from "./components/Form";
import Nav from "./components/Nav";
import * as React from "react";
import axios from "axios";
import {createStyles, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles(() => createStyles({
    title : {
        margin:"0px 0 20px 0",
        position : "relative",
        top:"5%",
        left:"30%",
        fontColor:"white",
        fontStyle:"bold",
    }}))

function App(): JSX.Element {
 //create interface and type for component className
     const [messages, setMessages] = React.useState<string[]>([])
    const [chatLog, setChatLog] = React.useState<string[]>([])
    //
    console.log(chatLog)
    const classes = useStyles();
  const clearFields = () => {
  setMessages([])
    setChatLog([])
console.log('cleared')


        }
  return (
    <div className="App">
       <div>

     <Nav clearFields={clearFields}  />
       </div>

        <section>
            <Typography variant={"h4"} className={classes.title}>ChatGPT</Typography>
        <div className="response">{chatLog}</div>
        <div className="response1">{messages}</div>
        <Form clearFields={clearFields} chatLog={chatLog}   setChatLog={setChatLog}   setMessages={setMessages}/>
        </section>


    </div>
  )
}

export default App
