import { createAuth0Client } from "@auth0/auth0-spa-js"

const domain = process.env.REACT_APP_AUTH0_DOMIAN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

export const setUser = (user) => {
    return {
        type: 'GET_USER',
        user
    }
}

export const initializeAuthO = () => {
    return async (dispatch) => {

        const result = await createAuth0Client({
            domain: domain,
            clientId: clientId,
            authorizationParams: {
                redirect_uri: window.location.origin
            }
        })

        const isAuthenticated = await result.isAuthenticated();

        if (!isAuthenticated) {
            const query = window.location.search;
            if (query.includes('code=') && query.includes('state=')) {
                await result.handleRedirectCallback();
                const user = await result.getUser();
                // console.log(user);
                dispatch(setUser(user))
            }
        }
        console.log(result)
        dispatch({ type: "INITIALIZE", client: result })
    }
}

export const handleUserLogin = (auth0Client) => {
    return async (dispatch) => {
        const result = await auth0Client.loginWithRedirect();
        console.log(result)
    }
}

export const handleUserLogout = (auth0Client) => {
    return async (dispatch) => {
        const result = await auth0Client.logout();;
        console.log(result)
    }
}
