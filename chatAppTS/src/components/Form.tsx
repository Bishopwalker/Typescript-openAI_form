import React, {MouseEventHandler, useEffect, useState} from "react";
import {createStyles, makeStyles, Typography, Paper, Button, FormLabel} from "@material-ui/core";

import CustomTextField from "./CustomTextField";
import axios from "axios";

const useStyles = makeStyles(() => createStyles({
    form : {
        display : "flex",
        flexDirection : "column",
    },
    container : {
        backgroundColor : "#ffffff",
        position : "absolute",
        top : "80%",
        left : "65%",

        transform : "translate(-50%,-50%)",
        padding : 30,
        textAlign : "center",
        width: 900,
    },
    title : {
        margin:"0px 0 20px 0"
    },
    button : {
        margin:"20px 0"
    }
}))

type Values = {
    question : string,

}
type FormProps = {
    chatLog: string[]
    setChatLog: Function
    setMessages: Function
    clearFields:MouseEventHandler<HTMLButtonElement>

}
//create a type function '[Symbol.iterator]()' method that returns an iterator
const Form = ({setChatLog,chatLog,setMessages }:FormProps): JSX.Element => {



    const classes = useStyles();
    const [values,setValues] = useState<Values>({
        question : "",

    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // @ts-ignore
        setChatLog([...chatLog, values.name])
        console.log(values)
        setValues({
            question : "",
        })
    }
    const responseFunction=async()=>{
        console.log('hit')

        const response = await axios.post('http://localhost:3080', {
            message: chatLog
        });
        console.log(response);

        setMessages((responses: any) => [...responses, response.data.message.choices[0].text]);
    }

//create a useEffect to collect and display the response from the server
    useEffect(   () => {

       chatLog.length?responseFunction().then(r => console.log(r)):console.log('no chatlog')

    } , [chatLog]);

    return (
        <Paper className={classes.container}>
            <Typography variant={"h4"} className={classes.title}>ChatGPT</Typography>
            <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
                <CustomTextField changeHandler={handleChange} label={"Question"} question={"name"}/>
                <Button type={"submit"} variant={"contained"} className={classes.button}>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;