import React from 'react';

const JobBoard = ({job: {company,
    logo,
    isNew,
        featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools, }}) => (
    <>
        <div className="flex bg-white shadow-md m-4 p-4">
            <div>
                <img src={logo} alt={company}/>
            </div>
            <div className='ml-4'>
                <h3 className='font-bold text-xl text-teal-500'>{company}</h3>
                <h2 className="font-bold text-xl">{position}</h2>
                <p className="text-gray-500 font-medium">
                    {postedAt} · {contract} · {location}
                </p>
            </div>
        </div>


    </>
)

export default JobBoard;
