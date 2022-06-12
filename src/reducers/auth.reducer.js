import { types } from "../types/types";

const initialState = {};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                user: action.payload,
                logged: true,
            };
        case types.logout:
            return {};
        default:
            return state;
    }
};
