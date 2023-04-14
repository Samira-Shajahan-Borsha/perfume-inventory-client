import React, { useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const AddItem = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='py-10 bg-yellow-50'>
            <Link to='/manage/inventory' className='lg:ml-24 ml-3 mb-8 flex w-64 items-center hover:text-yellow-700'>
                <FaArrowLeft className='w-10'></FaArrowLeft> Go Back to Manage Inventory
            </Link>
            <h1 className='text-center text-2xl font-semibold '>Add New Perfume</h1>
            <div className='container mx-auto'>
                <div >
                    <div className="hero-content">
                        <div className="w-full lg:w-3/4 md:w-3/4 shadow-2xl bg-base-100">
                            <div className="card-body lg:px-0 lg:py-8 items-center">
                                <div className="lg:flex w-full justify-evenly">
                                    <div className="form-control w-full lg:w-5/12 ">
                                        <label className="label">
                                            <span className="label-text">Perfume Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder='Perfume name' id="input" className="block rounded-none border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 text-sm focus:outline-none" />
                                    </div>
                                    <div className="form-control w-full lg:w-5/12">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name="email" defaultValue={user?.email} id="input" className="block rounded-none border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 text-sm focus:outline-none" required readOnly />
                                    </div>
                                </div>
                                <div className="lg:flex w-full justify-evenly">
                                    <div className="form-control w-full lg:w-5/12 ">
                                        <label className="label">
                                            <span className="label-text">Image URL</span>
                                        </label>
                                        <input type="text" name="imageURL" placeholder='Perfume image URL' id="input" className="block rounded-none border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 text-sm focus:outline-none" required />
                                    </div>
                                    <div className="form-control w-full lg:w-5/12">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="number" name="price" placeholder='Price' id="input" className="block rounded-none border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 text-sm focus:outline-none" required />
                                    </div>
                                </div>
                                <div className="lg:flex w-full justify-evenly">
                                    <div className="form-control w-full lg:w-5/12 ">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input type="number" name="quantity" placeholder='Quantity' id="input" className="block rounded-none border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 text-sm focus:outline-none" required />
                                    </div>
                                    <div className="form-control w-full lg:w-5/12">
                                        <label className="label">
                                            <span className="label-text">Supplier Name</span>
                                        </label>
                                        <input type="text" name="supplierName" placeholder='Supplier name' id="input" className="block rounded-none border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 text-sm focus:outline-none" required />
                                    </div>
                                </div>
                                <div className="form-control w-2/3">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <textarea name="description" id="" cols="30" rows="5" placeholder='Write a short description about the perfume' className='block rounded-none w-full mt-1 border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 text-sm focus:outline-none'></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary border-0 rounded-none font-normal bg-black hover:bg-yellow-700" >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;