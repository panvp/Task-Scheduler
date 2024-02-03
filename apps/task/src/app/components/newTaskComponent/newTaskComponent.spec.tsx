import { render, screen } from '@testing-library/react';
import { taskListType } from '../../interface';
import NewTaskComponent from './newTaskComponent.component';

describe('Home Screen Test Cases', () => {
  beforeEach(() => {
    
    const isEdit = false;
    const setIsEdit = jest.fn();
    const setAllTaskList = jest.fn();
    const indexToEdit = 1;
    const taskToBeEdited = {title: "", description: "", dropdownValue: ""}
    render(
      <NewTaskComponent
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        indexToEdit={indexToEdit}
        taskToBeEdited={taskToBeEdited}
        setAllTaskList={setAllTaskList}
      />
    );
  });
  test('Snapshot testing', () => {
    const homeScreen = screen.getByTestId('newTaskComponent');
    expect(homeScreen).toMatchSnapshot();
  });
});
