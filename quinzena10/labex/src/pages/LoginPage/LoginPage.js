import {React, useEffect} from "react";
import axios from "axios";
import useInput from "../../hooks/useInput";
import {BASE_URL} from "../../components/Requests";
import {useHistory} from "react-router-dom";
import {goToTripListPage} from "../../Routes/Coordinator";
import styled from "styled-components";

//******** ESTILIZAÇÃO *********//

const LoginPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    height: 40px;
    background-color: whitesmoke;
    border: none;
    padding: 10px 0px;
    text-align: center;
    font-size: 14px;
    text-decoration:underline;
`;

const Button = styled.button`
    width: 100%;
    height: 36px;
    background-color: purple;
    color: white;
    border-radius: 10px;
`;

//******** // *********//

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
        <LoginPageContainer>
            <h1>Login do usuário</h1>

            <Form onSubmit={onSubmitLogin}>
                <Input 
                    type={"email"}
                    placeholder={"Email"}
                    value={email}
                    onChange={onChangeEmail}
                />
                <Input 
                    type={"password"} 
                    placeholder={"Senha"}
                    value={password}
                    onChange={onChangePassword}
                />
                <Button>ACESSAR</Button>
            </Form>
        </LoginPageContainer>
    )
}

export default LoginPage;