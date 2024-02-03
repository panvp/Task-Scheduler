import { useEffect, useState } from 'react';
import './newTaskComponent.component.css';
import { newTaskPropsType } from '../../interface';
const NewTaskComponent = (props: newTaskPropsType) => {
  const { setAllTaskList, isEdit, taskToBeEdited, indexToEdit, setIsEdit } = props;
  const [title, setTitle] = useState<string>('');
  const [desciption, setDesciption] = useState<string>('');
  const [dropdownValue, setDropdownValue] = useState<string>('To Do');

  const heading = isEdit ? "Edit your task" : "Add your task";
  const buttonName = isEdit? "Update task" : "Add task";

  useEffect(()=>{
    if(isEdit){
      const{ title, desciption, dropdownValue } = taskToBeEdited;
      setTitle(title);
      setDesciption(desciption);
      setDropdownValue(dropdownValue)
    }

  },[isEdit])

  const titleOnChangeHandler = (event: any) =>{
    // let element = event.target as HTMLInputElement;
    setTitle(event.target.value);
  }
  const descriptionOnChangeHandler = (event: any) =>{
    setDesciption(event.target.value);
  }
  const dropdownChangeHandler = (event: any) =>{
    setDropdownValue(event.target.value);
  }

  const closeModal = () =>{
    const modal: any = document.querySelector('.modal-newTask');
    modal.close();
    setTitle('');
    setDesciption('');
    setDropdownValue('To Do');
  }

  const saveClickHandler = () => {
    if (isEdit) editTaskHandler();
    else {
      setAllTaskList((prev) => {
        return [...prev, { title, desciption, dropdownValue }];
      });
      closeModal();
      
    }
  };

  const editTaskHandler = () =>{
    setAllTaskList((prev) =>{
      const preIndexList = prev.slice(0,indexToEdit);
      const postIndexList = prev.slice(indexToEdit+1, prev.length);
      return [...preIndexList,{title,desciption,dropdownValue},...postIndexList]
    })
    closeModal();
    setIsEdit(false);


  }

  return (
    <>
      <dialog className="modal-newTask">
        <div className="m-4 p-4 md:mt-4 md:mb-8 md:p-8 flex flex-col justify-around items-start">
          <h1 className="text-2xl font-bold self-center"> {heading}</h1>
            <div className="flex flex-wrap mt-2 md:mt-4">
              <div className="">
                <label className='' htmlFor='titleInput'> Task Name: </label>
                <input type="text" id="titleInput" size={12} value={title} placeholder="Enter name here" onChange={titleOnChangeHandler} />
              </div>
              <select value={dropdownValue} onChange={dropdownChangeHandler}>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </div>
            <div className="mt-2 md:mt-4">
              <label className='' htmlFor='titleInput'> Task Description: </label>
              <input type="text" id="titleInput" value={desciption} onChange={descriptionOnChangeHandler} placeholder="Enter here" className='' />
            </div>
            <div className="text-white bg-blue-700 font-medium rounded-lg text-sm px-2 md:px-8 py-2 mt-2 md:mt-4 text-center self-center">
            <button onClick={saveClickHandler}> {buttonName}</button>
            </div>
        </div>
      </dialog>
    </>
  );
};
export default NewTaskComponent;
