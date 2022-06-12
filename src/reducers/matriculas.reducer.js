import { types } from "../types/types";

const initialState = {
    matriculas: [],
    active: null,
};

export const matriculasReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.matriculasLoad:
            return {
                ...state,
                matriculas: [...action.payload],
            };
        case types.matriculasAdd:
            return {
                ...state,
                matriculas: [...state.matriculas, action.payload],
            };
        case types.matriculasDelete:
            return {
                ...state,
                matriculas: state.matriculas.filter(
                    (matricula) => matricula.id[0] !== action.payload
                ),
            };

        default:
            return state;
    }
};
