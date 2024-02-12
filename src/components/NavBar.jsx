import {React,Component} from "react";
import "../assets/css/NavBar.scss";
import { NavLink } from "react-router-dom" ;

class NavBar extends Component{
    componentDidMount(){
        const location = window.location.pathname;
        console.log(location)
        const containerLinkNav = document.querySelector("#containerLinkNav");
        const elementContainerLinkNav = containerLinkNav.querySelectorAll('a');
    }
    render(){
        return (
            <header>
                <div id="mainContainerNav">
                    <img src={require("../assets/images/fap_logo.png")} alt="logo fap efrei" />
                    <div id="containerLinkNav">
                        <NavLink exact to="/">Accueil</NavLink>
                        <NavLink to="association">Notre association</NavLink>
                        <NavLink to="actions">Nos actions</NavLink>
                        <NavLink to="team">L'équipe</NavLink>
                        <NavLink to="contact">Nous contacter</NavLink>
                        <NavLink to="join">Nous rejoindre</NavLink>
                    </div>
                </div>
            </header>
        )
    }
}

export default NavBar;