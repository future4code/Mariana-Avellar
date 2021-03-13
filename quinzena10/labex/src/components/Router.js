import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AppFormPage from "../pages/AppFormPage/AppFormPage";
import ListTripPage from "../pages/ListTripPage/ListTripPage";
import LoginPage from "../pages/LoginPage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import ErrorPage from "../pages/ErrorPage";



const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/home">
                    <HomePage/>
                </Route>
                <Route exact path="/subscribe">
                    <AppFormPage/>
                </Route>
                <Route exact path="/trips">
                    <ListTripPage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/create-trips">
                    <CreateTripPage/>
                </Route>
                <Route exact path="/trip-details">
                    <TripDetailsPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}