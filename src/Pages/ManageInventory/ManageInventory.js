import React from 'react';
import { useTitle } from '../../Hooks/useTitle';
import TableRow from './TableRow';
import { useLoaderData } from 'react-router-dom';

import './ManageInventory.css';

const ManageInventory = () => {

    useTitle('Manage Inventory');

    const perfumes = useLoaderData();

    console.log(perfumes);

    return (
        <div className='py-24 lg:py-32 bg-yellow-50'>
            <h1 className='text-center text-2xl font-semibold mb-4'>Manage Perfume Inventory</h1>
            <div className="container mx-auto w-11/12 overflow-x-auto">
                <table className="table container mx-auto w-full lg:w-11/12 rounded-none">
                    <thead>
                        <tr>
                            <th className='z-[0]'></th>
                            <th>Perfume Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            perfumes?.map((perfume, index) => < TableRow
                                key={perfume._id}
                                index={index}
                                perfume={perfume}
                            ></TableRow>)

                        }
                    </tbody>

                </table>
            </div>
        </div >
    );
};

export default ManageInventory;