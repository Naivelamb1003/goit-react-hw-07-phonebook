/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import phonebookReducer from './phonebook/phonebook-reducer';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'hi',
//     storage,
// }

const rootReducer = combineReducers({
    phonebook: phonebookReducer
})
// const persistedReducer = persistReducer(persistConfig,rootReducer )

const store = configureStore ({
    reducer:rootReducer,
    devTools: process.env.NODE_ENV === 'development', 
})

// const persistor = persistStore(store);

export default  {store};//{store, persistor };