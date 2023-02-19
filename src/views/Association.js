import React from "react";

function Association(){
    return(
        <div id="mainContainerAssociation">
            <h2>Notre association</h2>
            <div id="containerDescriptionAssociation">
                <p>Pourquoi Fap Efrei ?</p>
                <p>À l’heure du web 2.0 et du tout numérique, les outils numériques sont présents dans tous les aspects de notre 
                quotidien. Les collégiens et les lycéens sont scotchés à leurs smartphones, le monde du travail s’appuie sur des outils 
                numériques, les réseaux sociaux sont partout.<br/><br/>Comment ne pas se sentir marginalisé quand on ne maitrise pas ces 
                outils omniprésents dans nos sociétés ?<br/><br/>…..et c’est ainsi que FapEfrei est née !</p>
            </div>  
            <div id="containerPlanning">
                <h2>Notre planning</h2>
                <div id="planning">
                    <table id="containerHeaderPlanning">
                        <tr>
                            <th>Lundi</th>
                            <th>Mardi</th>
                            <th>Mercredi</th>
                            <th>Jeudi</th>
                            <th>Vendredi</th>
                            <th>Samedi et Dimanche</th>
                        </tr>
                        <tr>
                            <td>Nous recevons les Seniors dans une salle informatique de notre école pour leur séance de TP.<br/>
                            Les « Travaux Pratiques encadrés » sont des cours « à la carte », pour mieux répondre à la disparité des 
                            demandes. Ainsi, chaque personne choisit son thème du jour dans une carte de cours qui ne cesse d’évoluer et 
                            de se mettre à jour. Le sénior réalise le TP en présence d’un formateur, qui ne s’occupe que d’une personne à la 
                            fois afin d’être au plus proche des préoccupations du sénior.</td>
                            <td>Nous accueillons simultanément les membres du Centre d’Accueil Thérapeutique à Temps Partiel de Villejuif et les 
                                personnes en grande difficulté sociale de la résidence Adoma de Villejuif. La pédagogie adoptée pendant nos cours 
                                n’est pas la même en fonction de notre public. Pour les membres du CATTP, il est question d’incitation à ce qu’offrent 
                                les différents outils numériques et de concentration. Tandis que, pour les résidents des centres Adoma, il est question 
                                de réinsertion dans la société par la maîtrise d’outils clés.</td>
                            <td></td>
                            <td>Les étudiants de notre association accueillent à nouveau les séniors pour une deuxième session de formation et se rendent 
                                dans les écoles de Villejuif afin de donner des cours d’initiation à la programmation. Nous profitons de ce temps pour 
                                assurer le bon fonctionnement de notre association qui s’appuie sur de nombreux partenariats.</td>
                                <td>Le week-end commence ? Eh bien, non ! Il est encore temps pour une dernière formation Junior. </td>
                                <td>Les weekends, comme la semaine, nos pôles supports (pédagogie, technique et communication) ont du travail. 
                                    Préparer, recruter, mettre à jour et innover, voilà différentes actions à mener au quotidien.</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Association;