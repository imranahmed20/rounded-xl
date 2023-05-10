import React from 'react';
import product1 from '../../../assets/images/products/1.png'
import product2 from '../../../assets/images/products/2.png'
import product3 from '../../../assets/images/products/3.png'
import product4 from '../../../assets/images/products/4.png'
import product5 from '../../../assets/images/products/5.png'
import product6 from '../../../assets/images/products/6.png'
import { FaStar } from 'react-icons/fa';

const Product = () => {

    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h3 className='text-2xl text-orange-600'>Popular Products</h3>
                <h2 className='text-5xl font-semibold mb-4'>Browse Our Products</h2>
                <p>The majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={product1} className='h-[300px] rounded-xl' alt="Shoes" /></figure>
                    <div className="card-body ">
                        <div className='text-center flex items-center justify-center'>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                        </div>
                        <h2 className="text-center text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-xl text-orange-500 text-center'>Price: $20.00</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={product5} className='h-[300px] rounded-xl' alt="Shoes" /></figure>
                    <div className="card-body ">
                        <div className='text-center flex items-center justify-center'>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                        </div>
                        <h2 className="text-center text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-xl text-orange-500 text-center'>Price: $20.00</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={product3} className='h-[300px] rounded-xl' alt="Shoes" /></figure>
                    <div className="card-body ">
                        <div className='text-center flex items-center justify-center'>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                        </div>
                        <h2 className="text-center text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-xl text-orange-500 text-center'>Price: $20.00</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={product4} className='h-[300px] rounded-xl' alt="Shoes" /></figure>
                    <div className="card-body ">
                        <div className='text-center flex items-center justify-center'>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                        </div>
                        <h2 className="text-center text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-xl text-orange-500 text-center'>Price: $20.00</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={product2} className='h-[300px] rounded-xl' alt="Shoes" /></figure>
                    <div className="card-body ">
                        <div className='text-center flex items-center justify-center'>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                        </div>
                        <h2 className="text-center text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-xl text-orange-500 text-center'>Price: $20.00</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={product6} className='h-[300px] rounded-xl' alt="Shoes" /></figure>
                    <div className="card-body ">
                        <div className='text-center flex items-center justify-center'>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                            <FaStar className='text-amber-700 text-center mr-2'></FaStar>
                        </div>
                        <h2 className="text-center text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-xl text-orange-500 text-center'>Price: $20.00</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Product;
