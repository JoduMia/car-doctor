import React, { useEffect, useState } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://car-doctor-server.vercel.app/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
            .catch(err => console.log(err.message))
    }, [])

    return (
        <div className='pb-20'>
            <div className='text-center space-y-3 mb-10'>
                <h1 className='font-bold text-5xl capitalize'>Our service area</h1>
                <p className='md:w-2/3 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(({ _id, img, price, title }) => (
                        <div key={_id} className='rounded shadow-lg'>
                            <img src={img} alt="" className='rounded w-full md:h-[200px]' />
                            <div className='p-3'>
                                <h3 className='font-bold text-xl'>{title}</h3>
                                <div className='flex items-center justify-between'>
                                    <p className='font-semibold text-[#ff3811]'>Price: ${price}</p>
                                    <BsArrowRight className='text-[#ff3811] font-bold' />
                                </div>
                                <div className='text-right pt-3'>
                                    <Link to={`/services/${_id}`}>
                                        <button className='btn btn-primary btn-sm'>Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services