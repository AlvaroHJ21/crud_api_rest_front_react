import React from "react";
import Modal from "react-modal/lib/components/Modal";
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

export const AlumnoModal = ({
    isOpen, 
    setIsOpen,
    initialValues,
    labelBtnSave,
    handleBtnSave,
    titleModal,
}) => {
    const [values, handleInputChange] = useForm(initialValues);

    const { codalu, nomalu, apealu, edad } = values;

    const closeModal = () => {
        console.log("closing...");
        setIsOpen(false);
    };

    return (
        <Modal
            isOpen={isOpen}
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
                        {titleModal}
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={closeModal}
                    ></button>
                </div>
                <div className="modal-body">
                    <form>
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
                    </form>
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
                        type="button"
                        className="btn btn-primary"
                        id="btnGuardar"
                        onClick={handleBtnSave}
                    >
                        {labelBtnSave}
                    </button>
                </div>
            </div>
        </Modal>
    );
};
