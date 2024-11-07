
import Header from "./Header";
import TodoList from "./TodoList";

const Main = () => {
  return (
    <main className="relative -z-10 h-screen  grow w-[50%] ">
      <Header />
      <TodoList/>
    </main>
  );
};

export default Main;
