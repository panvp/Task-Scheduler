import React, { useState } from 'react';
import './home.component.css';
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
      <div className="bg-sky-100 flex flex-col items-center">
        <div className="p-8 text-4xl font-bold">Task Scheduler</div>
        <NewTaskComponent />
        <div className="taskList">
          <div className="flex justify-between">
            <button
              type="button"
              className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Add Task
            </button>

            <select className="text-blue-600 font-medium rounded-lg text-sm  px-5 py-2.5 me-2 mb-2 cursor-pointer">
              <option className="font-medium"> A</option>
              <option className="font-medium rounded-lg"> A</option>
              <option className="font-medium rounded-lg"> A</option>
              <option className="font-medium rounded-lg"> A</option>
            </select>
          </div>  
          <div className="my-8 bg-slate-200">
            <ViewAllTaskComponent />
          </div>
        </div>
      
      </div>
    </>
  );
};
export default Home;
