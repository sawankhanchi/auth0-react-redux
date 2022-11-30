import React from 'react';
import { useDispatch } from 'react-redux';
import { handleUserLogin } from './actions/action';
import { useSelector } from 'react-redux';

const LoginButton = () => {
    const reduxState = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();

    return (
        !reduxState.user && (
            <button onClick={() => dispatch(handleUserLogin(reduxState.client))}>
                Sign In
            </button>
        )
    )
}

export default LoginButton;
