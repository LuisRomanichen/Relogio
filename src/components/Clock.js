// src/components/Clock.js
import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
  console.log('Clock component is being called'); // Adicionei um console.log
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchTime = async () => {
      const response = await fetch('http://localhost:3000');
      const data = await response.json();
      setTime(data.time);
    };
    fetchTime();
    const intervalId = setInterval(fetchTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <h1>{time}</h1>
    </div>
  );
}

export default Clock;