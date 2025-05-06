// // todoSlice.test.ts
// import { describe, it, expect } from 'vitest';
// import  { InitialState, Task } from '../../src/redux/reducers/type';
// import todoReducer, { addProjects, addTodo, checkTodo, deleteProjects, deleteTodo } from '../../src/redux/reducers/todoReducer';


// const initialState: InitialState = {
//   projects: [],
//   todo: {},
// };

// describe('todoSlice', () => {
//   it('should return the initial state when passed an empty action', () => {
//     const result = todoReducer(undefined, { type: '' });
//     expect(result).toEqual(initialState);
//   });

//   it('should add a project', () => {
//     const projectName = 'New Project';
//     const action = addProjects(projectName);
//     const state = todoReducer(initialState, action);

//     expect(state.projects).toContain(projectName);
//   });

//   it('should delete a project', () => {
//     const initialStateWithProjects = {
//       ...initialState,
//       projects: ['Project 1', 'Project 2'],
//     };
//     const action = deleteProjects(0); // Delete 'Project 1'
//     const state = todoReducer(initialStateWithProjects, action);

//     expect(state.projects).toEqual(['Project 2']);
//   });

//   it('should add a todo to a dueDate', () => {
//     const task: Task = { task: 'Task 1', dueDate: '2024-12-01',project:'Home',checked:false,time:'10:24', description:"" };
//     const action = addTodo(task);
//     const state = todoReducer(initialState, action);

//     expect(state.todo['2024-12-01']).toBeDefined();
//     expect(state.todo['2024-12-01'].count).toBe(1);
//   });

//   it('should add a new todo to an existing dueDate', () => {
//     const initialStateWithTodo = {
//       ...initialState,
//       todo: {
//         '2024-12-01': {
//           todoList: [{ time: 8, title: 'Task 2' }],
//           count: 1,
//           completed: 0,
//         },
//       },
//     };

//     const newTask: Task = { task: 'Task 1', dueDate: '2024-12-01',project:'Home',checked:false,time:'10:24', description:"" };
  
//     const action = addTodo(newTask);
//     const state = todoReducer(initialStateWithTodo, action);
//     expect(state.todo['2024-12-01'].count).toBe(2);
//   });

//   it('should delete a todo from a specific dueDate', () => {
//     const initialStateWithTodo = {
//       ...initialState,
//       todo: {
//         '2024-12-01': {
//           todoList: [{ time: 8, title: 'Task 1' }, { time: 9, title: 'Task 2' }],
//           count: 2,
//           completed: 0,
//         },
//       },
//     };
//     const action = deleteTodo({ dueDate: '2024-12-01', index: 0 });
//     const state = todoReducer(initialStateWithTodo, action);

//     expect(state.todo['2024-12-01'].todoList).toHaveLength(1);
//     expect(state.todo['2024-12-01'].count).toBe(1);
//   });

//   it('should toggle the completed status of a todo', () => {
//     const initialStateWithTodo = {
//       ...initialState,
//       todo: {
//         '2024-12-01': {
//           todoList: [{ time: 8, title: 'Task 1', checked: false }],
//           count: 1,
//           completed: 0,
//         },
//       },
//     };
//     const action = checkTodo({ dueDate: '2024-12-01', index: 0 });
//     const state = todoReducer(initialStateWithTodo, action);

//     expect(state.todo['2024-12-01'].todoList[0].checked).toBe(true);
//     expect(state.todo['2024-12-01'].completed).toBe(1); // Completed count should increase
//   });

//   it('should decrease the completed count when unchecking a todo', () => {
//     const initialStateWithTodoChecked = {
//       ...initialState,
//       todo: {
//         '2024-12-01': {
//           todoList: [{ time: 8, title: 'Task 1', checked: true }],
//           count: 1,
//           completed: 1,
//         },
//       },
//     };

//     const action = checkTodo({ dueDate: '2024-12-01', index: 0 });
//     const state = todoReducer(initialStateWithTodoChecked, action);

//     expect(state.todo['2024-12-01'].todoList[0].checked).toBe(false);
//     expect(state.todo['2024-12-01'].completed).toBe(0); // Completed count should decrease
//   });
// });
