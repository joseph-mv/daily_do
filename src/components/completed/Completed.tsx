import { useSelector } from "react-redux";
import { InitialState } from "../../redux/reducers/type";
import Todo from "../main/todoList/Todo";
import { comingDay, formerDay, today } from "../../utils";
import { useUpdateIDb } from "../../hooks/useUpdateIDb";
import { useMemo } from "react";

const Completed = () => {
 
  const todos = useSelector((store: InitialState) => store.todo);

  const dueDateArr:string[] = useMemo(()=>Object.keys(todos).filter(date=>date.split('-').reverse().join('')<=today.split('-').reverse().join('') && todos[date].count).sort((a,b)=>(+a.split('-').reverse().join(''))-(+b.split('-').reverse().join(''))),[todos]);
 
  useUpdateIDb()
  return (
    <div className="relative overflow-auto    grow w-[50%]">
      
      <h1 className="mt-6 text-4xl font-semibold text-center">Completed</h1>
      <ul className="">
        {dueDateArr.map((dueDate, i) => (
          <div className="border-b-2" key={i}>
          <h2 className="ml-4">{dueDate}</h2>
            <ul className="m-4 grid p-2 overflow-auto max-h-[90%]   grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]  gap-4">
              {todos[dueDate].completed? todos[dueDate].todoList.map((todo, index) => (
              todo.checked &&  <Todo
                  key={index}
                  dueDate={dueDate}
                  todo={todo}
                  index={index}
                  comingDay={comingDay(dueDate)}
                  formerDay={formerDay(dueDate)}
                />
              )):'You have not completed a single task'}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Completed;
