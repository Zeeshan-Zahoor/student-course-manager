import { useState } from "react";
import { addCourse } from "../api";
import { BookOpenIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

export default function AddCourse({ studentName, reload }) {
  const [course, setCourse] = useState("");
  const [marks, setMarks] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = async () => {
    if (!course || !marks) {
      alert("Please fill both course name and marks");
      return;
    }

    if (marks < 0 || marks > 100) {
      alert("Marks must be between 0 and 100");
      return;
    }

    setIsAdding(true);

    try {
      await addCourse({
        name: studentName,
        course: {
          course_name: course,
          marks: Number(marks)
        }
      });

      setCourse("");
      setMarks("");
      reload();
    } catch (error) {
      alert("Error adding course");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <BookOpenIcon className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Add Course</span>
      </div>
      
      <div className="flex gap-2">
        <input
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-200"
          placeholder="Course name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <input
          type="number"
          className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-200"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <button
          onClick={handleAdd}
          disabled={isAdding}
          className="bg-linear-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-200 disabled:opacity-50 flex items-center space-x-1"
        >
          <PlusCircleIcon className="h-4 w-4" />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}