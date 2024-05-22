"use client";

import React, { useState, useEffect } from 'react';
import Project from '@/static/Project';

function Projects() {
    const [projectData, setProjectData] = useState({ data: [] });

    useEffect(() => {
        fetch('/data/projects.json')
            .then((response) => response.json())
            .then((data) => setProjectData(data))
            .catch((error) => console.error('Error fetching project data:', error));
    }, []);

    return (
        <div id="Projects" className="bg-gradient-to-r from-gradientLeft to-gradientRight">
            <img className="w-full h-44" src="/transitions/transition_grey.svg" alt="transition" />
            <p className="flex text-4xl my-8 justify-center text-white font-bold">Featured Projects</p>
            <div className="flex flex-wrap w-full desktop:px-20 justify-center">
                {projectData.data.map((item, index) => (
                    <Project
                        key={index}
                        headline={item.title}
                        image={item.image}
                        text={item.text}
                        tags={item.tags}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
