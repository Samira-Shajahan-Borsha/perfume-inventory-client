import React from 'react';

const SingleCategory = ({perfume}) => {
    const {name, description} = perfume;
    return (
        <div className='my-2 text-center'>
            <h2 className='text-2xl my-2'>{name}</h2>
            <p className='text-slate-800 font-thin text-base leading-7'>{description}</p>
        </div>
    );
};

export default SingleCategory;