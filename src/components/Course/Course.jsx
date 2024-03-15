import PropTypes from "prop-types";
import { CurrencyDollarIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const Course = ({ course, onCourseSelection }) => {
  const { name, photo, description, credit, price } = course;

  return (
    <div className="card bg-white p-4 space-y-4">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body p-0 space-y-4">
        {/* Card content */}
        <div>
          <h2 className="card-title mb-3">{name}</h2>
          <p className="text-[#1C1B1B99]">{description}</p>
        </div>

        <div className="lg:flex">
          <p className="flex gap-2">
            <CurrencyDollarIcon className="size-6" />
            Price: {price}
          </p>
          <p className="flex gap-2">
            <BookOpenIcon className="size-6" />
            Credit: {credit}
          </p>
        </div>

        <div className="card-actions justify-center">
          <button
            onClick={() => onCourseSelection(course)}
            className="btn w-full bg-info text-white font-semibold text-lg"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  onCourseSelection: PropTypes.func,
};

export default Course;
