import React, { useState, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleProjectData as singleProjectDataJson } from "../data/singleProjectData";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const [singleProjectData, setSingleProjectData] = useState(
    singleProjectDataJson
  );
  const [projectName, setProjectName] = useState("");

  const params = useParams();

  useEffect(() => {
    console.log("Params:", params.name);
    setProjectName(params.name);

    // Dynamically fetch the project data based on params.name
    const fetchProjectData = async (name) => {
      try {
        const data = await import(`../data/${name}`);
        setSingleProjectData(data.default);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData(params.name);
  }, [params]);

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
