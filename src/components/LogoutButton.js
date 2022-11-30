import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { handleUserLogout } from './actions/action';

const LogoutButton = () => {
    const reduxState = useSelector((state) => state.loginReducer)
    const dispatch = useDispatch();

    return (
        reduxState.user && (
            <button onClick={() => dispatch(handleUserLogout(reduxState.client))}>
                Sign Out
            </button>
        )
    )
}

export default LogoutButton;
