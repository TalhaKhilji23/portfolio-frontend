import { useContext } from "react";
import { FiClock, FiTag } from "react-icons/fi";
import { useParams } from "react-router-dom";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectSingleHeader = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const { name } = useParams(); // Retrieve the 'name' parameter from URL


  console.log("Single Project Data:", singleProjectData[name]);

  // Check if singleProjectData exists and matches the current project name
 

  return (
    <div>
      <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {singleProjectData[name].ProjectHeader.title}
      </p>
      <div className="flex">
        <div className="flex items-center mr-10">
          <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {singleProjectData[name].ProjectHeader.publishDate}
          </span>
        </div>
        <div className="flex items-center">
          <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {singleProjectData[name].ProjectHeader.tags}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingleHeader;
