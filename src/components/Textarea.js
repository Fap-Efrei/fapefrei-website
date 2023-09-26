import React from "react";

function Textarea({id,name,placeholder,label,required,rows,cols}){
    return (
        <div class="textareaContainer">
            <label for={id}>{label}{required && <span>*</span>}</label>
            <textarea id={id} name={name} placeholder={placeholder} required={required} rows={rows} cols={cols}></textarea>
        </div>
    )
}

export default Textarea;