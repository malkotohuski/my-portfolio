import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ projectId, title, description, imageUrl }) => {
    const navigate = useNavigate();

    const redirectToProjectPage = () => {
        navigate(`/project/${projectId}`);
    };

    return (
        <div className="project" onClick={redirectToProjectPage}>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imageUrl} alt={title} />
        </div>
    );
};

export default Project;