import "../assets/css/Footer.scss";
const Footer = () => {
    return (
        <footer>
            <div id="mainContainerLinkFooter">
                <div id="containerLinkSitePlan">
                    <ul>
                        <li>Accueil</li>
                        <li>L'équipe</li>
                        <li>Notre association</li>
                        <li>Nous contacter</li>
                        <li>Nos actions</li>
                        <li>Nous rejoindre</li>
                    </ul>
                </div>
                <div id="containerSocialMedia">
                    <div id="containerLogoSocialMedia">
                        <img src={require("../assets/images/logo_facebook.png")} alt="logo facebook"/>
                        <img src={require("../assets/images/logo_instagram.png")} alt="logo instagram"/>
                        <img src={require("../assets/images/logo_linkedin.png")} alt="logo linkedin"/>
                        <img src={require("../assets/images/logo_twitter.png")} alt="logo twitter"/>
                    </div>
                    <p>Copyright © FAP EFREI  – Tous droits réservés.</p>
                </div>
                <div id="containerContact">
                    <ul>
                        <li>30-32 Avenue de la République, 94800 Villejuif, FR</li>
                        <li>+33 6 89 26 94 37</li>
                        <li>contact@fapefrei.com</li>
                        <li>fapefrei.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;