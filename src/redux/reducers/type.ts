
export type TaskItem = {
    task: string;
    time: string;
    project: string;
    description: string;
  };
  
export  type Day = TaskItem[];
  
export  type Task = TaskItem & {
    dueDate: string;
  };
  

export type InitialState={
    projects:string[]
     todo:Record<string,Day>
}