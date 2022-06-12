//POST Login
export const loginUser = async (username, password) => {
    try {
        const resp = await fetch("http://127.0.0.1:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
        const data = await resp.json();
        
        if (resp.ok) {
            return data;
        }else{
            throw new Error(data.message);
        }
    } catch (error) {
        throw error;
    }
};