import { useState } from "react";
import { addStudent } from "../api";
import { UserPlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function AddStudent({ reload }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!name || !age) {
      alert("Please fill all fields");
      return;
    }

    if (age < 1 || age > 120) {
      alert("Please enter a valid age");
      return;
    }

    setIsSubmitting(true);

    try {
      await addStudent({ name, age, courses: [] });
      setName("");
      setAge("");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      reload();
    } catch (error) {
      alert("Error adding student. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl mb-8 overflow-hidden">
      <div className="bg-linear-to-r from-blue-600 to-purple-600 px-6 py-4">
        <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
          <UserPlusIcon className="h-6 w-6" />
          <span>Add New Student</span>
        </h2>
      </div>

      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter student name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="mt-6 w-full bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {isSubmitting ? "Adding Student..." : "Add Student"}
        </button>

        {/* Success Toast */}
        {showSuccess && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-up">
            Student added successfully!
          </div>
        )}
      </div>
    </div>
  );
}