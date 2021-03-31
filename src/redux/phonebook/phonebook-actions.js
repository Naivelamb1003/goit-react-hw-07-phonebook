/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import { v4 as uuidv4 } from "uuid";
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('todos/add', (name,number) =>{
    return {
        payload: {
                     id: uuidv4(),
                     name,
                     number
                }
    }
}  )

const deleteContact = createAction('todos/delete');

const changeFilter = createAction('todos/change_filter');

export default {addContact, deleteContact, changeFilter};