import "../assets/css/Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <div id="mainContainerLinkFooter">
                <div id="containerLinkSitePlan">
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="team">L'équipe</Link></li>
                        <li><Link to="association">Notre association</Link></li>
                        <li><Link to="contact">Nous contacter</Link></li>
                        <li><Link to="actions">Nos actions</Link></li>
                        <li><Link to="join">Nous rejoindre</Link></li>
                        <li><Link to="old">Les anciens</Link></li>
                    </ul>
                </div>
                <div id="containerSocialMedia">
                    <div id="containerLogoSocialMedia">
                        <a href="https://www.facebook.com/fapefrei/" target="_blank" rel="noreferrer"><img src={require("../assets/images/logo_facebook.png")} alt="logo facebook"/></a>
                        <a href="https://www.instagram.com/fapefrei/?hl=fr" target="_blank" rel="noreferrer"><img src={require("../assets/images/logo_instagram.png")} alt="logo instagram"/></a>
                        <a href="https://www.linkedin.com/showcase/fapefrei/" target="_blank" rel="noreferrer"><img src={require("../assets/images/logo_linkedin.png")} alt="logo linkedin"/></a>
                        <a href="https://twitter.com/fapefrei?lang=fr" target="_blank" rel="noreferrer"><img src={require("../assets/images/logo_twitter.png")} alt="logo twitter"/></a>
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