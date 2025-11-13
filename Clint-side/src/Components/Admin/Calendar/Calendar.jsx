import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./Calendar.css";

function Calendar() {
    return (
        <div className="comingsoon-container-c">
            <div className="comingsoon-content-c">
                <FaRegCalendarAlt className="comingsoon-icon-c" />
                <h2>Coming Soon</h2>
                <p>This section is under development</p>
            </div>
        </div>
    );
}

export default Calendar;
