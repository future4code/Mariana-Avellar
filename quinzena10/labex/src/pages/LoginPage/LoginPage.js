import {React, useEffect} from "react";
import axios from "axios";
import useInput from "../../hooks/useInput";
import {BASE_URL} from "../../components/Requests";
import {useHistory} from "react-router-dom";
import {goToTripListPage} from "../../Routes/Coordinator";

const LoginPage = () => {
    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");
    const history = useHistory();

    const onSubmitLogin = (event) => {
        event.preventDefault();

        const body={
            email,
            password
        }
        axios.post(BASE_URL + "/login", body)
        .then((response) => {
            window.localStorage.setItem("token", response.data.token)
            history.push("/trip-list")
        })
    };

    useEffect (() => {
        const token = localStorage.getItem("token");

        if (token) {
            goToTripListPage(history);
        }
    }, []);

    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={onSubmitLogin}>
                <input 
                    type={"email"}
                    placeholder={"email"}
                    value={email}
                    onChange={onChangeEmail}
                />
                <input 
                    type={"password"} 
                    placeholder={"senha"}
                    value={password}
                    onChange={onChangePassword}
                />
                <button>ACESSAR</button>
            </form>
        </div>
    )
}

export default LoginPage;