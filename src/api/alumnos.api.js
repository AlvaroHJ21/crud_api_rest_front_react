//GET Alumnos
export const getAlumnos = async () => {
    try {
        const resp = await fetch("http://127.0.0.1:8080/api/alumnos");
        const data = await resp.json();
        return data;
    } catch (error) {
        // console.log(error);
        throw error;
    }
};

//DELETE Alumno
export const deleteAlumno = async (id) => {
    try {
        const resp = await fetch("http://127.0.0.1:8080/api/alumnos/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return resp;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

//POST Alumno
export const postAlumno = async (alumno) => {
    const { codalu, nomalu, apealu, edad } = alumno;
    try {
        const resp = await fetch("http://127.0.0.1:8080/api/alumnos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                codalu,
                nomalu,
                apealu,
                edad,
            }),
        });
        console.log("resp: " + resp);
        const data = await resp.json();
        console.log("data: " + data);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

//PUT Alumno
export const putAlumno = async (alumno) => {
    console.log("alumno: ");
    console.log(alumno)
    const { id, codalu, nomalu, apealu, edad } = alumno;
    try {
        const resp = await fetch("http://127.0.0.1:8080/api/alumnos/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                codalu,
                nomalu,
                apealu,
                edad,
            }),
        });

        return resp;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
