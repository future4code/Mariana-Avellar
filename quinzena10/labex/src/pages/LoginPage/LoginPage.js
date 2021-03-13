import {React} from "react";
import axios from "axios";
import useInput from "../../hooks/useInput";
import {BASE_URL} from "../../components/Requests";
import { goToTripDetailsPage } from "../../Routes/Coordinator";
import {useHistory} from "react-router-dom";

const LoginPage = () => {
    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");
    const history = useHistory();

    const onSubmit = () => {
        const body={
            email,
            password
        }
        axios.post(BASE_URL + "/login", body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            goToTripDetailsPage(history)
        }).catch((error) => {
            alert(error)
        });
    };

    return (
        <div>
            <h1>Login Page</h1>
            <input placeholder="email" value={email} onChange={onChangeEmail}/>
            <input type={"password"} placeholder="senha" value={password} onChange={onChangePassword}/>
            <button onClick={onSubmit}>ACESSAR</button>
        </div>
    )
}

export default LoginPage;