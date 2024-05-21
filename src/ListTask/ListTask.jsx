"use client"
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './../Component/Task/Task';

const ListTask = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notdone') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('notdone')}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
