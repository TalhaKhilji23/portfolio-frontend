import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectInfo = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const { name } = useParams(); // Retrieve the 'name' parameter from URL

  console.log("Project Name:", singleProjectData[name]);

  if (!singleProjectData || !singleProjectData[name]) {
    return <div>Loading...</div>; // Handle loading state or invalid project name
  }

  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project client details */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            {singleProjectData[name].ProjectInfo.ClientHeading}
          </p>
          <ul className="leading-loose">
            {singleProjectData[name].ProjectInfo.CompanyInfo.map((info) => (
              <li
                className="font-general-regular text-ternary-dark dark:text-ternary-light"
                key={info.id}
              >
                <span>{info.title}: </span>
                <a
                  href={info.details} // Assuming details here is a link
                  className={
                    info.title === "Website" || info.title === "Phone"
                      ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                      : ""
                  }
                  aria-label="Project Website and Phone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {info.details}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleProjectData[name].ProjectInfo.ObjectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleProjectData[name].ProjectInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleProjectData[name].ProjectInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleProjectData[name].ProjectInfo.Technologies[0].techs.join(
              ", "
            )}
          </p>
        </div>

        {/* Single project social sharing */}
        <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleProjectData[name].ProjectInfo.SocialSharingHeading}
          </p>
          <div className="flex items-center gap-3 mt-5">
            {singleProjectData[name].ProjectInfo.SocialSharing.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share Project"
                className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
              >
                <span className="text-lg lg:text-2xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {singleProjectData[name].ProjectInfo.ProjectDetailsHeading}
        </p>
        {singleProjectData[name].ProjectInfo.ProjectDetails.map((details) => (
          <p
            key={details.id}
            className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
          >
            {details.details}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectInfo;
