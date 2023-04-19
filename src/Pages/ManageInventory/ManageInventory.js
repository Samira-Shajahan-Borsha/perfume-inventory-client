import React, { useEffect, useState } from 'react';
import { useTitle } from '../../Hooks/useTitle';
import TableRow from './TableRow';

import './ManageInventory.css';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ManageInventory = () => {

    const [perfumes, setPerfumes] = useState([]);
    console.log(perfumes);

    useEffect(() => {
        fetch('http://localhost:5000/perfumes')
            .then(res => res.json())
            .then(data => setPerfumes(data))
    }, []);

    const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false);

    useTitle('Manage Inventory');

    const handleDeleteItem = id => {
        console.log(id);
        setIsDeleteConfirmed(true);
        if (isDeleteConfirmed) {
            const url = `http://localhost:5000/perfume/${id}`;
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remainingItems = perfumes.filter(perfume => perfume._id !== id)
                        setPerfumes(remainingItems);
                    }
                })
        }
    }

    return (

        <div className='py-24 lg:py-32 bg-yellow-50 min-h-screen'>
            <h1 className='text-center text-2xl font-semibold mb-4'>Manage Perfume Inventory</h1>
            <div className="container mx-auto w-11/12 overflow-x-auto">
                {
                    perfumes.length === 0 ?
                        <>
                            <h1 className='text-center '>You don't have any items to show </h1>
                            <div className='flex justify-center mt-8'>
                                <Link to='/add/item' className='flex w-64 items-center hover:text-yellow-700'>
                                    <FaArrowLeft className='w-10'></FaArrowLeft> Want to Add Perfume
                                </Link>
                            </div>
                        </>
                        :
                        <table className="table container mx-auto w-full lg:w-11/12">
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
                                        handleDeleteItem={handleDeleteItem}
                                    ></TableRow>)

                                }
                            </tbody>

                        </table>
                }
            </div>
        </div >
    );
};

export default ManageInventory;