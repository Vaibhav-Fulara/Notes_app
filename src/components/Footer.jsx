import React from "react";
import { ReactDOM } from "react";

const date = new Date();
const curr_year = date.getFullYear();

const Footer = () => {
    return (
    <footer>
        <p>Copyright © {curr_year}</p>
    </footer>
    );
}

export default Footer;