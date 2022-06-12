import { types } from "../types/types";

const initialState = {
    isOpenModalCreate: false,
    isOpenModalEdit: false,
    isOpenModalCurso: false,
    isEditingCurso: false,
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiOpenModalCreate:
            return {
                ...state,
                isOpenModalCreate: true,
            };
        case types.uiCloseModalCreate:
            return {
                ...state,
                isOpenModalCreate: false,
            };
        case types.uiOpenModalEdit:
            return {
                ...state,
                isOpenModalEdit: true,
            };
        case types.uiCloseModalEdit:
            return {
                ...state,
                isOpenModalEdit: false,
            };
        case types.uiOpenCursoModal:
            return {
                ...state,
                isOpenModalCurso: true,
            };
        case types.uiCloseCursoModal:
            return {
                ...state,
                isOpenModalCurso: false,
            };
        case types.uiEditingCurso:
            return {
                ...state,
                isEditingCurso: true,
            };
        case types.uiCreatingCurso:
            return {
                ...state,
                isEditingCurso: false,
            };
        default:
            return state;
    }
};
