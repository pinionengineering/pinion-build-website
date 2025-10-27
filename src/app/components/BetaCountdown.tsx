'use client';

import { useState, useEffect } from 'react';

export default function BetaCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-01T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg mb-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Beta Program</h2>
        <p className="text-xl mb-6 text-blue-100">
          Join the future of IPFS infrastructure
        </p>

        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-6" role="timer" aria-label="Beta countdown timer">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <time className="text-3xl font-bold block" dateTime={`P${timeLeft.days}D`}>
              {timeLeft.days}
            </time>
            <div className="text-sm text-blue-100">Days</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <time className="text-3xl font-bold block" dateTime={`PT${timeLeft.hours}H`}>
              {timeLeft.hours}
            </time>
            <div className="text-sm text-blue-100">Hours</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <time className="text-3xl font-bold block" dateTime={`PT${timeLeft.minutes}M`}>
              {timeLeft.minutes}
            </time>
            <div className="text-sm text-blue-100">Minutes</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <time className="text-3xl font-bold block" dateTime={`PT${timeLeft.seconds}S`}>
              {timeLeft.seconds}
            </time>
            <div className="text-sm text-blue-100">Seconds</div>
          </div>
        </div>


        <a
          href="mailto:beta@pinioneng.com?subject=Beta Access Request&body=Hi!,%0A%0AI would like to be part of the Pinion platform beta program. including three months of free storage and first-mover discounts.%0A%0AThank you!"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
        >
          Request Beta Access
        </a>
      </div>
    </div>
  );
}
