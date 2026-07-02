import { useContext } from "react";
import { AuthProvider } from "../../component/context/AuthContext";

export default function Profile() {

    const { user } = useContext(AuthProvider);

    return (

        <div className="container" style={{padding:"70px 0"}}>

            <h1>My Profile</h1>

            <br/>

            <h3>Name : {user.name}</h3>

            <br/>

            <h3>Email : {user.email}</h3>

        </div>

    )

}