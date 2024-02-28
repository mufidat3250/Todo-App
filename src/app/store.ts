import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from './slices/todoSlice'

export const store = configureStore({
    reducer : {
        todo: TodoReducer
    }
})