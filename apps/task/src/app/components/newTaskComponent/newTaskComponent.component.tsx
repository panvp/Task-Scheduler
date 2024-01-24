import { useState } from 'react';
import style from './newTaskComponent.module.css';
const NewTaskComponent = (props: any) => {
  const { setAllTaskList } = props;
  const [title, setTitle] = useState<string>('');
  const [desciption, setDesciption] = useState<string>('');
  const [dropdown, setDropdown] = useState<string>('');
  const modalClose = (event: any) => {
    const modal: any = document.querySelector('.modal-newTask');
    modal.close();
  };

  const titleInputHandler = (event: any) => {
    setTitle(event.target.value);
  };

  const descriptionInputHandler = (event: any) => {
    setDesciption(event.target.value);
  };

  const dropdownInputHandler = (event: any) => {
    setDropdown(event.target.value);
  };

  const addTaskHandler = () => {
    setAllTaskList((prev: any) => {
      return [...prev, { title, desciption, dropdown }];
    });
  };
  return (
    <>
      {/* <h1 className={style.h1Center}> Add new task</h1>
      <div>
        <label className={style.label} htmlFor="title-input">
          {' '}
          Title
        </label>
        <input
          type="input"
          id="title-input"
          placeholder="Enter Title"
          name="title"
          onChange={titleInputHandler}
        ></input>
      </div>
      <div>
        <label htmlFor="desciption-input"> Desciption</label>
        <input
          type="input"
          id="desciption-input"
          placeholder="Enter Desciption"
          name="desciption"
          onChange={descriptionInputHandler}
        ></input>
      </div>
      <div>
        <label htmlFor="status-input"> Status</label>
        <select onChange={dropdownInputHandler}>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
      </div>
      <button onClick={addTaskHandler}> Add Task</button>
      <button onClick={modalClose}> Close</button> */}
    </>
  );
};
export default NewTaskComponent;
