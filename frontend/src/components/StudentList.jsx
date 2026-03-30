import { useEffect, useState } from "react";
import { getStudents, deleteStudent, updateStudent } from "../api";
import AddCourse from "./AddCourse";
import { MagnifyingGlassIcon, UserCircleIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (error) {
      console.error("Error loading students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      try {
        await deleteStudent(id);
        load();
      } catch (error) {
        alert("Error deleting student");
      }
    }
  };

  const handleUpdate = async (id) => {
    const newName = prompt("Enter new name:");
    const newAge = prompt("Enter new age:");

    if (!newName || !newAge) return;

    try {
      await updateStudent(id, {
        name: newName,
        age: Number(newAge)
      });
      load();
    } catch (error) {
      alert("Error updating student");
    }
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const getAverageMarks = (courses) => {
    if (!courses.length) return 0;
    const total = courses.reduce((sum, c) => sum + c.marks, 0);
    return (total / courses.length).toFixed(1);
  };

  const getGradeColor = (marks) => {
    if (marks >= 85) return "text-green-600";
    if (marks >= 70) return "text-blue-600";
    if (marks >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={search}
            placeholder="Search students by name..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-linear-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
          <div className="text-sm opacity-90">Total Students</div>
          <div className="text-3xl font-bold">{students.length}</div>
        </div>
        <div className="bg-linear-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
          <div className="text-sm opacity-90">Total Courses</div>
          <div className="text-3xl font-bold">
            {students.reduce((sum, s) => sum + s.courses.length, 0)}
          </div>
        </div>
        <div className="bg-linear-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
          <div className="text-sm opacity-90">Average GPA</div>
          <div className="text-3xl font-bold">
            {(students.reduce((sum, s) => sum + parseFloat(getAverageMarks(s.courses)), 0) / students.length || 0).toFixed(1)}
          </div>
        </div>
      </div>

      {/* Students Grid */}
      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-500">Loading students...</p>
        </div>
      ) : filteredStudents.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <UserCircleIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No students found</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((s) => (
            <div
              key={s._id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header */}
              <div className="bg-linear-to-r from-gray-800 to-gray-900 p-4 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{s.name}</h3>
                    <p className="text-sm opacity-75">Age: {s.age} years</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{getAverageMarks(s.courses)}</div>
                    <div className="text-xs opacity-75">Average Marks</div>
                  </div>
                </div>
              </div>

              {/* Courses Section */}
              <div className="p-4">
                <h4 className="font-semibold text-gray-700 mb-3">Courses</h4>
                {s.courses.length === 0 ? (
                  <p className="text-sm text-gray-400 italic">No courses enrolled</p>
                ) : (
                  <div className="space-y-2">
                    {s.courses.map((c, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{c.course_name}</span>
                        <span className={`font-semibold ${getGradeColor(c.marks)}`}>
                          {c.marks}%
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="border-t border-gray-100 p-4 flex space-x-2">
                <button
                  onClick={() => handleUpdate(s._id)}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <PencilIcon className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(s._id, s.name)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <TrashIcon className="h-4 w-4" />
                  <span>Delete</span>
                </button>
              </div>

              {/* Add Course Section */}
              <div className="border-t border-gray-100 p-4 bg-gray-50">
                <AddCourse studentName={s.name} reload={load} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}