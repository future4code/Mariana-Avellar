import axios from "axios";
import {React, useEffect, useState } from "react";
import {BASE_URL} from "../../components/Requests";
import {header} from "../../components/Requests";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToCreateTripPage } from "../../Routes/Coordinator";
import {useHistory} from "react-router-dom";

const TripDetailsPage = () => {
    const [tripDetail, setTripDetail] = useState({});
    const history = useHistory();

    useProtectedPage()

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get(BASE_URL + "/trip/SVOoy1HzwXkfihCTfjcj", header(token))
        .then((response) => {
            setTripDetail(response.data.trip)
        });
    }, [])
     
    return (
        <div>
            <h1>Trip Details Page</h1>
            
            <div key={tripDetail.id}>Data = {tripDetail.date}</div>
            <div key={tripDetail.id}>Nome = {tripDetail.name}</div>
            <div key={tripDetail.id}>Planeta = {tripDetail.planet}</div>
            <div key={tripDetail.id}>Descrição = {tripDetail.description}</div>
            <div key={tripDetail.id}>Duração = {tripDetail.durationInDays} dias</div>
            <button onClick={()=>goToCreateTripPage(history)}>CRIAR VIAGEM</button>
        </div>
    )
}


export default TripDetailsPage;