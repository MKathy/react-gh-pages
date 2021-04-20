import { Route, Switch } from "react-router-dom";

import AdminPage from "../pages/AdminPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductListPage from "../pages/ProductListPage";
import LoginPage from "../pages/LoginPage";

import "../styles/Page.css";

const Page = () => {
    return ( 
        <div className="page">
            <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/product/:id" component={ProductPage}></Route>
                <Route path="/products" component={ProductListPage}></Route>
                <Route path="/contact" component={ContactPage}></Route>
                <Route path="/admin" component={AdminPage}></Route>
                <Route path="/login" component={LoginPage}></Route>
                <Route component={ErrorPage}></Route>
            </Switch>
        </div>
     );
}
 
export default Page;