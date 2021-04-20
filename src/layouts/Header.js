import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";
import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";


const Header = () => {
    // const images = [img1, img2, img3];
    // const index = Math.floor(Math.random() * 3);
    // const image = images[index];
    return (
        <>
        {/* <img src={image} alt="header"/> */}
        <Switch>
            <Route path="/" exact render={() => (<img src={img1} alt="town"/>)}></Route>
            <Route path="/products" render={() => (<img src={img2} alt="town"/>)}></Route>
            <Route path="/contact" render={() => (<img src={img3} alt="town"/>)}></Route>
            <Route path="/admin" render={() => (<img src={img3} alt="town"/>)}></Route>
            <Route render={() => (<img src={img3} alt="town"/>)}></Route>
        </Switch>
        </>
    );
}

export default Header;