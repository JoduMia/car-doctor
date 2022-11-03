import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {title, _id,price} = useLoaderData();
    console.log(price);
    const {user} = useContext(AuthContext);


    const handleCheckout = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = user?.email || 'Unregistered';
        const phone = form.phone.value;
        const name = `${form.fname.value} ${form.lname.value}`;
        const message = form.message.value
        console.log(name,email, phone, message);

        const order = {
            service: _id,
            service_name: title,
            price,
            email,
            phone,
            name,
            message
        }

        fetch(`https://car-doctor-server.vercel.app/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                form.reset();
                alert('Order send successfully');
            }
        })
        .catch(err => console.log(err))
    };

    return (
        <div className='py-20'>
            <form onSubmit={handleCheckout}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <input name="fname" type="text" placeholder="FirstName" className="input input-bordered input-primary w-full" />
                    <input name="lname" type="text" placeholder="Last Name" className="input input-bordered input-primary w-full" />
                    <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered input-primary w-full" />
                    <input name="email" defaultValue={user?.email} readOnly type="text" placeholder="Email" className="input input-bordered input-primary w-full" />

                    <textarea className="textarea textarea-bordered" placeholder="Your message" name="message"></textarea>
                </div>
                    <input className='btn' type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Checkout