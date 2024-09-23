import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../Features/Todo/todoSlice';

const AddTodo = ({ selectedTodo, setSelectedTodo }) => {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    // Set the input field value when editing a todo
    useEffect(() => {
        if (selectedTodo) {
            setInput(selectedTodo.text); // Pre-fill with the text of the selected todo
        } else {
            setInput(''); // Clear input field if no todo is selected
        }
    }, [selectedTodo]);

    const handleAddOrUpdate = (e) => {
        e.preventDefault();
        if (!input.trim()) return; // Prevent empty input submission

        if (selectedTodo) {
            // Update the existing todo
            dispatch(updateTodo({
                id: selectedTodo.id,
                newText: input
            }));
            setSelectedTodo(null); // Reset after updating
        } else {
            // Add a new todo
            dispatch(addTodo(input));
        }
        setInput(''); // Clear input after adding/updating
    };

    return (
        <form onSubmit={handleAddOrUpdate} className='space-x-3 mt-12'>
            <input
                type="text"
                className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                placeholder='Enter a Todo'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type='submit'
                className={`text-white ${selectedTodo ? 'bg-green-500 hover:bg-green-600' : 'bg-indigo-500 hover:bg-indigo-600'} border-0 py-2 px-6 focus:outline-none rounded text-lg`}
            >
                {selectedTodo ? 'Update Todo' : 'Add Todo'}
            </button>
        </form>
    );
};

export default AddTodo;
