import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../../redux/todoSlice';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
          {task.description}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </div>
  );
};

export default Task;
