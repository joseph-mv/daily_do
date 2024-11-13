import Header from "./Header";
import TodoList from "./todoList/TodoList";

const Main = () => {
  return (
    <main className="relative overflow-hidden  h-screen  grow w-[50%] ">
      <Header />
      <TodoList />
    </main>
  );
};

export default Main;
