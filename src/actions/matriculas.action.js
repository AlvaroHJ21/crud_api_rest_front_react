import Swal from "sweetalert2";
import {
    deleteMatricula,
    getMatriculas,
    postMatricula,
} from "../api/matriculas.api";
import { types } from "../types/types";

//CARGAR Matriculas
export const startLoadMatriculasAction = () => {
    return async (dispatch) => {
        const matriculas = await getMatriculas();
        // console.log(Matriculas);
        dispatch(setMatriculasAction(matriculas));
    };
};
export const setMatriculasAction = (matriculas) => ({
    type: types.matriculasLoad,
    payload: matriculas,
});

//AGREGAR Matricula
export const startAddMatriculaAction = (matricula) => {
    return async (dispatch) => {
        const id = await postMatricula(matricula);
        matricula.id = id;
        dispatch(addMatriculaAction(matricula));
        dispatch(startLoadMatriculasAction());
        Swal.fire(
            "Matricula agregada",
            ``,
            "success"
        );
    };
};
export const addMatriculaAction = (matriculas) => ({
    type: types.matriculasAdd,
    payload: matriculas,
});

//ELIMINAR Matricula
export const startDeleteMatriculaAction = (id) => {
    return async (dispatch) => {
        //confirmar eliminacion
        const { value } = await Swal.fire({
            title: "¿Estás seguro?",
            text: "Una vez eliminado, no podrás recuperar este registro",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!",
            cancelButtonText: "Cancelar",
        });
        if (value) {
            await deleteMatricula(id);
            dispatch(deleteMatriculaAction(id));
        }
    };
};
export const deleteMatriculaAction = (id) => ({
    type: types.matriculasDelete,
    payload: id,
});
