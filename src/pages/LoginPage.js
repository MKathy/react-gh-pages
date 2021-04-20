import "../styles/Login.css";

const LoginPage = () => {
    return (
        <div className="login">
            <label>Login<input type="text"/></label>
            <label>Password<input type="password"/></label>
            <button >Log in</button>
        </div>
     );
}
 
export default LoginPage;