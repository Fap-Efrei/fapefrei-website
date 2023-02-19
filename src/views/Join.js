import React from "react";
import Input from "../components/Input.js"
import Textarea from "../components/Textarea.js"
import "../assets/css/Join.scss"
function Join(){
    return(
        <div id="mainContainerJoin">
            <div id="containerJoin">
                <h1 className="lato">Et si tu nous rejoignais ?</h1>
                <form id="formComputer">
                    <div id="containerCategory">
                        <div id="containerNameDiscordYear">
                            <Input type="text" id="inputFirstName" name="firstName" placeholder="Entrez votre prénom" label="Prénom" required/>
                            <Input type="text" id="inputDiscord" name="discord" placeholder="Entrez votre pseudo discord" label="Pseudo discord" required/>
                            <Input type="text" id="inputPromotion" name="promotion" placeholder="Entrez votre promotion" label="Année" required/>
                        </div>
                        <div id="containerNamePhonePole">
                            <Input type="text" id="lastName" name="lastName" placeholder="Entrez votre nom" label="Nom" required/>
                            <Input type="text" id="inputTelephone" name="telephone" placeholder="Entrez votre numéro de téléphone" label="Téléphone"/>
                            <Input type="text" id="pole" name="pole" placeholder="Quel pôle vous intéresserait ?" label="Pôle" required/>
                        </div>
                        <div id="containerMailMotivation">
                            <Input type="mail" id="mail" name="mail" placeholder="Entrez votre adresse mail ?" label="Email" required/>
                            <Textarea id="motivation" name="motivation" label="Motivation" placeholder="Présente-toi en quelques lignes. On ne te demande pas une lettre de motivation, on veut juste en savoir un peu plus sur toi. D'où tu viens, ce que tu aimes faire... Fais-nous rêver ! Tu peux aussi décrire ce que tu veux faire dans l'asso" rows="7" cols="40" required/>
                        </div>
                    </div>
                    <input type="submit" value="Envoyer" className="send"/>
                </form>
                <form id="formPhone">
                    <Input type="text" id="inputFirstName" name="firstName" placeholder="Entrez votre prénom" label="Prénom" required/>
                    <Input type="text" id="lastName" name="lastName" placeholder="Entrez votre nom" label="Nom" required/>
                    <Input type="mail" id="mail" name="mail" placeholder="Entrez votre adresse mail ?" label="Email" required/>
                    <Input type="text" id="inputDiscord" name="discord" placeholder="Entrez votre pseudo discord" label="Pseudo discord" required/>
                    <Input type="text" id="inputTelephone" name="telephone" placeholder="Entrez votre numéro de téléphone" label="Téléphone"/>
                    <Input type="text" id="inputPromotion" name="promotion" placeholder="Entrez votre promotion" label="Année" required/>
                    <Input type="text" id="pole" name="pole" placeholder="Quel pôle vous intéresserait ?" label="Pôle" required/>
                    <Textarea id="motivation" name="motivation" label="Motivation" placeholder="Présente-toi en quelques lignes. On ne te demande pas une lettre de motivation, on veut juste en savoir un peu plus sur toi. D'où tu viens, ce que tu aimes faire... Fais-nous rêver ! Tu peux aussi décrire ce que tu veux faire dans l'asso" rows="7" cols="25" required/>
                    <input type="submit" value="Envoyer" className="send"/>
                </form>
            </div>
        </div>
    )
}

export default Join;