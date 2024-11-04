import React, { useState } from "react";
import { Link } from "./Link";

import { Popup } from "../../components";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { deleteProjects } from "../../redux/reducers/todoReducer";

const Project: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const projects = useSelector((state: RootState) => state.todo.projects);
  const dispatch = useAppDispatch();
  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="p-3">
      <div className="flex items-center   justify-between mb-4 border-b-2 p-1 border-black">
        <h3 className="text-xl font-semibold ">Projects</h3>
        <button
          onClick={handlePopup}
          className={`font-bold text-2xl z-20  bg-coral  text-center rounded-full size-10  transition-all hover:scale-110 ${
            showPopup ? "rotate-45" : ""
          }`}
        >
          <i className=" fas fa-plus fa-shake"></i>
        </button>
      </div>

      <ul className="overflow-y-scroll  h-[calc(100vh-500px)] block">
        {projects.map((project, index) => (
          <Link key={index} className="flex justify-between border-b-2 border-coral" href="#home">
            {index + 1} . {project}{" "}
            <button
              onClick={() => {
                dispatch(deleteProjects(index));
              }}
              className="text-brightRed text-lg group hover:rotate-6"
            >
              <i className="fa-solid fa-trash-can "></i>
            </button>
          </Link>
        ))}
      </ul>
      <Popup setShowPopup={setShowPopup} showPopup={showPopup} />
    </div>
  );
};

export default Project;
