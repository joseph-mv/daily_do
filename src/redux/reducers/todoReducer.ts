import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, Task } from "./type";

const initialState: InitialState = {
  projects: [],
  todo: {},
};


const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addProjects: (state, action: PayloadAction<string>) => {
      state.projects.push(action.payload);
    },
    deleteProjects: (state, action: PayloadAction<number>) => {
      state.projects.splice(action.payload, 1);
    },
    addTodo: (state, action: PayloadAction<Task>) => {
      const { dueDate, ...rest } = action.payload;
      if (state.todo[dueDate]) {
        let todoElement = rest;
        for (let i = 0; i < state.todo[dueDate].todoList.length; i++) {
          if (state?.todo[dueDate].todoList[i].time <= rest.time) {
            continue;
          } else {
            [todoElement, state.todo[dueDate].todoList[i]] = [
              state.todo[dueDate].todoList[i],
              todoElement,
            ];
          }
        }
        ++state.todo[dueDate].count
        state.todo[dueDate].todoList.push(todoElement);
      } else {
        state.todo[dueDate] = {todoList:[rest],count:1,completed:0};
      }
    },
    deleteTodo:(state,action:PayloadAction<{dueDate:string,index:number}>)=>{
     const {dueDate,index} =action.payload
      state.todo[dueDate].todoList.splice(index,1)
      --state.todo[dueDate].count
    },
    checkTodo:(state,action:PayloadAction<{dueDate:string,index:number}>)=>{
      const {dueDate,index} =action.payload
      console.log(state.todo[dueDate].todoList[index].checked)
      if(state.todo[dueDate].todoList[index].checked){
        --state.todo[dueDate].completed
      }else{
        
        ++state.todo[dueDate].completed
      }
       state.todo[dueDate].todoList[index].checked=!state.todo[dueDate].todoList[index].checked
     },
  },
});

export const { addProjects, deleteProjects, addTodo,deleteTodo,checkTodo } = todoSlice.actions;
export default todoSlice.reducer;
