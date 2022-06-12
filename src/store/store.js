import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { authReducer } from "../reducers/auth.reducer";
import { alumnosReducer } from "../reducers/alumnos.reducer";
import { cursosReducer } from "../reducers/cursos.reducer";
import { matriculasReducer } from "../reducers/matriculas.reducer";
import { uiReducer } from "../reducers/ui.reducer";

// import { notesReducers } from "../reducers/notes.reducers";
// import { uiReducer } from "../reducers/ui.reducersr";

/**
 * Constante que nos permite tener la configuracion de redux dev tools y
 * poder aplicar middlewares
 */
const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

/**
 * createStore: crea el store
 * ombineReducers: combina varios reducer para
 * que el createStore reciba solo uno
 */

const reducers = combineReducers({
    auth: authReducer,
    alumnos: alumnosReducer,
    cursos: cursosReducer,
    matriculas: matriculasReducer,
    ui: uiReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        /**
         * Aplicamos el middleware thunks para disparar
         * acciones asincronas
         */
        applyMiddleware(thunk)
    )
);
