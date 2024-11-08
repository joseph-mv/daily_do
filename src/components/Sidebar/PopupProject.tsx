import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProjects } from "../../redux/reducers/todoReducer";
// import { getProjectsFromIdb } from "../../idb/projectService";

type PopupProps = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

const Popup: React.FC<PopupProps> = ({ showPopup, setShowPopup }) => {
  const [projectName, setProjectName] = useState<string>("");
  const dispatch = useDispatch();


  // getProjectsFromIdb().then(data=>console.log(data))


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setProjectName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProjects(projectName));
    setShowPopup(false);
    setProjectName("");
  };
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    showPopup && (
      <div
        // onMouseLeave={() => setShowPopup(false)}
        className=" absolute top-0  z-40 pt-[60px]"
      >
        <div className="   bg-coral   p-6 rounded-xl shadow-lg w-80">
          <h2 className="text-lg font-semibold mb-4 text-center text-gray-900">
            Add New Project
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="project"
              value={projectName}
              onChange={handleInputChange}
              placeholder="Project Name"
              className="w-full p-2 border bg-gray-200  rounded mb-4"
              required
              autoFocus
              onKeyDown={handleEnter}
            />
            <div className="flex justify-end">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 mr-2  bg-gray-700  text-gray-300 rounded hover:scale-105"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:scale-105">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Popup;
