import dbPromise from './indexedDB';



export const addProjectToIdb=async(projects: {
    id:string,
    projects:string[]
})=>{

    console.log(projects)
    const db = await dbPromise;
    await db.put('project', projects);
}

export const getProjectsFromIdb=async()=>{
    const db=await dbPromise
 const pro=await db.get('project','projects')
 console.log('pro get',pro)
 return pro?.projects

}