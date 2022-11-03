import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginSvg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {emailPassLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        //login with email and password---->
        emailPassLogin(email,password)
        .then(result => {
            console.log(result.user);
            navigate(from, {replace:true})
        })

    };


    return (
        <div className='grid md:grid-cols-2'>
            <div className='flex items-center justify-center h-screen order-last md:order-first'>
                <div className='w-[80%] mx-auto'>
                    <img src={loginSvg} alt="" />
                </div>
            </div>
            <div className="hero">
                <div className="hero-content flex-col">
                <h1 className='text-bold text-black text-4xl text-center'>Login !</h1>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label pt-3">
                                    <p>Have an account? Please <Link to={'/register'} className='text-blue-600 hover:text-blue-500 duration-300'>Register !!!</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;