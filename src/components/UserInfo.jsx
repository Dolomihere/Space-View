import React, { useEffect, useState } from 'react';

import './UserInfo.css';

export function UserInfo() {
  const [timezone, setTimezone] = useState('');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(tz);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timezone) {
    return <div className="user-info">Loading your timezone...</div>;
  }

  return (
    <div className="user-info">
      <div className='info-bg'>
        <p>Your Timezone is: {timezone}</p>
        <p>Current Time: {time.toLocaleTimeString('en-US', { timeZone: timezone })}</p>
      </div>
    </div>
  );
}
