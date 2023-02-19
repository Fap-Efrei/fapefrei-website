import React from "react";
import Input from "../components/Input.js"
import "../assets/css/Contact.scss"
function Contact(){
    return(
        <div id="mainContainerContact">
            <div id="containerContact">
                <h1 className="lato">Contactez-nous !</h1>
                <form>
                    <Input type="text" id="inputFirstName" name="firstName" placeholder="Entrez votre prénom" label="Prénom" required/>
                    <Input type="text" id="inputLastName" name="lastName" placeholder="Entrez votre nom" label="Nom" required/>
                    <Input type="mail" id="inputEmail" name="mail" placeholder="Entrez votre adresse mail" label="Email" required/>
                    <Input type="text" id="inputMessage" name="message" placeholder="Entrez votre message" label="Message" required/>
                    <Input type="text" id="inputNameAssociation" name="nameAssociation" placeholder="Entrez le nom de votre association" label="Quel est le nom de l'association ?" required/>
                    <input type="submit" value="Envoyer" id="send"/>
                </form>
            </div>
        </div>
    )
}

export default Contact;