import React from 'react';
import { FaChessKing, FaArrowRight } from 'react-icons/fa'; // Import required icons
import './card.css';

const Card = ({ heading, point1, point2, point3 }) => {
    return (
        <div style={{ alignItems: 'center', display: 'flex', padding: '5px' }}>
            <div className="resume-card">
                <div className="card-header">
                    <FaChessKing className="icon-header" />
                    {heading}
                </div>
                <div className="card-body">
                    <ul>
                        <li>
                            <FaArrowRight className="icon-bullet" />
                            <span>{point1}</span>
                        </li>
                        <li>
                            <FaArrowRight className="icon-bullet" />
                            <span>{point2}</span>
                        </li>
                        <li>
                            <FaArrowRight className="icon-bullet" />
                            <span>{point3}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;
