import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onToggleCompleted, onEdit }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={() => onDelete(index)}
          onToggleCompleted={() => onToggleCompleted(index)}
          onEdit={() => onEdit(index)} 
        />
      ))}
    </ul>
  );
};

export default TaskList;