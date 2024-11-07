import "./App.css";
import { Sidebar } from "./components";
import Main from "./components/main/Main";

function App() {
  return (
    <div className=" flex ">
      <Sidebar />
      <Main/>
    </div>
  );
}

export default App;
