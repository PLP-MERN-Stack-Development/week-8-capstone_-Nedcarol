import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard"; // NEW

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow p-6 bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Available Courses
        </h1>

        {loading ? (
          <p className="text-center text-gray-600">Loading courses...</p>
        ) : courses.length === 0 ? (
          <p className="text-center text-red-500">No courses available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
