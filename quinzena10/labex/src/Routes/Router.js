import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AppFormPage from "../pages/AppFormPage/AppFormPage";
import ListTripPage from "../pages/ListTripPage/ListTripPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Navigation from "../components/Navigation";



export default function Router() {
    return(
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/subscribe">
                    <AppFormPage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/trips/list">
                    <ListTripPage/>
                </Route>
                <Route exact path="/trips/create">
                    <CreateTripPage/>
                </Route>
                <Route exact path="/trips/details">
                    <TripDetailsPage/>
                </Route>
                <Route exact path="/error404">
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}