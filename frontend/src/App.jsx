import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Comparison from "./pages/Comparison";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Navbar setPage={setPage} />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {page === "home" ? <Home /> : <Comparison />}
      </div>
    </div>
  );
}