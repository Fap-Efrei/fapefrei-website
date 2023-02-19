import React from "react";
import "../assets/css/Team.scss"
function Team(){
    return(
        <div id="mainContainerTeam">
            <h1>L'équipe</h1>
            <h2>Voici l’équipe en charge de l’association, qui participe quotidiennement à son organisation et son amélioration. 
                Nous sommes tous volontaires pour faire de FAP une aventure humaine hors-norme.<br/>
                Vous trouverez les anciens mandats, les membres fondateurs et d’honneur sur cette page.
            </h2>
            <div id="containerPhotoTeam">
                <div>
                    <img src={require("../assets/images/organigramme_2022-2023/photo_alexis.png")} alt="photo Alexis"/>
                    <p className="lato">Alexis Paradisio</p>
                    <p className="lato">Président</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2022-2023/photo_thais.png")} alt="photo Thaïs"/>
                    <p className="lato">Thaïs Bordessoul</p>
                    <p className="lato">Vice-Présidente</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2022-2023/photo_merwan.png")} alt="photo Merwan"/>
                    <p className="lato">Merwan Belkhiri-Guéguen</p>
                    <p className="lato">Trésorier</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2022-2023/photo_liora.png")} alt="photo Liora"/>
                    <p className="lato">Liora Chemla</p>
                    <p className="lato">Secrétaire</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2022-2023/photo_meric.png")} alt="photo Méric"/>
                    <p className="lato">Méric Chenu</p>
                    <p className="lato">Respo technique</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2022-2023/photo_thibaut.png")} alt="photo Thibaut"/>
                    <p className="lato">Thibaut Genet</p>
                    <p className="lato">Respo Communication</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2022-2023/photo_celia.png")} alt="photo Célia"/>
                    <p className="lato">Célia Milano</p>
                    <p className="lato">Respo Sénior</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2022-2023/photo_paola.png")} alt="photo Paola"/>
                    <p className="lato">Paola Forte</p>
                    <p className="lato">Co-Respo Sénior</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2022-2023/photo_elise.png")} alt="photo Elise"/>
                    <p className="lato">Elise Prieur</p>
                    <p className="lato">Respo Évènements</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2022-2023/photo_loic.png")} alt="photo Loïc"/>
                    <p className="lato">Loïc Tréhin</p>
                    <p className="lato">Respo Volonté</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2022-2023/photo_mathilde.png")} alt="photo Mathilde"/>
                    <p className="lato">Mathilde Robin-Codreanu</p>
                    <p className="lato">Respo Junior</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2022-2023/photo_tahmid.png")} alt="photo Tahmid"/>
                    <p className="lato">Tahmid Khan</p>
                    <p className="lato">Co-Respo Junior</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2022-2023/photo_sonya.png")} alt="photo Sonya"/>
                    <p className="lato">Sonya Ait Said</p>
                    <p className="lato">Respo Espoir</p>
                </div>
            </div>
        </div>
    )
}

export default Team;