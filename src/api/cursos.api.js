//GET Cursos
export const getCursos = async () => {
    try {
        const resp = await fetch("http://127.0.0.1:8080/api/cursos");
        const data = await resp.json();
        return data;
    } catch (error) {
        // console.log(error);
        throw error;
    }
};

//DELETE Curso
export const deleteCurso = async (id) => {
    try {
        const resp = await fetch("http://127.0.0.1:8080/api/cursos/" + id, {
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

//POST Curso
export const postCurso = async (curso) => {
    const { codcur, nomcur, creditos } = curso;
    try {
        const resp = await fetch("http://127.0.0.1:8080/api/cursos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                codcur,
                nomcur,
                creditos,
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

//PUT Curso
export const putCurso = async (curso) => {
    const { id, codcur, nomcur, creditos } = curso;
    try {
        const resp = await fetch("http://127.0.0.1:8080/api/cursos/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                codcur,
                nomcur,
                creditos,
            }),
        });

        return resp;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
