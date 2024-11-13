import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components";
import Main from "./components/main/Main";
import { DateContext } from "./contextAPI/context";

function App() {
  const [date, setDate] = useState<Date>(new Date());
 
  return (
    <div className=" flex ">
      <DateContext.Provider value={{date,setDate}} >
        <Sidebar />
        <Main />
      </DateContext.Provider>
    </div>
  );
}

export default App;
