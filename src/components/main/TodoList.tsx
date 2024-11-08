import { useSelector } from "react-redux";
import { InitialState } from "../../redux/reducers/type";

const TodoList: React.FC = () => {
  const todoList = useSelector(
    (store: InitialState) => store.todo["07-11-2024"]
  );

  return (
    <div className=" relative bg-coral p-3 m-3   rounded h-[80%]">
      <h1 className=" text-center mb-3 font-semibold  text-2xl">Todo_List</h1>
      <ul className="m-4 grid p-2 overflow-auto max-h-[90%]  grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]  gap-4 ">
        {todoList?.map((todo) => {
          return (
            <div className="flex w-[360px] min-h-28 overflow-hidden  m-auto items-center justify-between pl-4 bg-white shadow-md rounded-lg mb-4 ">
              <div className=" flex m-2   items-center">
                <input
                  type="checkbox"
                  //   checked={completed}
                  //   onChange={(e) => onToggle(e.target.checked)}
                  className="mr-4 shrink-0 form-checkbox h-5 w-5 text-blue-600"
                />
                <div className="overflow-hidden w-52 ">  
                  <h3 className="text-lg truncate text-black font-semibold">
                    {todo.task}
                  </h3>
                  <p className="text-sm truncate text-gray-500" >
                    <span className=" w-20 inline-block font-semibold">Time:</span>
                    {todo.time}
                  </p>
                  <p className="text-sm   truncate  text-gray-600" title={todo.description}>
                    <span className=" w-20 inline-block font-semibold">Description:</span>
                    {todo.description}
                  </p>
                  <p className="text-sm truncate text-gray-400 italic">
                    <span className="not-italic w-20 inline-block font-semibold">Project:</span>
                    {todo.project}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-5 w-20 shrink-0 h-28   bg-softOrange  space-x-2">
                <button
                  //   onClick={onEdit}
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <i className="fa-solid fa-pencil"></i>
                </button>
                <button
                  //   onClick={onDelete}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
