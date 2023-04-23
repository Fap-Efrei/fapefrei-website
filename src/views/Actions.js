import React from "react";
import "../assets/css/Actions.scss"
function Actions(){
    return(
        <div id="mainContainerActions">
            <h1>Nos actions</h1>
            <h2>
L’association FAP EFREI se décompose majoritairement en 4 grands pôles, dont chacun dispose de formations orientées vers 
des publiques distincts :</h2>
            <div id="containerDescriptionPole">
                <div id="descriptionPoleSenior">
                    <p className="lato">Pôle Sénior</p>
                    <p className="lato">Parce que les personnes âgées se sentent souvent exclues de l’informatique, perçue 
                    comme trop complexe, nous les accueillons au sein d’Efrei Paris. Fap Efrei initie les retraités et personnes 
                    âgées à l’outil informatique. Les formations se déroulent dans les salles informatiques d’Efrei Paris tous 
                    les lundis et jeudis soirs de 18h20 à 19h20 avec un formateur par Senior. Avec un panel de cours variés, les 
                    débutants comme les plus expérimentés y sont conviés.</p>
                </div>
                <div id="descriptionPoleVolonte">
                    <p className="lato">Pôle Volonté</p>
                    <p className="lato">Le but des formations du pôle Volonté organisées par FAP Efrei est d’aider les formés 
                    dans leur réinsertion professionnelle en dispensant des cours sur la création d’un CV ainsi que l’élaboration 
                    d’une lettre de motivation mais aussi de les aider dans toutes leurs démarches administratives (CAF, Pôle emploi …).</p>
                </div>
                <div id="descriptionPoleEspoir">
                    <p className="lato">Pôle Espoir</p>
                    <p className="lato">La formation Espoir consiste en l’accompagnement de personnes atteintes de légers handicaps. Chaque 
                    séance peut comporter des exercices pour comprendre comment utiliser l’ordinateur, une recherche d’emploi, la consultation 
                    d’une boîte mail ou aider le formé sur des points particuliers qu’il souhaiterait aborder.</p>
                </div>
                <div id="descriptionPoleJunior">
                    <p className="lato">Pôle espoir</p>
                    <p className="lato">La formation Espoir consiste en l’accompagnement de personnes atteintes de légers handicaps. 
                    Chaque séance peut comporter des exercices pour comprendre comment utiliser l’ordinateur, une recherche d’emploi, 
                    la consultation d’une boîte mail ou aider le formé sur des points particuliers qu’il souhaiterait aborder.</p>
                </div>
            </div>
        </div>
    )
}

export default Actions;