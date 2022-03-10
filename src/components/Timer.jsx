import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setseconds] = useState(0);
  const [minutes, setminutes] = useState(0);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setseconds(seconds + 1);
      if (seconds === 59) {
        setminutes(minutes + 1);
        setseconds(0);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  });

  const restart = () => {
    setseconds(0);
    setminutes(0);
  };

  const stop = () => {
    clearInterval(timer);
  };

  return (
    <>
      <div>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>

      <div>
        <button onClick={restart}>Restart</button>
        <button onClick={stop}>stop</button>
      </div>
    </>
  );
};

export default Timer;
