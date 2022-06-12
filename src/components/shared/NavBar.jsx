import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { startLogoutAction } from "../../actions/auth.action";
// import { AuthContext } from "../../auth/authContext";
// import { types } from "../../types/types";

export const Navbar = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { logged, user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(startLogoutAction());
    };

    useEffect(() => {
        if (!logged) {
            console.log("navegandoooo");
            navigate("/login", { replace: true });
        }
    }, [logged]);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    UNMSM
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink
                            // activeClassName="active"
                            className="nav-item nav-link"
                            // exact
                            to="/alumnos"
                        >
                            Alumnos
                        </NavLink>

                        <NavLink
                            // activeClassName="active"
                            className="nav-item nav-link"
                            // exact
                            to="/cursos"
                        >
                            Cursos
                        </NavLink>

                        <NavLink
                            // activeClassName="active"
                            className="nav-item nav-link"
                            // exact
                            to="/matricula"
                        >
                            Matricula
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex">
                    <ul className="navbar-nav ms-auto">
                        <span className="nav-item nav-link text-info me-2">
                            {user.name}
                        </span>

                        <button
                            className="nav-item nav-link btn"
                            onClick={handleLogout}
                        >
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
