import Swal from "sweetalert2";
import {
    deleteAlumno,
    getAlumnos,
    postAlumno,
    putAlumno,
} from "../api/alumnos.api";
import { types } from "../types/types";
import { uiCloseModalEditAction } from "./ui.actions";

//CARGAR ALUMNOS
export const startLoadAlumnosAction = () => {
    return async (dispatch) => {
        const alumnos = await getAlumnos();
        // console.log(alumnos);
        dispatch(setAlumnosAction(alumnos));
    };
};
export const setAlumnosAction = (alumnos) => ({
    type: types.alumnosLoad,
    payload: alumnos,
});

//AGREGAR ALUMNO
export const startAddAlumnoAction = (alumno) => {
    return async (dispatch) => {
        const id = await postAlumno(alumno);
        alumno.id = id;
        dispatch(addAlumnoAction(alumno));
        Swal.fire(
            "Alumno agregado",
            `${alumno.nomalu} ${alumno.apealu}`,
            "success"
        );
    };
};
export const addAlumnoAction = (alumno) => ({
    type: types.alumnosAdd,
    payload: alumno,
});

//ELIMINAR ALUMNO
export const startDeleteAlumnoAction = (id) => {
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
            await deleteAlumno(id);
            dispatch(deleteAlumnoAction(id));
        }
    };
};
export const deleteAlumnoAction = (id) => ({
    type: types.alumnosDelete,
    payload: id,
});

//ACTUALIZAR ALUMNO
export const startUpdateAlumnoAction = (alumno) => {
    return async (dispatch) => {
        await putAlumno(alumno);
        dispatch(updateAlumnoAction(alumno));
        Swal.fire(
            "Alumno actualizado",
            `${alumno.nomalu} ${alumno.apealu}`,
            "success"
        );
        dispatch(uiCloseModalEditAction());
    };
};
export const updateAlumnoAction = (alumno) => ({
    type: types.alumnosUpdate,
    payload: alumno,
});

export const setActiveAlumnoAction = (alumno) => ({
    type: types.alumnosSetActive,
    payload: alumno,
});
