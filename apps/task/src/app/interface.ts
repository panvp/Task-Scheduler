export interface taskListType{
    title: string;
    desciption: string;
    dropdownValue: string;
}

export interface ViewAllTaskPropsType{
    allTaskList: Array<taskListType>;
    deleteTaskHandler: (index: number) => void;
    editTaskHandler: (index: number) => void;
    filterValue: string;
}
export interface newTaskPropsType{
    isEdit: boolean;
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
    indexToEdit: number;
    taskToBeEdited: taskListType; 
    setAllTaskList: React.Dispatch<React.SetStateAction<Array<taskListType>>>;
}

