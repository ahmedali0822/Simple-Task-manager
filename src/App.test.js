import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders task manager heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Simple Task Manager/i);
  expect(headingElement).toBeInTheDocument();
});

test('adds a new task', () => {
  render(<App />);

  // Fill out the form
  const titleInput = screen.getByPlaceholderText(/Title/i);
  const descriptionInput = screen.getByPlaceholderText(/Description/i);
  const addButton = screen.getByText(/Add Task/i);

  fireEvent.change(titleInput, { target: { value: 'Test Task' } });
  fireEvent.change(descriptionInput, { target: { value: 'This is a test task' } });
  fireEvent.click(addButton);

  // Check if the task is added
  const taskTitle = screen.getByText(/Test Task/i);
  const taskDescription = screen.getByText(/This is a test task/i);
  expect(taskTitle).toBeInTheDocument();
  expect(taskDescription).toBeInTheDocument();
});

test('does not add a task with an empty title', () => {
  render(<App />);

  // Fill out the form with an empty title
  const titleInput = screen.getByPlaceholderText(/Title/i);
  const descriptionInput = screen.getByPlaceholderText(/Description/i);
  const addButton = screen.getByText(/Add Task/i);

  fireEvent.change(titleInput, { target: { value: '' } });
  fireEvent.change(descriptionInput, { target: { value: 'This is a test task' } });
  fireEvent.click(addButton);

  // Check if the task is not added
  const taskTitle = screen.queryByText(/Test Task/i);
  expect(taskTitle).not.toBeInTheDocument();
});

test('deletes a task', () => {
  render(<App />);

  // Add a task first
  const titleInput = screen.getByPlaceholderText(/Title/i);
  const descriptionInput = screen.getByPlaceholderText(/Description/i);
  const addButton = screen.getByText(/Add Task/i);

  fireEvent.change(titleInput, { target: { value: 'Test Task' } });
  fireEvent.change(descriptionInput, { target: { value: 'This is a test task' } });
  fireEvent.click(addButton);

  // Delete the task
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);

  // Check if the task is deleted
  const taskTitle = screen.queryByText(/Test Task/i);
  expect(taskTitle).not.toBeInTheDocument();
});

test('adds multiple tasks', () => {
  render(<App />);

  // Add first task
  const titleInput = screen.getByPlaceholderText(/Title/i);
  const descriptionInput = screen.getByPlaceholderText(/Description/i);
  const addButton = screen.getByText(/Add Task/i);

  fireEvent.change(titleInput, { target: { value: 'Task 1' } });
  fireEvent.change(descriptionInput, { target: { value: 'Description 1' } });
  fireEvent.click(addButton);

  // Add second task
  fireEvent.change(titleInput, { target: { value: 'Task 2' } });
  fireEvent.change(descriptionInput, { target: { value: 'Description 2' } });
  fireEvent.click(addButton);

  // Check if both tasks are added
  const task1 = screen.getByText(/Task 1/i);
  const task2 = screen.getByText(/Task 2/i);
  expect(task1).toBeInTheDocument();
  expect(task2).toBeInTheDocument();
});