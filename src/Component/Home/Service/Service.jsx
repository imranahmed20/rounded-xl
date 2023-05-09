import React from 'react';

const Service = ({ service }) => {
    console.log(service)
    const { title, img, price } = service
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} className='h-[300px] rounded-xl' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p className='text-xl text-orange-500'>Price: ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;