import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from './Providers/AuthProviders';


const Header = () => {
    const { user, logOut } = useContext(UserContext)
    // console.log(user, logOut);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between px-24">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <div className='space-x-5'>
                    <Link to={'/'} className='font-bold'>Home</Link>
                    <Link to={'/login'} className='font-bold'>Login</Link>
                    <Link to={'/register'} className='font-bold'>SingUp</Link>
                    <Link to={'/order'} className='font-bold'>Orders</Link>
                    {user && <Link to={'/profile'} className='font-bold'>User Profile</Link>}
                </div>
                <div>
                    {
                        user ? <div>
                            {user.email}
                            <button  onClick={handleLogOut} className="btn ms-4">SingOut</button>
                        </div> :
                            <Link to={'/login'}><button className="btn ms-4">LogIn</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;