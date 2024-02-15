import React, {useState} from "react";
import Input from "../components/Input.js"
import Textarea from "../components/Textarea.js"
import Select from "../components/Select.js"
import "../assets/css/Join.scss"
import JoinDiscordService from "../services/JoinDiscordService";
function Join(){

    const options = ["L1", "L2", "L3", "M1", "M2", "B1", "B2", "B3", "Autre"];
    const [formData, setFormData] = useState({
        firstname: "",
        lastName: "",
        mail: "",
        telephone: "",
        discord: "",
        pole: "",
        promotion: "",
        annee: "",
        motivation: "",
    });
    const handleChange = (e,fieldType) => {
        const {name, value} = e.target;
        const selectedOption = fieldType === "select" ? e.target.value : value;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: selectedOption }));
    }

    const {Send} = JoinDiscordService();
    const PostToDiscord = (e) => {
        e.preventDefault();
        alert(`Votre message a bien été envoyé ${formData.firstname} ${formData.lastName} !`);
        Send(formData);
    }
    return(
        <div id="mainContainerJoin">
            <div id="containerJoin">
                <h1 className="lato">Et si tu nous rejoignais ?</h1>
                <form id="formComputer" onSubmit={PostToDiscord}>
                    <div id="containerCategory">
                        <div id="containerNameDiscordYear">
                            <Input type="text" id="inputFirstName" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Entrez votre prénom" label="Prénom" required/>
                            <Input type="email" id="mail" name="mail" value={formData.mail} onChange={handleChange} placeholder="Entrez votre adresse mail ?" label="Email" required/>
                            <Input type="text" id="inputDiscord" name="discord" value={formData.discord} onChange={handleChange} placeholder="Entrez votre pseudo discord" label="Pseudo discord"/>
                            <Select id="selectPromotion" name="promotion" onChange={handleChange} label="Promotion" options={options} value={formData.promotion}/>
                        </div>
                        <div id="containerNamePhonePole">
                            <Input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Entrez votre nom" label="Nom" required/>
                            <Input type="number" id="inputTelephone" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Entrez votre numéro de téléphone" label="Téléphone"/>
                            <Input type="text" id="pole" name="pole" value={formData.pole} onChange={handleChange} placeholder="Quel pôle vous intéresserait ?" label="Pôle"/>
                            <Input type="number" id="annee" name="annee" value={formData.annee} onChange={handleChange} placeholder="Entrez votre annee de promotion" label="Année"/>
                        </div>
                        <div id="containerMailMotivation">
                            <Textarea id="motivation" name="motivation" label="Motivation" value={formData.motivation} onChange={handleChange} placeholder="Présente-toi en quelques lignes. On ne te demande pas une lettre de motivation, on veut juste en savoir un peu plus sur toi. D'où tu viens, ce que tu aimes faire... Fais-nous rêver ! Tu peux aussi décrire ce que tu veux faire dans l'asso" rows="7" cols="40" required/>
                        </div>
                    </div>
                    <input type="submit" value="Envoyer" className="send"/>
                </form>
                <form id="formPhone">
                    <Input type="text" id="inputFirstName" name="firstName" placeholder="Entrez votre prénom" label="Prénom" required/>
                    <Input type="text" id="lastName" name="lastName" placeholder="Entrez votre nom" label="Nom" required/>
                    <Input type="email" id="mail" name="mail" placeholder="Entrez votre adresse mail ?" label="Email" required/>
                    <Input type="text" id="inputDiscord" name="discord" placeholder="Entrez votre pseudo discord" label="Pseudo discord"/>
                    <Input type="number" id="inputTelephone" name="telephone" placeholder="Entrez votre numéro de téléphone" label="Téléphone"/>
                    <Input type="number" id="inputAnnee" name="Annee" placeholder="Entrez votre année de promotion" label="Année"/>
                    <Select id="selectPromotion" name="promotion" onChange={handleChange} label="Promotion" options={options} value={formData.promotion}/>
                    <Input type="text" id="pole" name="pole" placeholder="Quel pôle vous intéresserait ?" label="Pôle"/>
                    <Textarea id="motivation" name="motivation" label="Motivation" placeholder="Présente-toi en quelques lignes. On ne te demande pas une lettre de motivation, on veut juste en savoir un peu plus sur toi. D'où tu viens, ce que tu aimes faire... Fais-nous rêver ! Tu peux aussi décrire ce que tu veux faire dans l'asso" rows="7" cols="25" required/>
                    <input type="submit" value="Envoyer" className="send"/>
                </form>
            </div>
        </div>
    )
}

export default Join;