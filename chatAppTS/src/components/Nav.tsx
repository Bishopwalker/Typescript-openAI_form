import * as React from "react";
import './Nav.css'
import {MouseEventHandler} from "react";


type NavProps = {
    clearFields:MouseEventHandler<HTMLButtonElement>
}
const Nav = ({clearFields}:NavProps): JSX.Element => {

    return (
        <div className='nav'>
            <h1>Chat GPT</h1>
            <button onClick={clearFields} >Chat</button>
        </div>
    )
}
export default Nav