import axios from "axios";
import {React, useEffect, useState } from "react";
import {BASE_URL} from "../../components/Requests";
import {header} from "../../components/Requests";
import useProtectedPage from "../../hooks/useProtectedPage";
import {useHistory, useParams} from "react-router-dom";
import styled from "styled-components";

//******** ESTILIZAÇÃO *********//

const TripDetailContainer = styled.div`
    width: 100%;
    height: 100vw;
    text-align: center;
`;

const TripDetails = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    border: 1px solid purple;
    background-color: whitesmoke;
`;

//******** // *********//

const TripDetailsPage = () => {
    const [tripDetail, setTripDetail] = useState({});
    const history = useHistory();
    const params = useParams();

    useProtectedPage()

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get(BASE_URL + "/trip/SVOoy1HzwXkfihCTfjcj", header(token))
        .then((response) => {
            setTripDetail(response.data.trip)
        });
    }, [])
     
    return (
        <TripDetailContainer>
            <h1>Detalhes da viagem</h1>
            
            <TripDetails>
                <p>Data: {tripDetail.date}</p>
                <p>Nome: {tripDetail.name}</p>
                <p>Planeta: {tripDetail.planet}</p>
                <p>Descrição: {tripDetail.description}</p>
                <p>Duração: {tripDetail.durationInDays} dias</p>
            </TripDetails>
        </TripDetailContainer>
    )
}


export default TripDetailsPage;