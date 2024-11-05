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
        state.todo[dueDate].push(rest);
      } else {
        state.todo[dueDate] = [rest];
      }
    },
  },
});

export const { addProjects, deleteProjects, addTodo } = todoSlice.actions;
export default todoSlice.reducer;
