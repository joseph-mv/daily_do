
export type TaskItem = {
    task: string;
    time: string;
    project: string;
    description: string;
    checked:boolean
  };
  
export  type Day ={todoList: TaskItem[],count:number,completed:number};
  
export  type Task = TaskItem & {
    dueDate: string;
  };
  

export type InitialState={
    projects:string[]
     todo:Record<string,Day>
}