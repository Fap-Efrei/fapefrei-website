import React from "react";

function Textarea({id,name,value,onChange,placeholder,label,required,rows,cols}){
    return (
        <div class="textareaContainer">
            <label for={id}>{label}{required && <span>*</span>}</label>
            <textarea id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} rows={rows} cols={cols}></textarea>
        </div>
    )
}

export default Textarea;