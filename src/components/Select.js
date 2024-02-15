import React from "react";

function Select({id,name,value,onChange,label,required,options}){
    return (
        <div class="inputContainer">
            <label htmlFor={id}>{label}{required && <span>*</span>}</label>
            <select id={id} name={name} defaultValue={value} onChange={(e) => onChange(e, "select")} required={required}>
                <option value="">Sélectionner une promotion</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select;