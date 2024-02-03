import { render,screen } from '@testing-library/react';
import ViewAllTaskComponent from './viewAllTaskComponent.component';
import { taskListType } from '../../interface';

describe('Home Screen Test Cases', () => {
  beforeEach(() => {
    HTMLDialogElement.prototype.close = jest.fn();
    const filterValue = "All";
    const deleteTaskHandler = jest.fn();
    const editTaskHandler = jest.fn();
    const allTaskList: taskListType[] = [];
    render(
      <ViewAllTaskComponent
        filterValue={filterValue}
        deleteTaskHandler={deleteTaskHandler}
        editTaskHandler={editTaskHandler}
        allTaskList={allTaskList}
      />
    );
  });
  test('Snapshot testing', () => {
    const homeScreen = screen.getByTestId('viewAllComponent');
    expect(homeScreen).toMatchSnapshot();
  });
  
});
