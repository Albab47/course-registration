import PropTypes from 'prop-types';

import { useState } from "react";
import Course from "../Course/Course";
import { useEffect } from "react";

const Courses = ({ onCourseSelection }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="gap-6 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Course
          key={course.id} onCourseSelection={onCourseSelection}
          course={course}
        />
      ))}
    </div>
  );
};

Courses.propTypes = {
    onCourseSelection: PropTypes.func,
};

export default Courses;
