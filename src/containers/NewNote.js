import React from 'react';

import { useDispatch } from 'react-redux';
import { createNote } from "../store/Actions"

const NewNote = () => {

    const dispatch = useDispatch()


    const addTodo = async (e) => {
        e.preventDefault();
        const text = e.target.note.value;
        dispatch(createNote(text))
        e.target.note.value = " ";
    }

    return (
        <form onSubmit={addTodo}>
            <input type="text" name="note"></input>
            <input type="submit" placeholder="Write you note here" name="Add note" value="Add note" ></input>
        </form >
    );
};

export default NewNote;