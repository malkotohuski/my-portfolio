import React from 'react';
import Project from '../Projects/index';
import '../Portfolio/style.css';

const Portfolio = ({ projects }) => {
    return (
        <section className="portfolio">
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </section>
    );
};

export default Portfolio;