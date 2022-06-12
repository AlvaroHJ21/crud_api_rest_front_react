import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import { startLoginUsernamePassword } from "../../actions/auth.action";

export const LoginScreen = () => {
    const [values, handleInputChange] = useForm({
        username: "",
        password: "",
    });

    const { username, password } = values;

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { logged } = useSelector((state) => state.auth);

    useEffect(() => {
        if (logged) {
            // console.log("navegandoooo")
            navigate("/alumnos", { replace: true });
        }
    }, [logged]);

    const handleLogin = (e) => {
        e.preventDefault();

        //Validar el usuario y contraseña
        // console.log("validando...");
        dispatch(startLoginUsernamePassword(username, password));
    };

    return (
        <section
            className="vh-100 background-gradient"
            style={{ backgroundColor: "#508bfc" }}
        >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div
                            className="card shadow-2-strong"
                            style={{ borderRadius: "1rem" }}
                        >
                            <div className="card-body p-5 text-center">
                                <h3 className="mb-5">Sign in</h3>

                                <form onSubmit={handleLogin}>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="input-area"
                                            required
                                            name="username"
                                            value={username}
                                            onChange={handleInputChange}
                                        />
                                        <label
                                            htmlFor="codalu"
                                            className="label"
                                        >
                                            Usuario
                                        </label>
                                    </div>
                                    <div className="input-group">
                                        <input
                                            type="password"
                                            className="input-area"
                                            required
                                            name="password"
                                            value={password}
                                            onChange={handleInputChange}
                                        />
                                        <label
                                            htmlFor="codalu"
                                            className="label"
                                        >
                                            Contraseña
                                        </label>
                                    </div>
                                    <button
                                        className="btn btn-primary btn-lg btn-block"
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* https://mdbootstrap.com/docs/standard/extended/login/ */}
        </section>
    );
};
