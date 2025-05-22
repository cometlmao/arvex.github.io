import React from 'react';

interface LogoSVGProps {
  className?: string;
  gradient?: boolean;
}

const LogoSVG: React.FC<LogoSVGProps> = ({ className = '', gradient = false }) => {
  if (gradient) {
    return (
      <svg 
        version="1.2" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 270 211" 
        width="270" 
        height="211"
        className={className}
      >
        <title></title>
        <defs>
          <linearGradient id="g1" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,-211,270,0,135,211)">
            <stop offset="0" stopColor="#9929ea"/>
            <stop offset="1" stopColor="#5808fb"/>
          </linearGradient>
        </defs>
        <style>
          {`.s0 { fill: url(#g1) }`}
        </style>
        <path id="" className="s0" aria-label="A" d="m148.2 140.8l13.5-23.4 40.8 70.2h27q-1.5-2.4-6.9-11.1-5.1-9-12.3-21.3-7.2-12.3-15.3-25.8-7.8-13.8-15-26.1-6.9-12.3-12-21-5.1-9-6.3-11.4l-58.8 102-21.9 38.1h-81q1.8-2.7 7.8-13.2 6-10.8 14.7-26.1 9-15.3 19.8-33.9 10.8-18.9 21.6-37.8 12.9-22.5 27-47.1 14.1-24.9 30.3-52.2h27l-55.8 96.6-51.9 90.3h27q13.8-24.3 25.5-44.4 11.7-20.4 22.5-39.3 11.1-18.9 22.2-38.1 11.1-19.2 24-41.7 0.3 0.6 5.1 9 5.1 8.4 12.6 21.6 7.8 13.2 17.4 30 9.6 16.8 19.5 34.2 10.2 17.1 19.8 33.9 9.6 16.5 17.1 29.4 7.5 12.9 12 21 4.8 7.8 4.8 7.8h-81z"/>
      </svg>
    );
  }

  return (
    <svg 
      version="1.2" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 270 211" 
      width="270" 
      height="211"
      className={className}
    >
      <title></title>
      <path className="s0" d="m148.2 140.8l13.5-23.4 40.8 70.2h27q-1.5-2.4-6.9-11.1-5.1-9-12.3-21.3-7.2-12.3-15.3-25.8-7.8-13.8-15-26.1-6.9-12.3-12-21-5.1-9-6.3-11.4l-58.8 102-21.9 38.1h-81q1.8-2.7 7.8-13.2 6-10.8 14.7-26.1 9-15.3 19.8-33.9 10.8-18.9 21.6-37.8 12.9-22.5 27-47.1 14.1-24.9 30.3-52.2h27l-55.8 96.6-51.9 90.3h27q13.8-24.3 25.5-44.4 11.7-20.4 22.5-39.3 11.1-18.9 22.2-38.1 11.1-19.2 24-41.7 0.3 0.6 5.1 9 5.1 8.4 12.6 21.6 7.8 13.2 17.4 30 9.6 16.8 19.5 34.2 10.2 17.1 19.8 33.9 9.6 16.5 17.1 29.4 7.5 12.9 12 21 4.8 7.8 4.8 7.8h-81z"/>
  </svg>
  );
};

export default LogoSVG;