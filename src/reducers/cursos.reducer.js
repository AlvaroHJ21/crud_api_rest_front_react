import { types } from "../types/types";

const initialState = {
    cursos: [],
    active: null,
};

export const cursosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.cursosLoad:
            return {
                ...state,
                cursos: [...action.payload],
            };
        case types.cursosAdd:
            return {
                ...state,
                cursos: [...state.cursos, action.payload],
            };
        case types.cursosDelete:
            return {
                ...state,
                cursos: state.cursos.filter(
                    (curso) => curso.id !== action.payload
                ),
            };
        case types.cursosSetActive:
            return {
                ...state,
                active: action.payload,
            };
        case types.cursosUpdate:
            return {
                ...state,
                cursos: state.cursos.map((curso) =>
                    curso.id === action.payload.id
                        ? (curso = action.payload)
                        : curso
                ),
            };

        default:
            return state;
    }
};
