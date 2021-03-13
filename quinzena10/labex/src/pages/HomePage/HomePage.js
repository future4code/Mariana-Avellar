import React from "react";
import {useHistory} from "react-router-dom";
import {goToAppFormPage, goToLoginPage} from "../../Routes/Coordinator";


const HomePage = () => {
    const history = useHistory();

    return (
        <div className="home-container">
            <h1>Home Page</h1>
            <div>
                <button onClick={()=>goToAppFormPage(history)}>Inscrever</button>
                <button onClick={()=>goToLoginPage(history)}>Login</button>
            </div>
        </div>
    )
}

export default HomePage;