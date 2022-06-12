import Swal from "sweetalert2";
import {
    deleteCurso,
    getCursos,
    postCurso,
    putCurso,
} from "../api/cursos.api";
import { types } from "../types/types";
import { uiCloseModalCursoAction } from "./ui.actions";

//CARGAR Cursos
export const startLoadCursosAction = () => {
    return async (dispatch) => {
        const cursos = await getCursos();
        // console.log(Cursos);
        dispatch(setCursosAction(cursos));
    };
};
export const setCursosAction = (cursos) => ({
    type: types.cursosLoad,
    payload: cursos,
});

//AGREGAR Curso
export const startAddCursoAction = (curso) => {
    return async (dispatch) => {
        const id = await postCurso(curso);
        curso.id = id;
        dispatch(addCursoAction(curso));
        Swal.fire(
            "curso agregado",
            `${curso.codcur} ${curso.nomcur}`,
            "success"
        );
        dispatch(uiCloseModalCursoAction());
    };
};
export const addCursoAction = (curso) => ({
    type: types.cursosAdd,
    payload: curso,
});

//ELIMINAR Curso
export const startDeleteCursoAction = (id) => {
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
            await deleteCurso(id);
            dispatch(deleteCursoAction(id));
        }
    };
};
export const deleteCursoAction = (id) => ({
    type: types.cursosDelete,
    payload: id,
});

//ACTUALIZAR Curso
export const startUpdateCursoAction = (curso) => {
    return async (dispatch) => {
        await putCurso(curso);
        dispatch(updateCursoAction(curso));
        Swal.fire(
            "Curso actualizado",
            `${curso.nomalu} ${curso.apealu}`,
            "success"
        );
        dispatch(uiCloseModalCursoAction());
    };
};
export const updateCursoAction = (curso) => ({
    type: types.cursosUpdate,
    payload: curso,
});

export const setActiveCursoAction = (curso) => ({
    type: types.cursosSetActive,
    payload: curso,
});
