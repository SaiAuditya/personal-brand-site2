import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaYoutube, FaLinkedin } from 'react-icons/fa';
import { faUser, faBriefcase, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Card from './experienecards';
import './intro.css';

function Intro() {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(true);
    }, []);

    return (
        <div className="container2">
            <div className="parent">
                <div style={{ width: '100px', borderRadius: '50px', boxShadow: "0 0px 0px rgba(0, 0, 0, 0.7)" }}>
                    <img style={{ height: '100px', borderRadius: '50px', width: '100px', boxShadow: "0 0px 0px rgba(0, 0, 0, 0.7)" }} src="IMG_6673.jpeg" alt="Sai Auditya" />
                </div>
                <div style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: '10px', marginLeft: '20px', padding: '15px' }}>
                    <span style={{ marginLeft: '15px', padding: '15px', fontSize: '14px', textAlign: 'left' }}>
                        I'm Sai, an engineering manager passionate about building great teams and impactful solutions. I thrive on learning, innovating, and collaborating to tackle challenges and create meaningful outcomes. With a blend of technical expertise and strong people skills, I focus on driving progress while fostering a supportive, growth-oriented environment.
                    </span>
                </div>
            </div>

            <div className="parent">
                <div className="child">
                    {display && (
                        <>
                            <span style={{ display: 'flex', alignItems: 'center', marginLeft: '5px', marginTop: '10px', fontSize: '12px' }}>
                                <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px', color: 'cadetblue' }} />
                                Srinadhuni Sai Auditya
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', marginLeft: '5px', marginTop: '10px', fontSize: '12px' }}>
                                <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '10px', color: 'cadetblue' }} />
                                Engineering Manager
                            </span>
                        </>
                    )}
                </div>

                <div className="child">
                    {display && (
                        <>
                            <span style={{ display: 'flex', alignItems: 'center', marginLeft: '5px', marginTop: '10px', fontSize: '12px' }}>
                                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px', color: 'cadetblue' }} />
                                +91 8374653210
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', marginLeft: '5px', marginTop: '10px', fontSize: '12px' }}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px', color: 'cadetblue' }} />
                                auditya.1225@gmail.com
                            </span>
                        </>
                    )}
                </div>

                <div className="child">
                    {display && (
                        <>
                            <span style={{ display: 'flex', alignItems: 'center', marginLeft: '5px', marginTop: '10px', marginBottom: '5px' }}>
                                <FaYoutube size={17} style={{ marginRight: '10px', color: 'cadetblue', marginTop: '2px' }} />
                                <a href="https://www.youtube.com/@SaiAudityaSrinadhuni">Sai Srinadhuni YouTube</a>
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', marginLeft: '5px' }}>
                                <FaLinkedin size={17} style={{ marginRight: '10px', color: 'cadetblue' }} />
                                <a href="https://www.linkedin.com/in/saisrinadhuni/">Sai Auditya LinkedIn</a>
                            </span>
                        </>
                    )}
                </div>
            </div>

            <div className="parent">


                <Card heading="Strategic Planning & Management"
                    point1="Excellent all-around people, process & product management experience."
                    point2="Strong experience in building and nurturing new teams for success."
                    point3="Capable leader in managing and growing teams with & without authority." />

                <Card heading="SCRUM & Agile Software Development"
                    point1="Extensive experience in Agile processes and ceremonies."
                    point2="Strong stakeholder management and reporting skills."
                    point3="Proven ability to deliver large-scale projects within timelines." />

                <Card heading="Cloud Operations & SaaS Deployments"
                    point1="Strong AWS knowledge, including S3, EMR, EC2, and RDS."
                    point2="Experienced in developing and deploying SaaS applications for 50+ clients."
                    point3="Strong security and monitoring focus for client infrastructure and data." />
            </div>

            <div className="parent">
                <Card heading="Strong Technical Skills & Innovation"
                    point1="Extensive knowledge in Java and Microservices."
                    point2="Strong fundamentals in web design and full-stack development."
                    point3="Experience with three-tier architecture using both relational and non-relational databases." />

                <Card heading="GenAI & Chat-based Solutions"
                    point1="Good experience in understanding Gen AI APIs and their limitations."
                    point2="Developed production-ready features using Gen AI, such as 'Chat with Data' for chart generation."
                    point3="Hands-on experience with Gen AI in knowledge-based document retrieval, RAG databases, and data security." />

                <Card heading="Big Data Tools & Analytics"
                    point1="Understanding of data pipelines & IoT data collection."
                    point2="Experience with EMR, Spark, and Hadoop for data processing."
                    point3="Expertise in creating visually appealing, actionable data visualizations." />

                <Card
                    heading="Recent Key Achievements & Impact"
                    point1="Aligned with leadership goals to reduce cloud costs by collaborating with FinOps teams, achieving a 20% YoY cost reduction through various initiatives. Led cloud adoption and modernization efforts to save costs for both the company and clients."
                    point2="Initiated a faster release cycle approach with new strategies to tackle backlog, automation for deployments, and testing initiatives."
                    point3="Collaborated on org-level initiatives like Career Catalyst to define career paths for junior engineers across the organization."
                />

            </div>
        </div>
    );
}

export default Intro;
