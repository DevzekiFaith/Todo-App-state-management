"use client";

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../../redux/todoSlice'; // Adjust the path as needed
import generateId from '../../utils/generateId'; // Adjust the path as needed
 

  const AddTask = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
  
    const handleAddTask = () => {
      // Logic to add a task
      dispatch(addTask({ title: 'New Task' }));
    };
  
    return (
      <div>
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </div>
    );
  }; 

export default AddTask;
