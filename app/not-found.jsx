import React from 'react';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-9xl font-bold flex items-center justify-center">
        <span className="relative">
          <span className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#3f51b5] via-[#EC7601] to-[#3f51b5] rounded-full blur-2xl"></span>
          <span className="relative">4</span>
        </span>
        <span className="relative">
          <span className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#3f51b5] via-[#EC7601] to-[#3f51b5] rounded-full blur-2xl"></span>
          <span className="relative">0</span>
        </span>
        <span className="relative">
          <span className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#3f51b5] via-[#EC7601] to-[#3f51b5] rounded-full blur-2xl"></span>
          <span className="relative">4</span>
        </span>
      </div>
      <p className="mt-4 text-lg">
        This page does not exist. <a href="/" className="text-[#EC7601] hover:underline">Go back home.</a>
      </p>
    </div>
  );
}

export default NotFound;
