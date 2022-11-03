import React, { useEffect, useState } from 'react'

const OrderRow = ({order}) => {
    const [serviceData, setServiceData] = useState({});
    const {name, service_name, price, phone, message,service} = order;

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
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-24 h-24">
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
                    <button className="btn btn-ghost btn-xs">{message}</button>
                </th>
            </tr>
    )
}

export default OrderRow