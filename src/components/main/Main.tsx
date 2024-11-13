
import { useState } from "react";
import Header from "./Header";
import TodoList from "./todoList/TodoList";

const Main = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <main className="relative overflow-hidden  h-screen  grow w-[50%] ">
      <Header date={date} setDate={setDate} />
      <TodoList date={date}/>
    </main>
  );
};

export default Main;
