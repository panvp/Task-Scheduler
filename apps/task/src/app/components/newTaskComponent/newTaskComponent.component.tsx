import { useEffect, useState } from 'react';
import './newTaskComponent.component.css';
const NewTaskComponent = (props: any) => {
  const { setAllTaskList } = props;
  const [title, setTitle] = useState<string>('');
  const [desciption, setDesciption] = useState<string>('');
  const [dropdown, setDropdown] = useState<string>('');
  const modalClose = (event: any) => {
    const modal: any = document.querySelector('.modal-newTask');
    modal.showModal();
  };

  return (
    <>
      <button onClick={modalClose}> Open</button>
      <dialog className="modal-newTask">
        <div className="m-4 p-4 md:mt-4 md:mb-8 md:p-8 flex flex-col justify-around items-start">
          <h1 className="text-2xl font-bold self-center"> Add a new task</h1>
            <div className="flex flex-wrap mt-2 md:mt-4">
              <div className="">
                <label className='' htmlFor='titleInput'> Task Name: </label>
                <input type="text" id="titleInput" size={12} placeholder="Enter name here" className='' />
              </div>
              <select value="In Progress" className=''>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </div>
            <div className="mt-2 md:mt-4">
              <label className='' htmlFor='titleInput'> Task Description: </label>
              <input type="text" id="titleInput" placeholder="Enter here" className='' />
            </div>
            <div className="text-white bg-blue-700 font-medium rounded-lg text-sm px-2 md:px-8 py-2 mt-2 md:mt-4 text-center self-center">
            <button> Save Changes</button>
            </div>
        </div>
      </dialog>
    </>
  );
};
export default NewTaskComponent;
