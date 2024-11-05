import { openDB, DBSchema } from 'idb';
// import { Day } from '../redux/reducers/type';

interface MyDB extends DBSchema {
  project: {
    key: string;
    value: {
        id:string,
        projects:string[]
    }
  };
}

const dbPromise = openDB<MyDB>('dailyDo-database', 1, {
  upgrade(db) {
    db.createObjectStore('project', {
      keyPath: 'id',
    });
  },
});

export default dbPromise;
