import React, { useState } from 'react';
import style from './home.module.css';
import NewTaskComponent from '../newTaskComponent/newTaskComponent.component';
import ViewAllTaskComponent from '../viewAllTaskComponent/viewAllTaskComponent.component';

const Home = () => {
    const [allTaskList, setAllTaskList] = useState();

  const newTaskModalHandler = () => {
    const modal: any = document.querySelector('.modal-newTask');
    modal.showModal();
  };
  const viewTaskModalHandler = () => {
    const modal: any = document.querySelector('.modal-viewTask');
    modal.showModal();
  };

  return (
    <>


    
      {/* <dialog className={`${style.modal} modal-newTask`}><NewTaskComponent setAllTaskList={setAllTaskList} /></dialog>
      <dialog className={`${style.modal} modal-viewTask`}><ViewAllTaskComponent allTaskList={allTaskList}/></dialog>
      <h1> Task Scheduler</h1>
      <div className={style.container}>
        <div className={style.center}>
          <button className={style.button} onClick={newTaskModalHandler}>Add Task</button>
          <button className={style.button} onClick={viewTaskModalHandler}> View All Tasks</button>
        </div>
      </div> */}
    </>
  );
};
export default Home;
