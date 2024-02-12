import React from "react";
import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx"
const Layout = ({children,currentPage}) => {

    let classe = "";
    console.log("currentPage : ",currentPage)
    if(currentPage.length==0){
        classe="mainHome"
    }
    else if(currentPage == "contact"){
        classe="mainContact"
    }
    else if(currentPage == "actions"){
        classe="mainActions"
    }
    else if(currentPage == "association"){
        classe="mainAssociation"
    }
    else if(currentPage == "join"){
        classe="mainJoin"
    }
    else if(currentPage == "team"){
        classe="mainTeam"
    }
    else if(currentPage == "old"){
        classe="mainOld"
    }
    return (
        <div>
            <NavBar/>
            <main id={classe}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;