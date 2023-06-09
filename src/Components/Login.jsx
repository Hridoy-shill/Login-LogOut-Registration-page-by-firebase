import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from './Providers/AuthProviders';

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();
         
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        logInUser(email, password)
            .then(result=>{
                const loggedUser = result.user
                // console.log(loggedUser);
                form.reset();
                alert('log in successful')
            })
            .catch(error =>{
                // console.log(error);
                alert('User Not diffine')
            })
        
    }
    const {user, logInUser} = useContext(UserContext);

    
    return (
        <div>
            <h1>{user && user.displayName}</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <p className='text-center text-xl'>or</p>
                                <Link to={'/register'} className='text-center'><button className="btn btn-active btn-link">SingUp</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;