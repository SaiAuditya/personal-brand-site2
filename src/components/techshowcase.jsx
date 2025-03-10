import React, { useEffect } from 'react'
import ProjectCard from './project'

function Techshowcase({ tech }) {

    const projectData = {
        React: {
            title: 'Map the lakes project',
            description: 'Mapping hyderabad lakes based on the co-ordinates listed in survey pdfs',
            features: [
                'Implemented Google maps APIs',
                'Used GenAI apis to read the co-ordinates from pdf and make into structured format',
                'Used  react to build the front end that can show the lake boundaries',
            ],
            youtubelink: 'https://www.youtube.com/watch?v=6b7D5pk-BSY',
            linkDesc: 'Map lakes project on youtube'
        },
        nodejs: {
            title: 'AI Charts generation',
            description: 'AI tool for generating charts from csv',
            features: [
                'Show the charts from csv data',
                'Utilized charts js to generate the charts',
                'Used OpenAI apis, and nodejs to interact with opanAI apis ',
            ],
            youtubelink: 'https://www.youtube.com/watch?v=iQz6uOWSUx4',
            linkDesc: 'AI Charts on youtube'
        },
        AWS: {
            title: 'Deployed monitorning application in Elastic Bean Stack',
            description: 'Application checks the sercice availbility with health check urls',
            features: [
                'Show the the list of serices running or stopped',
                'Utilized Node and react and Elastic Bean Stack for quick deployments',
                'All client environments are monitored at once place',
                'Application completely developed and deployed by me during hackthon projects'
            ],
        },
        SQL: {
            title: 'Worked on multiple projects using presto, spark sql',
            description: 'Application that aggregate the user events data for task mining',
            features: [
                'Showing the users agreegated data in different dimentions',
                'Weekly, monthly temporal aggregations',
                'Teams, departments aggregations and transofrmations of data',
            ],
        }
    }

    return (
        <div className="project-container">
            {tech && projectData[tech]?.title && <ProjectCard
                title={projectData[tech].title}
                description={projectData[tech].description}
                features={projectData[tech].features}
                youtubelink={projectData[tech].youtubelink}
                linkDesc={projectData[tech].linkDesc}
            />}
        </div>
    );

}

export default Techshowcase
