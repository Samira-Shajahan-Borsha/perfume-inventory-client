import React, { useState } from 'react';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        borderRadius: 'none'
    },
};

const TableRow = ({ perfume, index }) => {

    const { _id, perfumeName, imageURL, supplierName, price, quantity } = perfume;
    
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }


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
                <div>
                    <button onClick={openModal} className="btn bg-black hover:bg-black rounded-none btn-xs font-normal md:btn-sm lg:btn-sm">Delete</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2 className='text-black font-bold'>Do you want to delete this item?</h2>
                        <div className="flex justify-end">
                            <button onClick={closeModal} className="btn btn-sm btn-ghost mr-1">No</button>
                            <button onClick={closeModal} className="btn btn-sm bg-black hover:bg-black">Yes</button>
                        </div>
                    </Modal>
                </div>
                {/* <button className="btn bg-black hover:bg-black rounded-none btn-xs font-normal md:btn-sm lg:btn-sm">Delete</button> */}
            </th>
        </tr>
    );
};

export default TableRow;