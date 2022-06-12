import { useState } from "react";

export const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({ ...values, [target.name]: target.value });
    };

    const reset = () => {
        setValues(initialState);
    };

    const setValuesForm = (data) => {
        setValues(data);
    };

    return [values, handleInputChange, setValuesForm, reset];
};
