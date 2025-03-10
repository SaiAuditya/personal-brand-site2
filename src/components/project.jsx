import React from 'react';
import { FaProjectDiagram, FaBullhorn } from 'react-icons/fa';
import './pcard.css';

const ProjectCard = ({ title, description, features, gitLink, youtubelink, linkDesc }) => {
    return (
        <div className="project-card">
            <div className="card-header">
                <FaProjectDiagram size={30} style={{ marginRight: '10px', color: '#0077cc' }} />
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{description}</p>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '5px', marginTop: '10px', marginBottom: '5px' }}>
                                <FaBullhorn size={18} style={{ marginRight: '10px', color: '#0077cc', flexShrink: 0 }} />
                                {feature}
                            </div>
                        </li>
                    ))}
                    {gitLink && <li>{gitLink}</li>}
                    {youtubelink && <a href={youtubelink}>{linkDesc}</a>}
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;
