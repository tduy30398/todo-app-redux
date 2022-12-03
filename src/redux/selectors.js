import { createSelector } from '@reduxjs/toolkit';

const todoListSelector = (state) => state.todoList;
const textSearch = (state) => state.filters.search;
const statusSearch = (state) => state.filters.status;
const prioritiesSearch = (state) => state.filters.priorities;

const filteredTodoList = createSelector(
    todoListSelector,
    textSearch,
    statusSearch,
    prioritiesSearch,
    (todoList, textFilter, statusFilter, prioritiesFilter) => {
        return todoList.filter((todo) => {
            if (statusFilter === 'All') {
                return (
                    todo.name.includes(textFilter) &&
                    (prioritiesFilter.length ? prioritiesFilter.includes(todo.priority) : true)
                );
            }

            return (
                todo.name.includes(textFilter) &&
                (prioritiesFilter.length ? prioritiesFilter.includes(todo.priority) : true) &&
                (statusFilter === 'Completed' ? todo.completed : !todo.completed)
            );
        });
    },
);

export default filteredTodoList;
