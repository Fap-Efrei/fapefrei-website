import React from "react";

function Input({type,id,name,value,onChange,placeholder,label,required}){
    return (
        <div class="inputContainer">
            <label for={id}>{label}{required && <span>*</span>}</label>
            <input id={id} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required}/>
        </div>
    )
}

export default Input;