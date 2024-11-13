import { useSelector } from "react-redux";
import { InitialState } from "../../../redux/reducers/type";
import { dateToDay, dateToString } from "../utils";
import Todo from "./Todo";

type TodoListProps = {
  date: Date;
};

const TodoList: React.FC<TodoListProps> = ({ date }) => {
  const dueDate = dateToString(date);
  const todoList = useSelector((store: InitialState) => store.todo[dueDate]);

  return (
    <div className=" relative bg-coral p-3 mx-3    rounded-xl h-[83%]">
      <div className="flex flex-col absolute right-2 font-semibold">
        <span className="">{dateToString(date)} </span>
        <span> {dateToDay(date)}</span>
      </div>

      <h1 className=" text-center mb-3 font-semibold  text-2xl">Todo_List</h1>
      <h2 className="text-center font-semibold">
        Review and update your tasks for the day.
      </h2>
      <ul className="m-4 grid p-2 overflow-auto max-h-[90%]  grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]  gap-4 ">
        {todoList?.map((todo, index) => {
          return (
            <Todo key={index} dueDate={dueDate} index={index} todo={todo} />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
