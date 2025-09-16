// frontend/src/App.jsx
import React from "react";
import PhoneAuth from "./components/PhoneAuth";
import AddPatient from "./db/AddPatient";
import VideoConsult from "./components/VideoConsult";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">HealthEase</h1>
        <button className="bg-white text-blue-600 px-4 py-2 rounded">
          Login
        </button>
      </header>

      {/* Main content */}
      <main className="flex-grow p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Phone Authentication */}
        <PhoneAuth />

        {/* Add Patient Data */}
        <AddPatient />

        {/* Video Consultation */}
        <VideoConsult />

        {/* Extra Card: Book Lab Test */}
        <div className="bg-green-100 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-lg font-semibold mb-2 text-green-700">Book Lab Tests</h2>
          <p className="mb-4">Schedule diagnostic tests from home.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Book Test
          </button>
        </div>

        {/* Extra Card: Order Medicines */}
        <div className="bg-yellow-100 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-lg font-semibold mb-2 text-yellow-800">Order Medicines</h2>
          <p className="mb-4">Get your prescribed medicines delivered at home.</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded">
            Order Now
          </button>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-6">
        <p>&copy; 2025 HealthEase. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
