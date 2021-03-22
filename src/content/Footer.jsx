import React from "react";

const date = new Date()
const currentYear = date.getFullYear();

function Footer(){
    return(
     <div>
    <footer>
    <p>copyright© {currentYear} </p>
    </footer>  
    </div>
    )
}

export default Footer;

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.