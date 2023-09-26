import React from "react";
import { NavLink,useLocation } from "react-router-dom" ;
import "../assets/css/Home.scss"
import Banner from "../components/Banner.jsx";
function Home(){
    return(
        <div id="mainContainerHome">
            <div id="containerTitleDescription">
                <div id="title">
                    <h1 className="lato">FAP EFREI</h1>
                    <h2>Formations aux particuliers</h2>
                    <p className="lato">Une association étudiante bénévole et dynamique au service de la communauté</p>
                </div>
                <img src={require("../assets/images/computer.png")} alt="logo ordinateur"/>
            </div>
            <img src={require("../assets/images/elipse_second_home.png")} alt="elipse second home" className="elipse"/>
            <img src={require("../assets/images/elipse_first_home.png")} alt="elipse first home" className="elipse"/>
            <div id="containerLinkAssociationJoin">
                <NavLink to="association">Découvrer l'association</NavLink>
                <NavLink to="join">Rejoins-nous !</NavLink>
            </div>
            <Banner/>
            <div id="mainContainerOurActions">
                <h2 className="lato">Nos actions</h2>
                <div id="containerOurActions">
                    <div id="containerJuniorEspoir">
                        <div id="containerJunior">
                            <div>
                                <img src={require("../assets/images/icone_book.png")} alt="logo junior"/>
                            </div>
                            <div>
                                <p className="lato">Pôle Junior</p>
                                <p className="lato">FAP EFREI se tourne vers la jeunesse afin de prodiguer des cours en informatique aux écoles élémentaires de Villejuif. Ainsi, les élèves découvre l’informatique dans des cours simple et ludique pour se protéger des dangers d’internet.</p>
                            </div>
                        </div>
                        <div id="containerEspoir">
                            <div>
                                <img src={require("../assets/images/icone_person.png")} alt="logo espoir"/>
                            </div>
                            <div>
                                <p className="lato">Pôle Espoir</p>
                                <p className="lato">Depuis 2006, nous donnons des cours aux patients de l’association Insert, liée au Centre d’Accueil Thérapeutique à Temps Partiel (CATTP) près de Villejuif.</p>
                            </div>
                        </div>
                    </div>
                    <div id="containerVolonteSenior">
                        <div id="containerVolonte">
                            <div>
                                <img src={require("../assets/images/icone_backpack.png")} alt="logo volonté"/>
                            </div>
                            <div>
                                <p className="lato">Pôle Volonté</p>
                                <p className="lato">Le pôle Volonté aide les formés dans leur réinsertion professionnelle en dispensant des cours sur la création d’un CV ainsi que l’élaboration d’une lettre de motivation mais également en les aidant dans toutes leurs démarches administratives (CAF, Pôle emploi …)</p>
                            </div>
                        </div>
                        <div id="containerSenior">
                            <div>
                                <img src={require("../assets/images/icon_group_person.png")} alt="logo sénior"/>
                            </div>
                            <div>
                                <p className="lato">Pôle Sénior</p>
                                <p className="lato">Parce que les personnes âgées se sentent souvent exclues de l’informatique, perçue comme trop complexe, nous les accueillons au sein de l’Efrei et les initions à l’outil numérique.</p>
                            </div>
                        </div>
                    </div>
                    <div id="containerEntraideEntraide">
                        <div id="containerEntraide">
                            <div>
                                <img src={require("../assets/images/icon_crayon.png")} alt="logo entraide"/>
                            </div>
                            <div>
                                <p className="lato">Pôle Entraide</p>
                                <p className="lato">Le pôle entraide a pour vocation d’aider les élèves d’Efrei Paris en difficulté en informatique. Ainsi, des cours particuliers sont organisés au cours de l’année pour permettre aux élèves de réussir leurs examens. Tu as d’ores et déjà des questions ? N’hésite pas à les poser à l’adresse suivante : entraide@fapefrei.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mainContainerPartners">
                <h2 className="lato">Nos partenaires nous font confiance !</h2>
                <div id="containerPartners">
                    <img src={require("../assets/images/logo_efrei.png")} alt="logo efrei"/>
                    <img src={require("../assets/images/logo_london_fox.png")} alt="logo london fox"/>
                    <img src={require("../assets/images/logo_secours_populaire.png")} alt="logo secours populaire"/>
                    <img src={require("../assets/images/logo_philia.png")} alt="logo philia"/>
                    <img src={require("../assets/images/logo_villejuif.png")} alt="logo villejuif"/>
                </div>
            </div>
        </div>
    )
}

export default Home;