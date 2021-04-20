import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Footer.css";

const Footer = ({match}) => {
    return (
        <div className="footer">
            Footer
            <Switch>
                <Route path="/" exact render={() => (
                    <p>You are on <span>HomePage</span></p>
                )}/>
                <Route path="/:page" exact render={({match}) => (
                    <>
                        <p>You are on <span>{match.params.page}</span></p>
                        <p>You are on <span>{match.url}</span></p>
                        <p>You are on <span>{match.path}</span></p>
                    </>
                )}/>
                <Route path="/:page/:productId" exact render={({match}) => (
                    <>
                        <p>You are on <span>{match.params.productId}</span></p>
                        <p>You are on <span>{match.url}</span></p>
                        <p>You are on <span>{match.path}</span></p>
                    </>
                )}/>
            </Switch>        
        </div>
    );
}

export default Footer;