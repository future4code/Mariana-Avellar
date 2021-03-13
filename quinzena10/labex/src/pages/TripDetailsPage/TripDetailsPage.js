import axios from "axios";
import {React, useEffect, useState } from "react";
import {BASE_URL, header} from "../../components/Requests"

const TripDetailsPage = () => {
    const [tripDetails, setTripDetails] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token")

        axios.get(BASE_URL + "/trip/MYiInrB0riEIe14brAd9", header(token))
        .then((response) =>{
            setTripDetails(response.data.trip);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <h1>Trip Details Page</h1>
            <p>date = {tripDetails.date}</p>
            <p>name = {tripDetails.name}</p>
            <p>planet = {tripDetails.planet}</p>
        </div>
    )
}

export default TripDetailsPage;