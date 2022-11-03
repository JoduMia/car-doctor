import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import loginSvg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [form, setForm] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
            const {email,password} = form;

            createUser(email,password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {});
    };

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newForm = {...form}
        newForm[field] = value;
        setForm(newForm);
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
                <h1 className='text-bold text-black text-4xl text-center'>Register</h1>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input onChange={handleOnChange} type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={handleOnChange} type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={handleOnChange} type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label pt-3">
                                    <p>Have an account? Please <Link to={'/login'} className='text-blue-600 hover:text-blue-500 duration-300'>Login !!!</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register;