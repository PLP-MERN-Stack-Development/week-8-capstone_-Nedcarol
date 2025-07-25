import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-gray-100 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user?.name}!</h1>
        <p className="text-lg text-gray-700">Here’s your personalized dashboard.</p>
        {/* Later we'll list enrolled courses here */}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
