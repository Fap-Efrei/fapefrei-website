import React, {useState} from "react";
import Input from "../components/Input.js"
import Textarea from "../components/Textarea.js"
import "../assets/css/Contact2.scss"
import ContactDiscordService from "../services/ContactDiscordService";
function Contact(){
    const [formData, setFormData] = useState({
        firstname: "",
        lastName: "",
        mail: "",
        telephone: "",
        discord: "",
        nameAssociation: "",
        message: "",
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
    const {Send} = ContactDiscordService();
    const PostToDiscord = (e) => {
        e.preventDefault();
        alert(`Votre message a bien été envoyé ${formData.firstname} ${formData.lastName} !`);
        Send(formData);
    }
    return(
        <div id="mainContainerContact">
            <div id="containerContact">
                <h1 className="lato">Contactez-nous !</h1>
                <form id="formComputer" onSubmit={PostToDiscord}>
                    <div id="containerCategory">
                        <div id="containerNameEmail">
                            <Input type="text" id="inputFirstName" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Entrez votre prénom" label="Prénom" required/>
                            <Input type="text" id="inputLastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Entrez votre nom" label="Nom" required/>
                            <Input type="email" id="inputEmail" name="mail" value={formData.mail} onChange={handleChange} placeholder="Entrez votre adresse mail" label="Email" required/>
                            <Input type="number" id="inputTelephone" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Entrez votre numéro de téléphone" label="Téléphone"/>
                        </div>
                        <div id="containerAssociationMessage">
                            <Input type="text" id="inputDiscord" name="discord" value={formData.discord} onChange={handleChange} placeholder="Entrez votre pseudo discord" label="Pseudo discord"/>
                            <Input type="text" id="inputNameAssociation" name="nameAssociation" value={formData.nameAssociation} onChange={handleChange} placeholder="Entrez le nom de votre association" label="Quel est le nom de l'association ?" />
                            <Textarea id="message" name="message" label="Message" value={formData.message} onChange={handleChange} placeholder="Tu peux écrire ton message juste ici !" rows="7" cols="40" required/>
                        </div>
                    </div>
                    <input type="submit" value="Envoyer" className="send"/>
                </form>
                <form id="formPhone">
                    <Input type="text" id="inputFirstName" name="firstName" value={formData.firstname} onChange={handleChange} placeholder="Entrez votre prénom" label="Prénom" required/>
                    <Input type="text" id="inputLastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Entrez votre nom" label="Nom" required/>
                    <Input type="email" id="inputEmail" name="mail" value={formData.mail} onChange={handleChange} placeholder="Entrez votre adresse mail" label="Email" required/>
                    <Input type="number" id="inputTelephone" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Entrez votre numéro de téléphone" label="Téléphone"/>
                    <Input type="text" id="inputDiscord" name="discord" value={formData.discord} onChange={handleChange} placeholder="Entrez votre pseudo discord" label="Pseudo discord"/>
                    <Input type="text" id="inputNameAssociation" name="nameAssociation" value={formData.nameAssociation} onChange={handleChange} placeholder="Entrez le nom de votre association" label="Quel est le nom de l'association ?"/>
                    <Textarea id="message" name="message" label="Message" value={formData.message} onChange={handleChange} placeholder="Tu peux écrire ton message juste ici !" rows="7" cols="40" required/>
                    <input type="submit" value="Envoyer" className="send"/>
                </form>
            </div>
        </div>
    )
}

export default Contact;