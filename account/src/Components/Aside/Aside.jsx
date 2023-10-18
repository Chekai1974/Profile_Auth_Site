import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function Aside() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  setInterval(() => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    let month = date.getMonth() + 1;
    let year = date.getDate() + ":" + month + ":" + date.getUTCFullYear();
    setTime(time);
    setDate(year);
  }, 1000);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date();
  var n = d.getDay();
  return (
    <aside className="aside">
      <div className="aside-container">
        <div className="aside-content">
          <div className="routing">
            <NavLink to="/news"> News</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/activities">Activities</NavLink>
            <NavLink to="/calendar">Calendar</NavLink>
          </div>
          <div className="date">
            <h3 id="day">{date}</h3>
            <p id="day">{days[n]}</p>
            <p id="time">{time}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export { Aside };
