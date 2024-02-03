import React, { useState } from 'react';
import './home.component.css';
import NewTaskComponent from '../newTaskComponent/newTaskComponent.component';
import ViewAllTaskComponent from '../viewAllTaskComponent/viewAllTaskComponent.component';
import { taskListType } from '../../interface';

const Home = () => {
  const [allTaskList, setAllTaskList] = useState<Array<taskListType>>([]);
  const [taskToBeEdited, setTaskToBeEdited] = useState<taskListType>(allTaskList[0]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [indexToEdit, setIndexToEdit] = useState<number>(-1);
  const [filterValue, setFilterVAlue] = useState<string>("All");

  const addTaskHandler = () => {
    setIsEdit(false);
    openModal();
  };

  const openModal = () =>{
    const modal: any = document.querySelector('.modal-newTask');
    modal.showModal();
  }
  
  const editTaskHandler = (index: number) =>{
    setIsEdit(true);
    setTaskToBeEdited(allTaskList[index]);
    setIndexToEdit(index);
    openModal();

  }

  const deleteTaskHandler = (index: number) => {
    setAllTaskList((prev) => {
      let newTaskList = [...prev];
      newTaskList.splice(index,1);
      return newTaskList;
    })

  }

  const onFilterChangeHandler = (event: any) =>{
    setFilterVAlue(event.target.value)
  }

  return (
    <>
      <div className="bg-sky-100 flex flex-col items-center">
        <div className="p-8 text-4xl font-bold">Task Scheduler</div>
        <NewTaskComponent isEdit={isEdit} setIsEdit={setIsEdit} indexToEdit={indexToEdit} taskToBeEdited={taskToBeEdited} setAllTaskList={setAllTaskList} />
        <div className="taskList">
          <div className="flex justify-between">
            <button
              type="button"
              onClick={addTaskHandler}
              className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Add Task
            </button>

            <select className="text-blue-600 font-medium rounded-lg text-sm  px-5 py-2.5 me-2 mb-2 cursor-pointer" onChange={onFilterChangeHandler}>
              <option className="font-medium"> All</option>
              <option className="font-medium rounded-lg"> To Do</option>
              <option className="font-medium rounded-lg"> In Progress</option>
              <option className="font-medium rounded-lg"> Done</option>
            </select>
          </div>  
          <div className="my-8 bg-slate-200">
            <ViewAllTaskComponent filterValue={filterValue} deleteTaskHandler={deleteTaskHandler} editTaskHandler={editTaskHandler} allTaskList={allTaskList} />
          </div>
        </div>
      
      </div>
    </>
  );
};
export default Home;
