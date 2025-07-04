import React, { useEffect, useState } from "react";

const OtpTimer = ({ duration = 300, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration); // reset timer when duration changes
  }, [duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onExpire && onExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return <div className="text-center text-sm font-medium mb-4">{minutes}:{seconds}</div>;
};

export default OtpTimer;
