import React from "react";

function Select({id,name,value,onChange,label,required,options}){
    return (
        <div class="inputContainer">
            <label for={id}>{label}{required && <span>*</span>}</label>
            <select id={id} name={name} value={value} onChange={onChange} required={required}>
                {options}
            </select>
        </div>
    )
}

export default Select;