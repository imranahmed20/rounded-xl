import React from 'react';
import { FaStar } from 'react-icons/fa';
const Meet = ({ team }) => {
    const { facility, title, img } = team;
    console.log(team)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} className='h-[300px] rounded-xl' alt="Shoes" /></figure>
            <div className="card-body ">

                <h2 className="text-center text-2xl font-bold">{title}</h2>
                <p className='text-xl text-center'>Engine Expert</p>
                <div className='text-center flex items-center justify-center'>
                    <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                    <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                    <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                    <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                    <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                </div>
            </div>
        </div>
    );
};

export default Meet;