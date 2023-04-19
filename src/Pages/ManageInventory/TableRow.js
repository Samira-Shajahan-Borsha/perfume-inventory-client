import React from 'react';

const TableRow = ({ perfume, index }) => {

    const { _id, perfumeName, imageURL, supplierName, price, quantity } = perfume;

    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td className='w-96'>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-16 h-16 lg:w-20 lg:h-20 border-solid border-2 border-black">
                            <img src={imageURL} alt='perfume-img' />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{perfumeName}</div>
                        <div className="text-sm opacity-50">{supplierName}</div>
                    </div>
                </div>
            </td>
            <td>
                {quantity}
            </td>
            <td>${price}</td>
            <th>
                <button className="btn bg-black hover:bg-black rounded-none btn-xs font-normal md:btn-sm lg:btn-sm">Delete</button>
            </th>
        </tr>
    );
};

export default TableRow;