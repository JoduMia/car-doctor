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

    const orderDelete = (id) => {
        const proceed = window.confirm(`Sure to delete the order?`);
        if(proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })
            .catch(err => {
                console.log(err.message);
            })
        }
    };


    const handleOrderUpdate = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remainingOrder = orders.filter(odr => odr._id !== id);
                const approvedOrder = orders.find(odr => odr._id === id);
                approvedOrder.status = 'Approved';
                const newOrder = [...remainingOrder, approvedOrder];
                setOrders(newOrder);
            }
        })
    };

    return (
        <div>
            You have {orders.length} orders.

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>
                                <label>
                                    <h1>Delete order</h1>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>To fixed</th>
                            <th>Cost</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => <OrderRow key={order._id} order={order} orderDelete={orderDelete} handleOrderUpdate={handleOrderUpdate} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Order