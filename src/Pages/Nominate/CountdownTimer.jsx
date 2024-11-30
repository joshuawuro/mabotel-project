import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("December 29, 2024 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ">
      {/* <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Countdown to December 29, 2024
      </h1> */}
      <div className="flex space-x-4 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className=" rounded-lg p-2">
            <p className="text-2xl font-bold text-[--orange]">{value}</p>
            <p className="text-gray-500 uppercase">{unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
