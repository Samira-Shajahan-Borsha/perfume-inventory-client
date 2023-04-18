import React, { useContext, useState } from 'react';
import { FaArrowLeft, FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useTitle } from '../../Hooks/useTitle';

const AddItem = () => {

    const { user } = useContext(AuthContext);

    const [item, setItem] = useState({
        perfumeName: '',
        imageURL: '',
        price: '',
        quantity: '',
        supplierName: '',
        description: ''
    });

    const [error, setError] = useState({
        priceError: '',
        quantityError: ''
    });

    useTitle('Add Perfume');

    const handleAddItem = event => {
        event.preventDefault();

        const form = event.target;
        const perfumeName = form.perfumeName.value;
        const email = form.email.value;
        const imageURL = form.imageURL.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const supplierName = form.supplierName.value;
        const description = form.description.value;

        const item = {
            perfumeName,
            email,
            imageURL,
            price,
            quantity,
            supplierName,
            description
        };

        fetch('http://localhost:5000/add/item', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Congratulations! The item has been successfully added.', {
                        icon: '👏',
                    });
                    form.reset();
                }
            })
    }

    const handlePriceBlur = priceInput => {
        if (priceInput < 80) {
            setError({ ...error, priceError: 'Price can not be less than $80.' });
        }
        else {
            setItem({ ...item, price: parseInt(priceInput) });
            setError({ ...error, priceError: '' });
        }
    }

    const handleQuantityBlur = quantityInput => {
        if (quantityInput <= 0) {
            setError({ ...error, quantityError: 'Invalid Quantity.' });
        }
        else {
            setItem({ ...item, quantity: parseInt(quantityInput) });
            setError({ ...error, quantityError: '' });
        }
    }

    return (
        <div className=' py-24 lg:py-32 bg-yellow-50'>
            <Link to='/manage/inventory' className='lg:ml-24 ml-3 mb-8 flex w-64 items-center hover:text-yellow-700'>
                <FaArrowLeft className='w-10'></FaArrowLeft> Go Back to Manage Inventory
            </Link>
            <h1 className='text-center text-2xl font-semibold '>Add New Perfume</h1>
            <div className='container mx-auto'>
                <div className="hero-content">
                    <div className="w-full lg:w-3/4 md:w-3/4 shadow-2xl bg-base-100">
                        <form onSubmit={handleAddItem}>
                            <div className="card-body lg:px-0 lg:py-8 items-center">
                                <div className="lg:flex w-full justify-evenly">
                                    <div className="form-control w-full lg:w-5/12 ">
                                        <label className="label">
                                            <span className="label-text">Perfume Name</span>
                                        </label>
                                        <input type="text" name="perfumeName" placeholder='Perfume name' id="input" className="block rounded-none border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 text-sm focus:outline-none" required />
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
                                            <span className="label-text">Supplier Name</span>
                                        </label>
                                        <input type="text" name="supplierName" placeholder='Supplier name' id="input" className="block rounded-none border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 text-sm focus:outline-none" required />
                                    </div>
                                </div>
                                <div className="lg:flex w-full justify-evenly">
                                    <div className="form-control w-full lg:w-5/12">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input onBlur={event => handlePriceBlur(event.target.value)} type="number" name="price" placeholder='Price' id="input" className="block rounded-none border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 text-sm focus:outline-none" required />
                                        {
                                            error?.priceError && <p className='flex mt-1 ml-2 text-sm items-center text-red-600'><FaExclamationCircle className='mr-1'></FaExclamationCircle>{error?.priceError}</p>
                                        }
                                    </div>
                                    <div className="form-control w-full lg:w-5/12 ">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input onBlur={event => handleQuantityBlur(event.target.value)} type="number" name="quantity" placeholder='Quantity' id="input" className="block rounded-none border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 text-sm focus:outline-none" required />
                                        {
                                            error?.quantityError && <p className='flex mt-1 ml-2 text-sm items-center text-red-600'><FaExclamationCircle className='mr-1'></FaExclamationCircle>{error?.quantityError}</p>
                                        }
                                    </div>
                                </div>
                                <div className="form-control w-full lg:w-2/3">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <textarea name="description" cols="30" rows="5" placeholder='Write a short description about the perfume' className='block rounded-none w-full mt-1 border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 text-sm focus:outline-none'></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary border-0 rounded-none font-normal bg-black hover:bg-yellow-700" >Add Perfume</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;