import { combineReducers } from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import actions from './phonebook-actions'

const contacts = createReducer([], {
    [actions.addContact]: (state, {payload}) => [...state, payload],
    [actions.deleteContact]: (state, {payload}) => state.filter(el => el.id !== payload),
})

const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
    
})

export default combineReducers ({
    contacts,
    filter,

});