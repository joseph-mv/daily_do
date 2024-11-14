import React, { useEffect, useState } from "react";
import { NavLink } from "./NavLink";

import { Popup } from "../../components";
import { useDispatch, useSelector } from "react-redux";
// import { RootState, useAppDispatch } from "../../redux/store";
import { deleteProjects } from "../../redux/reducers/todoReducer";
import {  addProjectToIdb } from "../../idb/projectService";
import { InitialState } from "../../redux/reducers/type";


const Project: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const projects = useSelector((state:InitialState) => state.projects);
 
  const dispatch = useDispatch();
 
  const handlePopup = () => {
    setShowPopup(!showPopup);
  };
  useEffect(() => {
    addProjectToIdb({id:'projects',projects:projects}) // update project in idb
  }, [projects])
  

  return (
    <div className=" p-3">
      <div className="flex  items-center   justify-between mb-4 border-b-2 p-1 border-black">
        <h3 className="text-xl  font-semibold ">Projects</h3>
        <button
          onClick={handlePopup}
          className={`relative font-bold text-2xl z-50  bg-coral  text-center rounded-full size-10  transition-all hover:scale-110 ${
            showPopup ? "rotate-45" : ""
          }`}
        >
          <i className=" fas fa-plus fa-shake"></i>
        </button>
      </div>

      <ul className="overflow-y-scroll  h-[calc(100vh-500px)] block">
        {projects?.map((project, index) => (
          <NavLink key={index} className="flex justify-between border-b-2 border-coral" href="#home">
            {index + 1} . {project}{" "}
            <button
              onClick={() => {
                dispatch(deleteProjects(index));
              }}
              className="text-brightRed text-lg group hover:rotate-6"
            >
              <i className="fa-solid fa-trash-can "></i>
            </button>
          </NavLink>
        ))}
      </ul>
      <Popup setShowPopup={setShowPopup} showPopup={showPopup} />
      
    </div>
  );
};

export default Project;
