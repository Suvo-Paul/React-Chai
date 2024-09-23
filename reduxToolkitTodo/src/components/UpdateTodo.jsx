import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../Features/Todo/todoSlice';

const UpdateTodo = ({ todo }) => {
    const [newText, setNewText] = useState(todo.text);
    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(updateTodo({
            id: todo.id,
            newText: newText.trim() // Ensure trimmed text before updating
        }));
    };

    return (
        <div className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'>
            <input
                type="text"
                className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
            />
            <button
                onClick={handleUpdate}
                className='text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-md ml-2'
            >
                Update
            </button>
        </div>
    );
};

export default UpdateTodo;
