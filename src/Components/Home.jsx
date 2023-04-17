import React, { useContext } from 'react';
import { UserContext } from './Providers/AuthProviders';

const Home = () => {
    const {user} = useContext(UserContext)
    console.log(user);
    return (
        <div>
            <p>this is home{user && <span>{user.displayName}</span>}</p>
        </div>
    );
};

export default Home;