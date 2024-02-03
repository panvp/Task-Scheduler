import { fireEvent, render, screen } from '@testing-library/react';
import Home from './home.component';

describe('Home Screen Test Cases', () => {
  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
    render(<Home />);
  });
  test('Snapshot testing', () => {
    const homeScreen = screen.getByTestId('homeScreen');
    expect(homeScreen).toMatchSnapshot();
  });

  test("Add Task button",()=>{
    const addButton = screen.getByTestId("addTaskButton");
    fireEvent.click(addButton);
    expect(addButton).toBeDefined();
  });
  test("Edit and delete button button",()=>{
    const addButton = screen.getByTestId("addTaskButton");
    fireEvent.click(addButton);

    const titleInput = screen.getByLabelText("Task Name:")
    fireEvent.change(titleInput, {target: {value: 'First task'}})

    const saveTaskButton = screen.getByText("Add task");
    fireEvent.click(saveTaskButton);

    const editButton = screen.getByTestId("editButton");
    fireEvent.click(editButton);

    const saveOnEditButton = screen.getByText("Update task");
    fireEvent.click(saveOnEditButton);

    const deleteButton = screen.getByTestId("deleteButton");
    fireEvent.click(deleteButton);

  });
});
