import React from "react";

function Input({type,id,name,placeholder,label,required}){
    return (
        <div class="inputContainer">
            <label for={id}>{label}{required && <span>*</span>}</label>
            <input id={id} type={type} name={name} placeholder={placeholder}/>
        </div>
    )
}

export default Input;