"use client";

import { useEffect, useState } from "react";

export default function AccessTimer({ expiresAt }: { expiresAt: string }) {
  const calculateTimeLeft = () => {
    const difference =
      new Date(expiresAt).getTime() - new Date().getTime();

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-red-500 font-semibold">
        Access Expired
      </div>
    );
  }

  return (
    <div className="bg-[#121826] p-4 rounded-xl border border-gray-800 mt-6">
      <p className="text-sm text-gray-400">Access Valid For:</p>
      <p className="text-lg font-semibold text-green-400 mt-1">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
    </div>
  );
}
