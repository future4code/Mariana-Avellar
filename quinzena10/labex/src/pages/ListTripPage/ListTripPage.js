import React, {useState, useEffect} from "react";
import axios from "axios";
import {BASE_URL} from "../../components/Requests";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToCreateTripPage, goToTripDetailsPage } from "../../Routes/Coordinator";
import { useHistory } from "react-router-dom";

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
        <div>
            <h1>Lista de Viagens</h1>
            
            <li>{tripList}</li>

            <button onClick={()=>goToCreateTripPage(history)}>CRIAR VIAGEM</button>
            <button onClick={()=>goToTripDetailsPage(history)}>DETALHES DA VIAGEM</button>
        </div>
    )
}

export default ListTripPage;