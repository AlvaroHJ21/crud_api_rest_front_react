import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AlumnoScreen } from "../components/alumno/AlumnoScreen";
import { CursoScreen } from "../components/curso/CursoScreen";
import { Navbar } from "../components/shared/NavBar";
import { startLoadAlumnosAction } from "../actions/alumnos.action";
import { startLoadCursosAction } from "../actions/cursos.action";
import { MatriculaScreen } from "../components/matricula/MatriculaScreen";
import { startLoadMatriculasAction } from "../actions/matriculas.action";

export const DashboardRoute = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadAlumnosAction());
        dispatch(startLoadCursosAction());
        dispatch(startLoadMatriculasAction());
    }, []);

    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/alumnos" element={<AlumnoScreen />} />
                    <Route path="/cursos" element={<CursoScreen />} />
                    <Route path="/matricula" element={<MatriculaScreen />} />
                </Routes>
            </div>
        </>
    );
};
