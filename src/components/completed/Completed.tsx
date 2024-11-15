import { useSelector } from "react-redux";
import { InitialState } from "../../redux/reducers/type";
import Todo from "../main/todoList/Todo";
import { comingDay, formerDay } from "../../utils";
import { useUpdateIDb } from "../../hooks/useUpdateIDb";
import { useMemo } from "react";

const Completed = () => {
 
  const todos = useSelector((store: InitialState) => store.todo);

  const dueDateArr:string[] = useMemo(()=>Object.keys(todos).filter(date=>todos[date].count).sort((a,b)=>(+a.split('-').reverse().join(''))-(+b.split('-').reverse().join(''))),[todos]);
 
 console.log(dueDateArr)
  useUpdateIDb()
  return (
    <div className="relative overflow-auto bg-white   grow w-[50%]">
      Completed
      <ul>
        {dueDateArr.map((dueDate, i) => (
          <div key={i}>
            {dueDate}
            <ul>
              {todos[dueDate].todoList.map((todo, index) => (
                <Todo
                  key={index}
                  dueDate={dueDate}
                  todo={todo}
                  index={index}
                  comingDay={comingDay(dueDate)}
                  formerDay={formerDay(dueDate)}
                />
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Completed;
