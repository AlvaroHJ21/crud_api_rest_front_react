import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlumnoModalCreate } from "./AlumnoModalCreate";
import {
    setActiveAlumnoAction,
    startDeleteAlumnoAction,
} from "../../actions/alumnos.action";
import { uiOpenModalCreateAction, uiOpenModalEditAction } from "../../actions/ui.actions";
import { AlumnoModalEdit } from "./AlumnoModalEdit";

export const AlumnoScreen = () => {
    const { alumnos } = useSelector((state) => state.alumnos);

    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(uiOpenModalCreateAction());
    };

    const handleDeleteAlumno = (id) => {
        dispatch(startDeleteAlumnoAction(id));
    };

    const handleEditAlumno = (alumno) => {
        dispatch(setActiveAlumnoAction(alumno));
        dispatch(uiOpenModalEditAction());
    };

    return (
        <>
            <div className="container mt-2">
                <div className="d-flex bd-highlight mb-3">
                    <div className="me-auto p-2 bd-highlight">
                        <h2>Alumnos</h2>
                    </div>
                    <div className="p-2 bd-highlight">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#userCreateModal"
                            onClick={openModal}
                        >
                            <i className="fa-solid fa-user-plus"></i> Crear
                        </button>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">N°</th>
                                <th scope="col">Codigo</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Edad</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumnos.map((alumno, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{alumno.codalu}</td>
                                    <td>{alumno.nomalu}</td>
                                    <td>{alumno.apealu}</td>
                                    <td>{alumno.edad}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#userUpdateModal"
                                            onClick={() => {
                                                handleEditAlumno(alumno);
                                            }}
                                        >
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger ms-2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#userDeleteModal"
                                            onClick={() =>
                                                handleDeleteAlumno(alumno.id)
                                            }
                                        >
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <AlumnoModalCreate />
            <AlumnoModalEdit />
        </>
    );
};
