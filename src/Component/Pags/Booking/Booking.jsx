import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import BookingRow from '../BookingRow/BookingRow';


const Booking = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBooking] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))

    }, [])
    const handleDelete = id => {
        console.log(id)
        const proceed = confirm("Are you sure you want to delete")
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert("Delete Successful")
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBooking(remaining)

                    }
                })

        }
    }

    const handleConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application.json"
            },
            body: JSON.stringify({ state: 'confirm' })


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const update = bookings.find(booking => booking._id === id)
                    update.status = "confirm";
                    const newBookings = [update, ...remaining]
                    setBooking(newBookings)

                }
            })
    }
    return (
        <div>
            <h1 className='text-5xl'>Your user : {bookings.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow key={booking._id} handleConfirm={handleConfirm} handleDelete={handleDelete} booking={booking}></BookingRow>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Booking;