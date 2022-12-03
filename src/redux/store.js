import { configureStore } from '@reduxjs/toolkit';

import todoListSlice from '../components/TodoList/todosSlice';
import filtersSlice from '../components/Filters/filtersSlice';

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer,
    },
});

export default store;
