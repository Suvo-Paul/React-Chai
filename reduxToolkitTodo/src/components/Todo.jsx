import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Features/Todo/todoSlice';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import AddTodo from './AddTodo';

const Todo = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    
    const [selectedTodo, setSelectedTodo] = useState(null); // Track the todo being edited

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
    };

    const handleEditTodo = (todo) => {
        setSelectedTodo(todo); // Pass the selected todo to the AddTodo component for editing
    };

    return (
        <>
            {/* Render AddTodo component ONCE, before the todo list */}
            <AddTodo selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} />

            <div className='mt-6'>Todos</div>
            <ul className='list-none'>
                {todos.map((todo) => (
                    <li
                        className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
                        key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <button
                            onClick={() => handleEditTodo(todo)} // Pass the todo for editing
                            className='text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-md'
                        >
                            <FaEdit />
                        </button>
                        <button
                            onClick={() => handleRemoveTodo(todo.id)}
                            className='text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
                        >
                            <AiFillDelete />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Todo;
