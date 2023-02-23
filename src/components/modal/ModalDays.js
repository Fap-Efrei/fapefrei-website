import React, {useState} from 'react'

function Modal(props){
    
    return(
        <div className="modal">
            {props.children}
        </div>
    )
}

export default Modal;