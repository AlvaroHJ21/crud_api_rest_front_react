import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
    startAddCursoAction,
    startUpdateCursoAction,
} from "../../actions/cursos.action";
import { uiCloseModalCursoAction } from "../../actions/ui.actions";
import { useForm } from "../../hook/useForm";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

export const CursoModal = () => {
    const [title, setTitle] = useState("Crear Curso");

    const [values, handleInputChange, setValuesForm] = useForm({
        codcur: "",
        nomcur: "",
        creditos: 0,
    });

    const { codcur, nomcur, creditos } = values;

    const { isOpenModalCurso, isEditingCurso } = useSelector(
        (state) => state.ui
    );

    const { active } = useSelector((state) => state.cursos);

    useEffect(() => {
        if (isEditingCurso) {
            setTitle("Editar Curso");
            setValuesForm(active);
        } else {
            setTitle("Crear Curso");
        }
    }, [isEditingCurso, active]);

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(uiCloseModalCursoAction());
    };

    const handleCreateCurso = (e) => {
        e.preventDefault();
        if (isEditingCurso) {
            values.id = active.id;
            dispatch(startUpdateCursoAction(values));
        } else {
            dispatch(startAddCursoAction(values));
        }
    };

    return (
        <Modal
            isOpen={isOpenModalCurso}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            // contentLabel="Example Modal"
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        {title}
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={closeModal}
                    ></button>
                </div>
                <form onSubmit={handleCreateCurso}>
                    <div className="modal-body">
                        <div className="input-group">
                            <input
                                type="text"
                                className="input-area"
                                required
                                id="codcur"
                                name="codcur"
                                value={codcur}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="codcur" className="label">
                                Código
                            </label>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                className="input-area"
                                required
                                id="nomcur"
                                name="nomcur"
                                value={nomcur}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="nomcur" className="label">
                                Nombre
                            </label>
                        </div>
                        <div className="input-group">
                            <input
                                type="number"
                                className="input-area"
                                required
                                id="creditos"
                                name="creditos"
                                value={creditos}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="creditos" className="label">
                                Creditos
                            </label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={closeModal}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            id="btnGuardar"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};
