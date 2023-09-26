import React from "react";
import Input from "../components/Input.js"
import Textarea from "../components/Textarea.js"
import "../assets/css/Contact2.scss"
function Contact(){
    return(
        <div id="mainContainerContact">
            <div id="containerContact">
                <h1 className="lato">Contactez-nous !</h1>
                <form id="formComputer">
                    <div id="containerCategory">
                        <div id="containerNameEmail">
                            <Input type="text" id="inputFirstName" name="firstName" placeholder="Entrez votre prénom" label="Prénom" required/>
                            <Input type="text" id="inputLastName" name="lastName" placeholder="Entrez votre nom" label="Nom" required/>
                            <Input type="mail" id="inputEmail" name="mail" placeholder="Entrez votre adresse mail" label="Email" required/>
                        </div>
                        <div id="containerAssociationMessage">
                            <Input type="text" id="inputNameAssociation" name="nameAssociation" placeholder="Entrez le nom de votre association" label="Quel est le nom de l'association ?" required/>
                            <Textarea id="message" name="message" label="Message" placeholder="Tu peux écrire ton message juste ici !" rows="7" cols="40" required/>
                        </div>
                    </div>
                    <input type="submit" value="Envoyer" className="send"/>
                </form>
                <form id="formPhone">
                    <Input type="text" id="inputFirstName" name="firstName" placeholder="Entrez votre prénom" label="Prénom" required/>
                    <Input type="text" id="inputLastName" name="lastName" placeholder="Entrez votre nom" label="Nom" required/>
                    <Input type="mail" id="inputEmail" name="mail" placeholder="Entrez votre adresse mail" label="Email" required/>
                    <Input type="text" id="inputNameAssociation" name="nameAssociation" placeholder="Entrez le nom de votre association" label="Quel est le nom de l'association ?" required/>
                    <Textarea id="message" name="message" label="Message" placeholder="Tu peux écrire ton message juste ici !" rows="7" cols="40" required/>
                    <input type="submit" value="Envoyer" className="send"/>
                </form>
            </div>
        </div>
    )
}

export default Contact;