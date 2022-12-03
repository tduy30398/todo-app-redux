import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn Html Css', priority: 'High', completed: false },
        { id: 2, name: 'Learn Javascript', priority: 'Medium', completed: true },
        { id: 3, name: 'Learn ReactJs', priority: 'Low', completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find((todo) => todo.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        },
    },
});
