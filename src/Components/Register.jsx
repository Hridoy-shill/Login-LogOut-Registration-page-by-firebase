import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from './Providers/AuthProviders';

const Register = () => {

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const logged = result.user;
            // console.log(logged);
            form.reset();
            alert("Sing Up successful!!")
        })
        .catch(error =>{
            // console.log(error);
            alert('Check the information')
        })

    }
    const { user, createUser } = useContext(UserContext);
    // console.log(createUser);

    return (
        <div>

            <p>{user && user.displayName}</p>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-primary">SingUp</button>
                                <p className='text-center text-xl'>or</p>
                                <Link to={'/login'} className='text-center'><button className="btn btn-active btn-link">Login</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;