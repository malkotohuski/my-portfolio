import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { projectId } = useParams();

    // Fetch project details based on projectId or use static data
    // const projectDetails = fetchProjectDetails(projectId);

    return (
        <div>
            <h1>Project Details for {projectId}</h1>
            {/* Display project details here */}
        </div>
    );
};

export default ProjectDetails;