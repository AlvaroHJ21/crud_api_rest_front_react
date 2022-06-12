//GET Matriculas
export const getMatriculas = async () => {
    try {
        const resp = await fetch("http://127.0.0.1:8080/api/matriculas");
        const data = await resp.json();
        return data;
    } catch (error) {
        // console.log(error);
        throw error;
    }
};

//DELETE Matricula
export const deleteMatricula = async (id) => {
    try {
        const resp = await fetch("http://127.0.0.1:8080/api/matriculas/" + id, {
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

//POST Matricula
export const postMatricula = async (matricula) => {
    const { id_cur, id_alu, nota } = matricula;
    try {
        const resp = await fetch("http://127.0.0.1:8080/api/matriculas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_cur,
                id_alu,
                nota,
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

//PUT Matricula
export const putMatricula = async (matricula) => {
    const { id, id_cur, id_alu, nota } = matricula;
    try {
        const resp = await fetch("http://127.0.0.1:8080/api/matriculas/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_cur,
                id_alu,
                nota,
            }),
        });

        return resp;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
