import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/reducers/todoReducer";
import { RootState } from "../../redux/store";
import { addTodoToDb } from "../../idb/todoService";

type TaskPopupProps = {
  setIsTaskPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

type TaskForm = {
  task: string;
  dueDate: string;
  time: string;
  project: string;
  description: string;
  checked:boolean
};

const TaskPopup: FC<TaskPopupProps> = ({ setIsTaskPopup }) => {
  const projects = useSelector((state: RootState) => state.projects);
  const todo = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const [taskForm, setTaskForm] = useState<TaskForm>({
    task: "",
    dueDate: "",
    time: "",
    project: "",
    description: "",
    checked:false
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { value, name } = e.target;
    setTaskForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    taskForm.dueDate = taskForm.dueDate.split("-").reverse().join("-");
    dispatch(addTodo(taskForm));
    const { dueDate, ...rest } = taskForm;
    addTodoToDb({ date: dueDate, todo: [...(todo[dueDate] || []), rest] });
    setIsTaskPopup(false);
  };

  return (
    <div className="fixed w-screen z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      
      <div className="relative bg-coral p-6 z-10 rounded-lg shadow-lg w-full text-black max-w-md">
        <button
          onClick={() => setIsTaskPopup(false)}
          className="absolute right-3 top-4 font-bold text-2xl bg-lightYellow text-center rounded-full size-10 transition-all hover:scale-110"
        >
          <i className="fas fa-times"></i>
        </button>
        <h2 className="text-2xl font-bold mb-4">Add Task</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="task" className="block text-gray-700">
              Task:
            </label>
            <input
              id="task"
              name="task"
              type="text"
              value={taskForm.task}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
              autoFocus
            />
          </div>
          <div className="mb-4 flex gap-1 justify-between items-center">
            <div>
              <label htmlFor="dueDate" className="block text-gray-700">
                Due Date:
              </label>
              <input
                id="dueDate"
                name="dueDate"
                type="date"
                value={taskForm.dueDate}
                onChange={handleChange}
                className="bg-white w-36 px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-gray-700">
                Time:
              </label>
              <input
                id="time"
                name="time"
                type="time"
                value={taskForm.time}
                onChange={handleChange}
                className="bg-white w-24 px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="shrink">
              <label htmlFor="project" className="block text-gray-700">
                Project:
              </label>
              <select
                id="project"
                name="project"
                value={taskForm.project}
                onChange={handleChange}
                className="px-3 py-2 border rounded"
              >
                <option value="">Select</option>
                {projects?.map((project, index) => (
                  <option key={index} value={project}>
                    {project}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block text-gray-700">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={taskForm.description}
              onChange={handleChange}
              className="px-3 py-2 border rounded w-full"
              rows={2}
              placeholder="Enter description"
            ></textarea>
          </div>
          <button className="text-lg font-semibold bg-brightRed rounded-lg w-full mt-3 p-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskPopup;
