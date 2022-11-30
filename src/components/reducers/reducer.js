/* eslint-disable no-unreachable */

export default function loginReducer(initialState = {}, action) {
    switch (action.type) {
        case "LOGIN":
            console.log(action.data);
            return {
                ...initialState,
                status: "Login success!"
            };
            break;
        case "INITIALIZE":
            console.log(action);
            return {
                ...initialState,
                client: action.client
            };
            break;
        case "GET_USER":
            console.log(action);
            return {
                ...initialState,
                user: action.user
            };
            break;

        default:
            return initialState;
    }
}

