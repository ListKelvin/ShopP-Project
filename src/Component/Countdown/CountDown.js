import React from "react";
import { useState, useEffect } from "react";

const CountDown = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-28`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span style={{ display: "flex", alignItems: "center" }}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</>
  );
};

// CountDown.defaultProps = {
//   timerDays: 10,
//   timerHours: 10,
//   timerMinutes: 10,
//   timerSeconds: 10,
// };
export default CountDown;
