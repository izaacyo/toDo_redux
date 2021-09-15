import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, updateNotes } from '../store/Actions';


const Notes = () => {

    const notes = useSelector((state) => state);
    const dispatch = useDispatch();


    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id}
                    onClick={() => dispatch(toggleTodo(note.id))}
                    className={note.completed ? "strike todo" : "todo"}>
                    {note.text}

                    <button className='remove-btn' onClick={() => dispatch(updateNotes(note.id))}>
                    </button>

                </li>
            ))}

        </ul>

    );
};

export default Notes;