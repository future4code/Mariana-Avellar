import React, {useState, useEffect} from "react";
import axios from "axios";
import {BASE_URL} from "../../components/Requests";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToCreateTripPage, goToTripDetailsPage } from "../../Routes/Coordinator";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

//******** ESTILIZAÇÃO *********//

const ListTripContainer = styled.div`
    width: 100%;
    text-align: center;
    margin: 80px 0px;
`;

const Button = styled.button`
    width: 40%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: whitesmoke;
    color: purple;
`;

//******** // *********//

const ListTripPage = () => {
    const [trips, setTrips] = useState([])
    const history = useHistory();

    useEffect (() => {
        axios.get(`${BASE_URL}/trips`)
        .then((response) => {
            setTrips(response.data.trips)
        })
    }, [])

    useProtectedPage();

    const tripList = () => {
        trips.map((trip) => {
            return <div>
                <li key={trip.id}>{trip.name}</li>
            </div>
        })
    }

    return (
        <ListTripContainer>
            <h1>Lista de Viagens</h1>
            
            <li>{tripList}</li>

            <Button onClick={()=>goToCreateTripPage(history)}>CRIAR VIAGEM</Button>
            <Button onClick={()=>goToTripDetailsPage(history)}>DETALHES DA VIAGEM</Button>
        </ListTripContainer>
    )
}

export default ListTripPage;