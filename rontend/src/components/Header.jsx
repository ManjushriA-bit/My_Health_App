// frontend/src/components/Header.jsx
import React from "react";

function Header({ onLoginClick }) {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* App Name / Logo */}
      <h1 className="text-2xl font-bold">HealthEase</h1>

      {/* Login Button */}
      <button
        onClick={onLoginClick}
        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
      >
        Login
      </button>
    </header>
  );
}

export default Header;
