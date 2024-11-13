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
        for (let i = 0; i < state.todo[dueDate].length; i++) {
          if (state?.todo[dueDate][i].time <= rest.time) {
            continue;
          } else {
            [todoElement, state.todo[dueDate][i]] = [
              state.todo[dueDate][i],
              todoElement,
            ];
          }
        }

        state.todo[dueDate].push(todoElement);
      } else {
        state.todo[dueDate] = [rest];
      }
    },
    deleteTodo:(state,action:PayloadAction<{dueDate:string,index:number}>)=>{
     const {dueDate,index} =action.payload
      state.todo[dueDate].splice(index,1)
    },
    checkTodo:(state,action:PayloadAction<{dueDate:string,index:number}>)=>{
      const {dueDate,index} =action.payload
       state.todo[dueDate][index].checked=!state.todo[dueDate][index].checked
     },
  },
});

export const { addProjects, deleteProjects, addTodo,deleteTodo,checkTodo } = todoSlice.actions;
export default todoSlice.reducer;
