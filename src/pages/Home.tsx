import { Sidebar } from "../components";
import Main from "../components/main/Main";

function Home() {
  return (
    <div className=" flex ">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Home;
