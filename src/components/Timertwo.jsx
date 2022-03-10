import React, { useEffect, useState } from "react";
import "./timertwo.css";

const Timertwo = () => {
  const [seconds, setseconds] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [timeon, settimeon] = useState(false);

  useEffect(() => {
    var timer;
    console.log("running");
    if (timeon) {
      timer = setInterval(() => {
        setseconds(seconds + 1);
        if (seconds === 59) {
          setminutes(minutes + 1);
          setseconds(0);
        }
      }, 100);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="block stopwatch">
      <div className="time">Timer</div>
      <div className="time">
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>

      <div className="btn">
        <button onClick={() => settimeon(true)}>Start</button>
        <button onClick={() => settimeon(false)}>Stop</button>
        <button onClick={() => settimeon(true)}>Resume</button>
        <button
          onClick={() => {
            setminutes(0);
            setseconds(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timertwo;
