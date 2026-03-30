export default function Comparison() {
  return (
    <div className="space-y-6">
      <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">SQL vs MongoDB Comparison</h2>
        <p className="text-blue-100">
          Understanding the differences between relational and non-relational databases
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* SQL */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-linear-to-r from-red-500 to-red-600 p-4 text-white">
            <div className="flex items-center space-x-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1.5 3 3 3h10c1.5 0 3-1 3-3V7c0-2-1.5-3-3-3H7c-1.5 0-3 1-3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M12 8v8" />
              </svg>
              <h3 className="text-xl font-bold">SQL (Relational Database)</h3>
            </div>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Key Characteristics:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500">•</span>
                    <span className="text-gray-600">Fixed schema with predefined structure</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500">•</span>
                    <span className="text-gray-600">Data stored in multiple related tables</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500">•</span>
                    <span className="text-gray-600">Requires JOIN operations for related data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500">•</span>
                    <span className="text-gray-600">ACID transactions for data integrity</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500">•</span>
                    <span className="text-gray-600">Best for complex queries and relationships</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Example Schema:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                  {`-- Students Table
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  age INT
);

-- Courses Table
CREATE TABLE courses (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

-- Enrollments Table
CREATE TABLE enrollments (
  student_id INT,
  course_id INT,
  marks INT,
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Query with JOIN
SELECT s.name, c.name, e.marks
FROM students s
JOIN enrollments e ON s.id = e.student_id
JOIN courses c ON e.course_id = c.id;`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* MongoDB */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-linear-to-r from-green-500 to-green-600 p-4 text-white">
            <div className="flex items-center space-x-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <h3 className="text-xl font-bold">MongoDB (NoSQL Database)</h3>
            </div>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Key Characteristics:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500">•</span>
                    <span className="text-gray-600">Flexible, dynamic schema</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500">•</span>
                    <span className="text-gray-600">Single document with embedded data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500">•</span>
                    <span className="text-gray-600">No JOINs needed (embedded documents)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500">•</span>
                    <span className="text-gray-600">BASE transactions for scalability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500">•</span>
                    <span className="text-gray-600">Best for hierarchical data and rapid development</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Example Document:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                  {`{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "John Doe",
  "age": 20,
  "courses": [
    {
      "course_name": "Mathematics",
      "marks": 95,
      "semester": "Fall 2024"
    },
    {
      "course_name": "Physics",
      "marks": 88,
      "semester": "Fall 2024"
    }
  ],
  "contact": {
    "email": "john@example.com",
    "phone": "+1234567890"
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gray-800 p-4">
          <h3 className="text-white font-bold">When to Use Which?</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Criteria</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-red-600">SQL</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-green-600">MongoDB</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">Data Structure</td>
                <td className="px-6 py-4 text-sm text-gray-600">Tabular, rigid schema</td>
                <td className="px-6 py-4 text-sm text-gray-600">Document, flexible schema</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">Scalability</td>
                <td className="px-6 py-4 text-sm text-gray-600">Vertical scaling</td>
                <td className="px-6 py-4 text-sm text-gray-600">Horizontal scaling</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">Complex Queries</td>
                <td className="px-6 py-4 text-sm text-gray-600">Excellent with JOINs</td>
                <td className="px-6 py-4 text-sm text-gray-600">Limited, but improving</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">Development Speed</td>
                <td className="px-6 py-4 text-sm text-gray-600">Slower (schema design)</td>
                <td className="px-6 py-4 text-sm text-gray-600">Faster (schema-less)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">Use Cases</td>
                <td className="px-6 py-4 text-sm text-gray-600">Banking, ERP, Complex reporting</td>
                <td className="px-6 py-4 text-sm text-gray-600">CMS, Real-time apps, Catalogs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}