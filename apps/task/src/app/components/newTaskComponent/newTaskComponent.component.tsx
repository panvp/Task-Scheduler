import { useEffect, useState } from 'react';
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

  
  

  return (
    <>

    </>
  );
};
export default NewTaskComponent;
