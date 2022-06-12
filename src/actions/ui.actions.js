import { types } from "../types/types";

export const uiOpenModalCreateAction = () => ({
    type: types.uiOpenModalCreate,
});

export const uiCloseModalCreateAction = () => ({
    type: types.uiCloseModalCreate,
});

export const uiOpenModalEditAction = () => ({
    type: types.uiOpenModalEdit,
});

export const uiCloseModalEditAction = () => ({
    type: types.uiCloseModalEdit,
});

export const uiOpenModalCursoAction = () => ({
    type: types.uiOpenCursoModal,
});

export const uiCloseModalCursoAction = () => ({
    type: types.uiCloseCursoModal,
});

export const uiEditingCursoAction = () => ({
    type: types.uiEditingCurso,
});

export const uiCreatingCursoAction = () => ({
    type: types.uiCreatingCurso,
});
