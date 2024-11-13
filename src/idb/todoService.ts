
import { Day } from "../redux/reducers/type";
import dbPromise from "./indexedDB";

export type Todo =Day & {date:string};

export const addTodoToDb = async (todo: Todo) => {
  console.log(todo)
  const db = await dbPromise;
  await db.put("todo", todo);
};

export const getAllTodo=async()=>{
    const db=await dbPromise
    const todo=await db.getAll('todo')
    const todoObj=todo.reduce((acc,item)=>{
      const {date,...rest}=item
      return{...acc,[date]:rest}},{})
    return todoObj
}

export const deleteTodoInDb=async(date:string,index:number)=>{
const db=await dbPromise
const todo=await db.get("todo",date) as Todo
todo?.todoList.splice(index,1)
await db.put("todo",todo)
}

// export const checkTodoInDb=async(date:string,index:number)=>{
//   const db=await dbPromise
//   const todo=await db.get("todo",date) as Todo
//   todo.todo[index].checked =!todo.todo[index].checked 
//   await db.put("todo",todo)
//   }