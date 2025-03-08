import React from 'react';

const TaskItem = ({ task, onDelete, onToggleCompleted, onEdit }) => {
  return (
    <li style={{ 
      backgroundColor: task.priority === 'high' ? '#ffcccc' : 
                      task.priority === 'medium' ? '#ffffcc' : '#ccffcc',
      textDecoration: task.completed ? 'line-through' : 'none'
    }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggleCompleted}
      />
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Category: {task.category}</p>
      <button onClick={onEdit}>Edit</button> {/* Edit button */}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;