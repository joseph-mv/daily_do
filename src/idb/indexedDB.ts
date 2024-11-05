import { openDB, DBSchema } from "idb";
import { InitialState } from "../redux/reducers/type";
import { getProjectsFromIdb } from "./projectService";
// import { Day } from '../redux/reducers/type';

interface MyDB extends DBSchema {
  project: {
    key: "str";
    value: {
      id: string;
      projects: string[];
    };
  };
}

const dbPromise = openDB<MyDB>("dailyDo-database", 1, {
  upgrade(db) {
    db.createObjectStore("project", {
      keyPath: "id",
    });
  },
});

export const loadInitialState = async (): Promise<InitialState> => {
  const projects = await getProjectsFromIdb() ?? ['']
  // const todo = await db.get('todo', 'default') as Record<string, Todo> || {};
  const todo = {
    a: [{ task: "str", time: "str", project: "str", description: "str" }],
  };

  return {
    projects,
    todo,
  };
};

export default dbPromise;
