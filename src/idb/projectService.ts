import dbPromise from "./indexedDB";

export const addProjectToIdb = async (projects: {
  id: string;
  projects: string[];
}) => {
  const db = await dbPromise;
  await db.put("project", projects);
};

export const getProjectsFromIdb = async () => {
  const db = await dbPromise;
  const key = "projects";
  const pro = await db.get("project", key);

  return pro?.projects;
};
