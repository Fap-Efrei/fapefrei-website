import React from "react";
import "../assets/css/Planning.scss"
function Planning(){
    return(
        <div id="mainContainerPlanning">
            <div id="containerGooglePlanning">
                <h1>Nos Événements</h1>
                <iframe
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FParis&bgcolor=%23f9f9f9&mode=WEEK&src=a3lsaWFuLmFydHVsZXF1aW50QGZhcGVmcmVpLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
                    width="800" height="600" frameBorder="0" scrolling="no"></iframe>
                <div id="legend">
                    <div id="containerLegend">
                        <div id="containerLegendSénior">
                            <div id="event"></div>
                            <p>pôle sénior</p>
                        </div>
                        <div id="containerLegendJunior">
                            <div id="workshop"></div>
                            <p>pôle junior</p>
                        </div>
                        <div id="containerLegendVolonté">
                            <div id="conference"></div>
                            <p>pôle volonté</p>
                        </div>
                        <div id="containerLegendEspoir">
                            <div id="meeting"></div>
                            <p>pôle espoir</p>
                        </div>
                        <div id="containerLegendPartage">
                            <div id="partage"></div>
                            <p>pôle partage</p>
                        </div>
                        <div id="containerLegendJPO">
                            <div id="jpo"></div>
                            <p>JPO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="containerCrenaux">
                <h1>Créneaux des Pôles</h1>
                <div id="containerPoles">
                    <div id="containerPoleSénior">
                        <h2>Pôle Sénior</h2>
                        <p>Le mardi de 17H à 18H en salle B004</p>
                        <p>Le jeudi de 18H à 19H en salle B004</p>
                    </div>
                    <div id="containerPoleJunior">
                        <h2>Pôle Junior</h2>
                        <p>(à définir)</p>
                    </div>
                    <div id="containerPoleVolonté">
                        <h2>Pôle Volonté</h2>
                        <p>Le jeudi de 19h30 à 20h30 en salle B004</p>
                    </div>
                    <div id="containerPoleEspoir">
                        <h2>Pôle Espoir</h2>
                        <p>Le jeudi de 18H30 à 19H30 en salle B003</p>
                    </div>
                    <div id="containerPolePartage">
                        <h2>Pôle Partage</h2>
                        <p>(à définir)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planning;