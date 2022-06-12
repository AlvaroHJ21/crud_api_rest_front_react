import Swal from "sweetalert2";
import { loginUser } from "../api/auth.api";
import { types } from "../types/types";

export const startLoginUsernamePassword = (username, password) => {
    return (dispatch) => {
        loginUser(username, password)
            .then((user) => {
                console.log(user);
                //guardar en el localStorage el usuario
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        logged: true,
                        user,
                    })
                );
                // console.log("validado!");
                dispatch(loginAction(user));
                //mensaje temporal swal

                // Swal.fire("Bienvenido", `${username}`, "success");
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Usuario o contraseña incorrectos",
                });
            });
    };
};

export const startLogoutAction = () => {
    return (dispatch) => {
        //borrar el usuario del localStorage
        localStorage.removeItem("user");
        dispatch(logoutAction());
    };
};

export const loginAction = (user) => ({
    type: types.login,
    payload: user,
});

export const logoutAction = () => ({
    type: types.logout,
});
