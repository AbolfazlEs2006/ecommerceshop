import React, { useState } from "react";
import Countdown from "react-countdown";

// css file
import "./timer.css";

function Timer({ style }) {
  const [key, setKey] = useState(0);

  const onComplete = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <Countdown
        key={key}
        date={Date.now() + 3 * 60 * 60 * 1000}
        onComplete={onComplete}
        renderer={({ hours, minutes, seconds, completed }) => {
          if (completed) {
            return <span>00:00</span>;
          } else {
            return (
              <span className={`Timer-count ${style}`}>
                <span>{hours}</span>
                <span>{minutes}</span>
                <span>{seconds}</span>
              </span>
            );
          }
        }}
      />
    </div>
  );
}

export default Timer;
