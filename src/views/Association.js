import React, {useState} from "react";
import "../assets/css/Association.scss"
import ModalDay from "../components/modal/ModalDays";
function Association(){

    const [showModal,setShowModal] = useState(false);

    function toggleModal(){
        setShowModal(!showModal);
    }
    function displayModal(){
        if(!showModal){
            setShowModal(!showModal);
            document.body.style.background = 'transparent';
        }
    }
    function hiddenModal(){
        if(showModal){
            setShowModal(!showModal)
            document.body.style.background = 'none';

        }
    }
    return(
        <div id="mainContainerAssociation">
            <div id="containerMonday" onClick={toggleModal}>
                <p className="lato">Lundi</p>
            </div>
            <div id="containerTuesday" onClick={toggleModal}>
                <p className="lato">Mardi</p>
            </div>
            <div id="containerWednesday" onClick={toggleModal}>
                <p className="lato">Mercredi</p>
            </div>
            <div id="containerThursday" onClick={toggleModal}>
                <p className="lato">Jeudi</p>
            </div>
            <div id="containerFriday" onClick={toggleModal}>
                <p className="lato">Vendredi</p>
            </div>
            <div id="containerWeekEnd" onClick={toggleModal}>
                <p className="lato">Week-end</p>
            </div>
            <div id="containerModal">
            {showModal && (
                    <ModalDay>
                        <span className="close" onClick={hiddenModal}>X</span>
                        <h2>Prochainement...</h2>
                    </ModalDay>
                )}
            </div>
        </div>
    )
}

export default Association;