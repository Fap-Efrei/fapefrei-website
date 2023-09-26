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
                    <img src={require("../assets/images/organigramme_2023-2024/photo_celia.png")} alt="photo Célia"/>
                    <p className="lato">Célia Milano</p>
                    <p className="lato">Présidente</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_pierrick.png")} alt="photo Pierrick"/>
                    <p className="lato">Pierrick Delrieu</p>
                    <p className="lato">Vice-Président</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_paola.png")} alt="photo Paola"/>
                    <p className="lato">Paola Forte</p>
                    <p className="lato">Vice-Présidente</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_liora.png")} alt="photo Liora"/>
                    <p className="lato">Liora Chemla</p>
                    <p className="lato">Secrétaire</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_noe.png")} alt="photo Noé"/>
                    <p className="lato">Noé Lacaille</p>
                    <p className="lato">Trésorier</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_joss.png")} alt="photo Meitoh"/>
                    <p className="lato">Meitoh Douniama-Okana</p>
                    <p className="lato">Respo Sénior</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_etienne.png")} alt="photo Etienne"/>
                    <p className="lato">Etienne Gaillard</p>
                    <p className="lato">Respo Junior</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_david.png")} alt="photo David"/>
                    <p className="lato">David Nahon</p>
                    <p className="lato">Co-Respo Espoir</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_justine.png")} alt="photo Justine"/>
                    <p className="lato">Justine Roecker</p>
                    <p className="lato">Co-Respo Espoir</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_loic.png")} alt="photo Loïc"/>
                    <p className="lato">Loïc Tréhin</p>
                    <p className="lato">Respo Volonté</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_raphaelC.png")} alt="photo Raphael"/>
                    <p className="lato">Raphaël Cadillat</p>
                    <p className="lato">Respo Communication</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_tuan.png")} alt="photo Tuân"/>
                    <p className="lato">Tuân Bonneté</p>
                    <p className="lato">Respo Design</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_kylian.png")} alt="photo Kylian"/>
                    <p className="lato">Kylian Artu-Lequint</p>
                    <p className="lato">Co-Respo Technique</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_antoine.png")} alt="photo Antoine"/>
                    <p className="lato">Antoine Soubin-Fink</p>
                    <p className="lato">Co-Respo Technique</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_martin.png")} alt="photo Martin"/>
                    <p className="lato">Martin Darbellay</p>
                    <p className="lato">Co-Respo Crêpes</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_benjamin.png")} alt="photo Benjamin"/>
                    <p className="lato">Benjamin Mazzega-Fabbro</p>
                    <p className="lato">Co-Respo Crêpes</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_raphaelA.png")} alt="photo Raphaël"/>
                    <p className="lato">Raphaël Amour</p>
                    <p className="lato">Respo Fappy</p>
                </div>
                <div>
                    <img src={require("../assets/images/organigramme_2023-2024/photo_alexis.png")} alt="photo Alexis"/>
                    <p className="lato">Alexis Paradiso</p>
                    <p className="lato">Parrain</p>
                </div>
            </div>
        </div>
    )
}

export default Team;