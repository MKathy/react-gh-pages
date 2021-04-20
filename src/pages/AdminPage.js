import { Redirect } from "react-router-dom";

const permission = false;

const AdminPage = () => {
    return (
        <div className="admin">
            {permission ? <p>Welcome to admin panel!</p> : <Redirect to="/login"/>}
        </div>
    );
}
 
export default AdminPage;