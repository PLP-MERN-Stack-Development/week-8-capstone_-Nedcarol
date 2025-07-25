import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleEnroll = async () => {
    try {
      const token = localStorage.getItem("token"); // assuming token is stored here
      const res = await fetch(`/api/courses/enroll/${course._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Enrollment failed");
      }

      alert("Successfully enrolled!");
      navigate("/my-courses");
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <img
        src={course.image || "https://via.placeholder.com/400x200"}
        alt={course.title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
      <p className="text-gray-600 text-sm mt-2 line-clamp-3">{course.description}</p>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handleEnroll}
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Enroll
        </button>
        {/* Optional: View course details button */}
        {/* <Link to={`/courses/${course._id}`} className="text-sm text-blue-500 hover:underline">View</Link> */}
      </div>
    </div>
  );
};

export default CourseCard;
