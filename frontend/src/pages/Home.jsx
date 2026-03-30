import AddStudent from "../components/AddStudent";
import StudentList from "../components/StudentList";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <AcademicCapIcon className="h-10 w-10" />
          <h1 className="text-3xl font-bold">Student Management Dashboard</h1>
        </div>
        <p className="text-blue-100">
          Manage students, track courses, and monitor academic performance all in one place.
        </p>
      </div>

      <AddStudent reload={() => window.location.reload()} />
      <StudentList />
    </div>
  );
}