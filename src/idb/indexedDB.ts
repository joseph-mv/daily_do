import { openDB, DBSchema } from "idb";
import { Day, InitialState } from "../redux/reducers/type";
import { getProjectsFromIdb } from "./projectService";
import { getAllTodo } from "./todoService";

// import { Day } from '../redux/reducers/type';

interface MyDB extends DBSchema {
  project: {
    key: string;
    value: {
      id: string;
      projects: string[];
    };
  };
  todo: {
    key: string;
    value: Day& {date:string}
  };
}

const dbPromise = openDB<MyDB>("dailyDo-database", 1, {
  upgrade(db) {
    // Create the 'project' object store
    db.createObjectStore("project", {
      keyPath: "id",
    });

    // Create the 'todo' object store
    db.createObjectStore("todo", {
      keyPath: "date",
    });
  },
});

export const loadInitialState = async (): Promise<InitialState> => {
  const projects = (await getProjectsFromIdb()) ?? ["Home"];
  const todo = (await getAllTodo()) || {};

  return {
    projects,
    todo,
  };
};

export default dbPromise;
