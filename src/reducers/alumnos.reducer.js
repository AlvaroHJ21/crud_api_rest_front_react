import { types } from "../types/types";

const initialState = {
    alumnos: [],
    active: null,
};

export const alumnosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.alumnosLoad:
            return {
                ...state,
                alumnos: [...action.payload],
            };
        case types.alumnosAdd:
            return {
                ...state,
                alumnos: [...state.alumnos, action.payload],
            };
        case types.alumnosDelete:
            return {
                ...state,
                alumnos: state.alumnos.filter(
                    (alumno) => alumno.id !== action.payload
                ),
            };
        case types.alumnosSetActive:
            return {
                ...state,
                active: action.payload,
            };
        case types.alumnosUpdate:
            return {
                ...state,
                alumnos: state.alumnos.map((alumno) =>
                    alumno.id === action.payload.id
                        ? (alumno = action.payload)
                        : alumno
                ),
            };

        default:
            return state;
    }
};
