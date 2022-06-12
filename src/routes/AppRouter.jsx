import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loginAction } from "../actions/auth.action";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoute } from "./DashboardRoute";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        //leer el usuario del localStorage
        const auth = JSON.parse(localStorage.getItem("user"));
        //si existe el usuario, guardarlo en el state
        if (auth) {
            // console.log("sesion recuperada");
            dispatch(loginAction(auth.user));
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas publicas */}
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                    }
                />
                {/* Rutas privadas */}
                <Route
                    path="/*"
                    element={
                        <PrivateRoute>
                            <DashboardRoute />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
