import { Link } from "react-router-dom";

import Product from "../components/Product";
const ProductPage = ({match}) => {
    return (  
        <div className="product">
            <h2>Welcome to product's webpage!</h2>
            <Product id={match.params.id}/>
            <Link to="/products" style={{display: "block", marginTop: 15, textDecoration: "none", color: "black"}}>Return</Link>
        </div>
    );
}
 
export default ProductPage;