import { useState } from "react";
import { HomeIcon, ChartBarIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

export default function Navbar({ setPage }) {
  const [activePage, setActivePage] = useState("home");

  const handlePageChange = (page) => {
    setActivePage(page);
    setPage(page);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <AcademicCapIcon className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Student Manager
            </h1>
          </div>

          <div className="flex space-x-1">
            <button
              onClick={() => handlePageChange("home")}
              className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                activePage === "home"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <HomeIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => handlePageChange("compare")}
              className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                activePage === "compare"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ChartBarIcon className="h-5 w-5" />
              <span>SQL vs MongoDB</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}