import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Todo from '../Todo';
import todoListSlice from './todosSlice';
import filteredTodoList from '../../redux/selectors';

export default function TodoList() {
    const [newTodo, setNewTodo] = useState('');
    const [priority, setPriority] = useState('Medium');

    const inputRef = useRef('');

    const dispatch = useDispatch();

    const todoList = useSelector(filteredTodoList);

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handlePriorityChange = (value) => {
        setPriority(value);
    };

    const handleAddTodo = () => {
        dispatch(
            todoListSlice.actions.addTodo({
                id: uuidv4(),
                name: newTodo,
                priority,
                completed: false,
            }),
        );
        setNewTodo('');
        setPriority('Medium');
        inputRef.current.focus();
    };

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        priority={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input
                        placeholder="Add todo..."
                        value={newTodo}
                        onChange={handleInputChange}
                        ref={inputRef}
                    />
                    <Select value={priority} onChange={handlePriorityChange}>
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAddTodo}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
