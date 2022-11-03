import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const OrderRow = ({order, orderDelete, handleOrderUpdate}) => {
    const [serviceData, setServiceData] = useState({});
    const {_id,name, service_name, price, phone,service, status} = order;

    useEffect(() =>{
        fetch(`http://localhost:5000/services/${service}`)
        .then((res => res.json()))
        .then(data => {
            setServiceData(data);
        }).catch(err => console.log(err.message))
    },[service])



    return (
            <tr>
                <th>
                    <label>
                        <button onClick={() => orderDelete(_id)} className='btn btn-ghost text-red-500 text-xl'><FaTrashAlt /></button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded w-24 h-24">
                                {serviceData.img &&
                                    <img src={serviceData.img} alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{phone}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {service_name}
                </td>
                <td>{price}</td>
                <th>
                    <button
                    onClick={() => handleOrderUpdate(_id)}
                    className="btn btn-ghost btn-xs">{ status? status: 'Pending'}</button>
                </th>
            </tr>
    )
}

export default OrderRow