import React, {MouseEventHandler} from "react";
import {TextField} from "@material-ui/core";

type CustomTextFieldProps = {
    label: string,
   question: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,

}


const CustomTextField = (props: CustomTextFieldProps) => {
    return (
        <TextField
            label={props.label}
                name={props.question}
            onChange={props.changeHandler}

            variant={"outlined"} //enables special material-ui styling
            size={'medium'} //makes the text field bigger
            margin={"dense"}
        />
    );
}

export default CustomTextField