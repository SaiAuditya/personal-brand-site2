import React, { useEffect } from 'react'
import './intro'
import './horizontaltimeline.css'

function Horizontaltimeline() {

    const schedule = {
        "11AM": "Code Review",
        "12PM": "One on Ones / Team Connect",
        "1PM": "Lunch",
        "2PM": "Org Initiatives & India Leadership Connects",
        "3PM": "B/L Grooming - Scrum Ceremonies",
        "4PM": "CloudOps / QA Review",
        "5PM": "Leadership Connect",
        "6PM": "Release Review",
        "7PM": "US Leaders Connect"
    }

    useEffect(() => {


    }, []);

    return (
        <div className='container2'>
            <div className="container-box">
                <span className="margin-horizontal">A day in life of Engineering Manager</span>
            </div>
            <div className="flex-container">
                {Object.entries(schedule).map(([time, work]) => (
                    <div className="schedule-box">
                        <div className="steelblue-box"> {/* Light blue */}
                            <div className="centered-box">
                                <span className="centered-text">{time}</span>
                            </div>
                            {<div className={time == "1PM" || time == "10AM" || time == "11AM" || time == "12PM" || time == "6PM" || time == "7PM" ? "grey-box-2" : time == "3PM" ? "grey-box-3" : "grey-box-4"}>
                                <span className="bold-white-text">{work}</span>
                            </div>}

                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Horizontaltimeline
