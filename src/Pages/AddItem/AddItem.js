import React from 'react';

const AddItem = () => {
    return (
        <div className='py-10 bg-yellow-50'>
            <h1 className='text-center text-2xl'>Add a new perfume</h1>
            <div className='container mx-auto w-full'>
                <div >
                    <div className="hero-content">
                        <div className="w-full lg:w-3/4 shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Perfume Name</span>
                                    </label>
                                    <input type="text" name="input" id="input" class="block mt-1 rounded-md w-1/2 border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="input" id="input" class="block mt-1 rounded-md w-1/2 border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input type="text" name="input" id="input" class="block mt-1 rounded-md w-1/2 border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="input" id="input" class="block w-full mt-1 rounded-md border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="text" name="input" id="input" class="block w-full mt-1 rounded-md border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Supplier Name</span>
                                    </label>
                                    <input type="text" name="input" id="input" class="block w-full mt-1 rounded-md border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <input type="text" name="input" id="input" class="block w-full mt-1 rounded-md border-solid border-2 py-2 px-4 border-gray-200 focus:border-yellow-600 focus:outline-none" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
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