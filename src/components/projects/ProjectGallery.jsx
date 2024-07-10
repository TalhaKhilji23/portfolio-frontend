import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectGallery = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const { name } = useParams(); // Retrieve the 'name' parameter from URL

  console.log("Project Name:", singleProjectData[name]);

  if (!singleProjectData) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {singleProjectData[name].ProjectImages.map((project) => (
        <div className="mb-10 sm:mb-0" key={project.id}>
          <img
            src={project.img}
            className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
            alt={project.title}
            key={project.id}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
