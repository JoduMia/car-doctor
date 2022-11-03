import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import OrderRow from './OrderRow';

const Order = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log(data);
            })
    }, [user?.email])
    console.log(orders);

    return (
        <div>
            You have {orders.length} orders.

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>To fixed</th>
                            <th>Cost</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => <OrderRow key={order._id} order={order} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Order