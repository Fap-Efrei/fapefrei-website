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
            <div id="containerMonday" onClick={displayModal}>
                <p className="lato">Lundi</p>
            </div>
            <div id="containerTuesday">
                <p className="lato">Mardi</p>
            </div>
            <div id="containerWednesday">
                <p className="lato">Mercredi</p>
            </div>
            <div id="containerThursday">
                <p className="lato">Jeudi</p>
            </div>
            <div id="containerFriday">
                <p className="lato">Vendredi</p>
            </div>
            <div id="containerWeekEnd">
                <p className="lato">Week-end</p>
            </div>
            <div id="containerModal">
            {showModal && (
                    <ModalDay>
                        <span className="close" onClick={hiddenModal}></span>
                        <h2>Titre modal lundi</h2>
                    </ModalDay>
                )}
            </div>
        </div>
    )
}

export default Association;