import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Meet from '../Meet/Meet';
const Team = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {

                setTeams(data)
            })
    }, [])
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h3 className='text-2xl text-orange-600'>Team</h3>
                <h2 className='text-5xl font-bold mb-4'>Meet Our Team</h2>
                <p>The majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    teams.map(team => <Meet team={team} key={team._id}></Meet>)
                }
            </div>

        </div>
    );
};

export default Team;