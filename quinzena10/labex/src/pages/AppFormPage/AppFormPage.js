import React, {useState, useEffect} from "react";
import {useForm} from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../components/Requests";
import styled from "styled-components";

//******** ESTILIZAÇÃO *********//
const AppFormPageContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 80px 0px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Input = styled.input`
    height: 60px;
    border: none;
    background-color: whitesmoke;
    text-align:center;
    font-size: 14px;
`;

const Select = styled.select`
    background-color: whitesmoke;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: purple;
  color: white;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 5px;
`;

//*******//*******//

const AppFormPage = () => {

    const [trips, setTrips] = useState([])

    useEffect (() => {
        axios.get(`${BASE_URL}/trips`)
        .then((response) => {
            setTrips(response.data.trips)
        })
    }, [])

    const [form, onChangeInput] = useForm({
        name: "",
        age: null,
        applicationText: "",
        profession: "",
        country: "",
        trip: null
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
            trip: form.trip
        }

        axios.post(`${BASE_URL}/trips/${form.trip.id}/apply`, body)
    }

    return (
        <AppFormPageContainer>
            <h1>Increva-se em uma viagem</h1>

            <Form onSubmit={onSubmitForm}>
                <Input 
                    value={form["name"]}
                    placeholder={"Nome do candidato(a)"}
                    onChange={onChangeInput}
                    name={"name"}
                    required
                />
                <Input 
                    value={form["age"]}
                    placeholder={"Idade"}
                    onChange={onChangeInput}
                    name={"age"}
                    type={"number"}
                    required
                />
                <Input 
                    value={form["applicationText"]}
                    placeholder={"Informe porque quer se candidatar"}
                    onChange={onChangeInput}
                    name={"applicationText"}
                    required
                />
                <Input 
                    value={form["profession"]}
                    placeholder={"Profissão"}
                    onChange={onChangeInput}
                    name={"profession"}
                    required
                />
                <Input 
                    value={form["country"]}
                    placeholder={"País de origem"}
                    onChange={onChangeInput}
                    name={"country"}
                    required
                />

                <Select
                    value={form["trip"]}
                    placeholder={"Escolha uma viagem"}
                    onChange={onChangeInput}
                    name={"trip"}
                />

                <Button>CANDIDATAR</Button>
            </Form>
        </AppFormPageContainer>
    )
}

export default AppFormPage;