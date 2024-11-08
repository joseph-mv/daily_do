import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import { Link } from "./Link";
import Project from "./Project";
import TaskPopup from "./TaskPopup";

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(
    () => window.innerWidth > 640
  );
  const [isTaskPopup, setIsTaskPopup] = useState<boolean>(false);

  // Function to toggle the sidebar open/close state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to detect if the user is on a mobile device
  const isMobileDevice = () => {
    console.log(navigator.userAgent);
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  // Handle window resize to conditionally show/hide the sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    if (!isMobileDevice()) {
      // Add resize event listener only for non-mobile devices
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Toggle Button */}

      <button
        className={`fixed z-20   top-2 ${
          isSidebarOpen ? "left-52" : "left-2"
        }`}
        onClick={toggleSidebar}
      >
        <img
          className={isSidebarOpen ? "rotate-180" : ""}
          src="/images/toggle-right-svgrepo-com.svg"
          alt="Toggle Sidebar"
        />
      </button>

      {isTaskPopup && <TaskPopup setIsTaskPopup={setIsTaskPopup} />}

      {/* Sidebar */}
      <aside
        className={`relative z-10 shrink-0 transition-all duration-300 ease-in-out ${
          isSidebarOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 hidden"
        } bg-softOrange text-black w-64 h-screen p-4`}
      >
        {/* Logo and Title */}
        <div className="flex items-center mb-8">
          <img src="vite.svg" alt="Logo" className=" w-12 h-12 mr-2" />
          <h1 className=" text-2xl font-semibold">Daily-Do</h1>
        </div>

        {/* Task Popup Button */}
        <div>
          <button
            onClick={() => setIsTaskPopup(true)}
            className="w-full group bg-brightRed text-white py-2 rounded mb-4"
          >
            <span className="hidden transition-all group-hover:inline group-active:inline">
              <i className="fas fa-plus mr-2"></i>
            </span>
            Add Task
          </button>

          {/* Navigation Links */}
          <nav>
            <ul>
              <Link href="#user">
                <i className="fas fa-user mr-2"></i> User
              </Link>
              <Link href="#upcoming">
                <i className="fas fa-calendar-alt mr-2"></i> Upcoming
              </Link>
              <Link href="#completed">
                <i className="fas fa-check mr-2"></i> Completed
              </Link>
            </ul>
          </nav>

          {/* Search Bar */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full p-2 rounded bg-gray-200 text-gray-700 mb-4"
            />
          </div>

          {/* Project Component */}
          <div className="relative ">
            <Project />
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="absolute bottom-4">
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
