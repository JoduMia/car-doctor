import React from 'react';
import { Link } from 'react-router-dom';
import loginSvg from '../../assets/images/login/login.svg'

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const fname = e.target.fname.value;
        const email = e.target.email.value;
        console.log(email, fname);
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
                    <h1 className='text-bold text-black text-4xl text-center'>Login</h1>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                <input name="fname" type="text" placeholder="FirstName" className="input input-bordered input-primary w-full" />
                                <input name="lname" type="text" placeholder="Last Name" className="input input-bordered input-primary w-full" />
                                <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered input-primary w-full" />
                                <input name="email" readOnly type="text" placeholder="Email" className="input input-bordered input-primary w-full" />

                                <textarea className="textarea textarea-bordered" placeholder="Your message" name="message"></textarea>
                            </div>
                            <input className='btn' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login