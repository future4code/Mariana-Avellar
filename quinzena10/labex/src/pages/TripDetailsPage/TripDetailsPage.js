import axios from "axios";
import {React, useEffect, useState } from "react";
import {BASE_URL} from "../../components/Requests";
import {header} from "../../components/Requests";
import useProtectedPage from "../../hooks/useProtectedPage";

const TripDetailsPage = () => {
    const [tripDetail, setTripDetail] = useState({});
    useProtectedPage()

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get(BASE_URL + "/trip/MYiInrB0riEIe14brAd9", header(token))
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
            <button>Criar viagem</button>
        </div>
    )
}


export default TripDetailsPage;