import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    startAddMatriculaAction,
    startDeleteMatriculaAction,
} from "../../actions/matriculas.action";
import { useForm } from "../../hook/useForm";

export const MatriculaScreen = () => {
    const { alumnos } = useSelector((state) => state.alumnos);
    const { cursos } = useSelector((state) => state.cursos);
    const { matriculas } = useSelector((state) => state.matriculas);

    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        codalu: "",
        codcur: "",
        nota: 0,
    });

    const { codalu, codcur, nota } = values;

    const handleSubmitForm = (e) => {
        e.preventDefault();
        //seleccionar alumno por codigo
        const alumno = alumnos.find((alumno) => alumno.codalu === codalu);
        const curso = cursos.find((curso) => curso.codcur === codcur);
        if (!alumno || !curso) {
            return;
        }
        const matricula = {
            id_alu: alumno.id,
            id_cur: curso.id,
            nota,
        };
        dispatch(startAddMatriculaAction(matricula));
    };

    const handleDelete = (id) => {
        dispatch(startDeleteMatriculaAction(id));
    };

    return (
        <div className="container mt-2">
            <div className="d-flex bd-highlight mb-3">
                <div className="me-auto p-2 bd-highlight">
                    <h2>Matriculas</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-8">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">N°</th>
                                    <th scope="col">Codigo</th>
                                    <th scope="col">Alumno</th>
                                    <th scope="col">Curso</th>
                                    <th scope="col">Nota</th>
                                    <th scope="col">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matriculas.map((matricula, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{matricula.codalu}</td>
                                        <td>{matricula.nomalu}</td>
                                        <td>{matricula.nomcur}</td>
                                        <td>{matricula.nota}</td>
                                        <td>
                                            {/* <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#userUpdateModal"
                                                onClick={() => {
                                                    // handleEditCurso(curso);
                                                }}
                                            >
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button> */}
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger ms-2"
                                                data-bs-toggle="modal"
                                                data-bs-target="#userDeleteModal"
                                                onClick={() => {
                                                    handleDelete(
                                                        matricula.id[0]
                                                    );
                                                }}
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
                <div className="col-4">
                    <h2 className="mb-3">Nuevo registro</h2>
                    <form onSubmit={handleSubmitForm}>
                        <div className="form-group mb-3">
                            <label htmlFor="alumno" className="form-label">
                                Alumno
                            </label>
                            <input
                                id="alumno"
                                list="alumnos"
                                className="form-control"
                                name="codalu"
                                value={codalu}
                                onChange={handleInputChange}
                            />
                            <datalist id="alumnos">
                                {alumnos.map((alumno, index) => (
                                    <option key={index} value={alumno.codalu}>
                                        {alumno.nomalu} {alumno.apealu}
                                    </option>
                                ))}
                            </datalist>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="curso" className="form-label">
                                Curso
                            </label>
                            <input
                                id="curso"
                                list="cursos"
                                className="form-control"
                                name="codcur"
                                value={codcur}
                                onChange={handleInputChange}
                            />
                            <datalist id="cursos">
                                {cursos.map((curso, index) => (
                                    <option key={index} value={curso.codcur}>
                                        {curso.nomcur}
                                    </option>
                                ))}
                            </datalist>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="nota" className="form-label">
                                Nota
                            </label>
                            <input
                                id="nota"
                                type="number"
                                className="form-control"
                                name="nota"
                                value={nota}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            id="btnGuardar"
                        >
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
