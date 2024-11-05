import { TaskItem } from "../redux/reducers/type";
import dbPromise from "./indexedDB";

export type Todo = { date: string , todo:TaskItem[]};

export const addTodoToDb = async (todoArr: Todo) => {
  const db = await dbPromise;
  await db.put("todo", todoArr);
};

export const getAllTodo=async()=>{
    const db=await dbPromise
    const todo=await db.getAll('todo')
    // console.log(todo)
    const todoObj=todo.reduce((acc,item)=>({...acc,[item.date]:item.todo}),{})
    console.log(todoObj)
    return todoObj
}
