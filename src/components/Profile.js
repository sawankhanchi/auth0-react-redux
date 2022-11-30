import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const reduxState = useSelector((state) => state.loginReducer.user);

    return (
        reduxState && (
            <article className='column'>
                {reduxState?.picture && <img src={reduxState.picture} alt={reduxState.name} />}
                <h2>{reduxState?.name}</h2>
                <ul>
                    {Object.keys(reduxState).map((objkey, i) => <li key={i}>{objkey}: {reduxState[objkey]} </li>)}
                </ul>
            </article>
        )
    )
}

export default Profile;
