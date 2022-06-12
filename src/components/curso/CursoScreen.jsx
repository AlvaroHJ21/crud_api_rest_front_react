import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setActiveCursoAction,
    startDeleteCursoAction,
} from "../../actions/cursos.action";
import {
    uiCreatingCursoAction,
    uiEditingCursoAction,
    uiOpenModalCursoAction,
} from "../../actions/ui.actions";
import { CursoModal } from "./CursoModal";
// import { useNavigate } from "react-router-dom";

export const CursoScreen = () => {
    const { cursos } = useSelector((state) => state.cursos);

    const dispatch = useDispatch();

    // const navigate = useNavigate()

    const handleCreate = () => {
        dispatch(uiCreatingCursoAction());
        dispatch(uiOpenModalCursoAction());
    };

    const handleEditCurso = (curso) => {
        console.log(curso);
        dispatch(setActiveCursoAction(curso));
        dispatch(uiEditingCursoAction());
        dispatch(uiOpenModalCursoAction());
    };

    const handleDeleteCurso = (id) => {
        dispatch(startDeleteCursoAction(id));
    };

    return (
        <>
            <div className="container mt-2">
                <div className="d-flex bd-highlight mb-3">
                    <div className="me-auto p-2 bd-highlight">
                        <h2>Cursos</h2>
                    </div>
                    <div className="p-2 bd-highlight">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#userCreateModal"
                            onClick={handleCreate}
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
                                <th scope="col">Creditos</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cursos.map((curso, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{curso.codcur}</td>
                                    <td>{curso.nomcur}</td>
                                    <td>{curso.creditos}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#userUpdateModal"
                                            onClick={() => {
                                                // handleEditcurso(curso);
                                                handleEditCurso(curso);
                                            }}
                                        >
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger ms-2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#userDeleteModal"
                                            onClick={
                                                () => {
                                                    handleDeleteCurso(curso.id);
                                                }
                                                // handleDeletecurso(curso.id)
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

            <CursoModal />
        </>
    );
};
