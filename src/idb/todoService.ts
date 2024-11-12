import { TaskItem } from "../redux/reducers/type";
import dbPromise from "./indexedDB";

export type Todo = { date: string , todo:TaskItem[]};

export const addTodoToDb = async (todo: Todo) => {
  const db = await dbPromise;
  await db.put("todo", todo);
};

export const getAllTodo=async()=>{
    const db=await dbPromise
    const todo=await db.getAll('todo')
    // console.log(todo)
    const todoObj=todo.reduce((acc,item)=>({...acc,[item.date]:item.todo}),{})
    // console.log(todoObj)
    return todoObj
}
export const deleteTodoInDb=async(date:string,index:number)=>{
const db=await dbPromise
const todo=await db.get("todo",date) as Todo
todo?.todo.splice(index,1)
await db.put("todo",todo)
}