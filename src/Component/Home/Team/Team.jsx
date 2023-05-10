import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGoogle } from 'react-icons/fa';
import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'
const Team = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h3 className='text-2xl text-orange-600'>Team</h3>
                <h2 className='text-5xl font-bold mb-4'>Meet Our Team</h2>
                <p>The majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={team1} className='h-[300px] rounded-xl' alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="text-center text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-xl text-center'>Engine Expert</p>
                        <div className='text-center flex items-center justify-center'>
                            <FaFacebook className='text-white text-center mr-2'></FaFacebook>
                            <FaTwitter className='text-white  text-center mr-2'></FaTwitter>
                            <FaLinkedin className='text-white  text-center mr-2'></FaLinkedin>
                            <FaGoogle className='text-white  text-center mr-2'></FaGoogle>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={team2} className='h-[300px] rounded-xl' alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="text-center text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-xl text-center'>Engine Expert</p>
                        <div className='text-center flex items-center justify-center'>
                            <FaFacebook className='text-white text-center mr-2'></FaFacebook>
                            <FaTwitter className='text-white  text-center mr-2'></FaTwitter>
                            <FaLinkedin className='text-white  text-center mr-2'></FaLinkedin>
                            <FaGoogle className='text-white  text-center mr-2'></FaGoogle>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={team3} className='h-[300px] rounded-xl' alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="text-center text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-xl text-center'>Engine Expert</p>
                        <div className='text-center flex items-center justify-center'>
                            <FaFacebook className='text-white text-center mr-2'></FaFacebook>
                            <FaTwitter className='text-white  text-center mr-2'></FaTwitter>
                            <FaLinkedin className='text-white  text-center mr-2'></FaLinkedin>
                            <FaGoogle className='text-white  text-center mr-2'></FaGoogle>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Team;