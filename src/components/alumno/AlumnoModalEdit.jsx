import React, { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { startUpdateAlumnoAction } from "../../actions/alumnos.action";
import { uiCloseModalEditAction } from "../../actions/ui.actions";
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

export const AlumnoModalEdit = () => {
    const { active } = useSelector((state) => state.alumnos);

    const dispatch = useDispatch();

    const [values, handleInputChange, setValuesForm] = useForm({
        codalu: "",
        nomalu: "",
        apealu: "",
        edad: 0,
    });

    const { codalu, nomalu, apealu, edad } = values;

    const { isOpenModalEdit } = useSelector((state) => state.ui);

    useEffect(() => {
        if (active) {
            setValuesForm(active);
        }
    }, [active]);

    const closeModal = () => {
        dispatch(uiCloseModalEditAction());
    };

    const handleEditAlumno = (e) => {
        e.preventDefault();
        values.id = active.id;
        dispatch(startUpdateAlumnoAction(values));
    };

    return (
        <Modal
            isOpen={isOpenModalEdit}
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
                        Editar alumno
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={closeModal}
                    ></button>
                </div>
                <form onSubmit={handleEditAlumno}>
                    <div className="modal-body">
                        <div className="input-group">
                            <input
                                type="text"
                                className="input-area"
                                required
                                id="codalu"
                                name="codalu"
                                value={codalu}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="codalu" className="label">
                                Código
                            </label>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                className="input-area"
                                required
                                id="nomalu"
                                name="nomalu"
                                value={nomalu}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="nomalu" className="label">
                                Nombre
                            </label>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                className="input-area"
                                required
                                id="apealu"
                                name="apealu"
                                value={apealu}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="apealu" className="label">
                                Apellido
                            </label>
                        </div>
                        <div className="input-group">
                            <input
                                type="number"
                                className="input-area"
                                required
                                id="edad"
                                name="edad"
                                value={edad}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="edad" className="label">
                                Edad
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
