"use client";
import React from 'react';

const Spinner = () => {
  return (
    <div className="relative inline-block w-8 h-8">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="absolute w-[0.15rem] h-[0.6rem] left-[3.7rem] bottom-0 rounded-[0.1rem] bg-transparent origin-[center_-0.45rem] animate-spinner-fade"
          style={{
            transform: `rotate(${index * 30}deg)`,
            animationDelay: `${index * 0.083}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Spinner />
    </div>
  );
};

export default Loader;