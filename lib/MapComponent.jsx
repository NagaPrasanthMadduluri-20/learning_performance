"use client";
import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

import Image from 'next/image';

const learnerData = [
  { id: 1, country: 'US', learners: 122072, top: '20%', left: '20%' },
  { id: 2, country: 'India', learners: 237213, top: '40%', left: '70%' },
  { id: 3, country: 'UK', learners: 6879, top: '25%', left: '45%' },
  { id: 4, country: 'Australia', learners: 6826, top: '70%', left: '80%' },
  { id: 5, country: 'Malaysia', learners: 2050, top: '55%', left: '75%' },
  { id: 6, country: 'Canada', learners: 30161, top: '20%', left: '15%' },
  { id: 7, country: 'Singapore', learners: 11694, top: '60%', left: '77%' },
  { id: 8, country: 'Germany', learners: 2785, top: '30%', left: '50%' },
  { id: 9, country: 'Japan', learners: 15000, top: '35%', left: '85%' },
  { id: 10, country: 'Brazil', learners: 18000, top: '65%', left: '30%' },
];

const MapComponent = () => {
  const [visibleBubbles, setVisibleBubbles] = useState([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setVisibleBubbles(prev => {
        const newBubbles = [
          learnerData[currentIndex % learnerData.length],
          learnerData[(currentIndex + 1) % learnerData.length]
        ];
        currentIndex += 2;
        return newBubbles;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const img = "https://alpha.invensislearning.com/storage/images/Corporate-Training/location-map.png"

  return (
    <div className="relative w-full max-w-4xl h-[400px] md:h-[600px] mx-auto overflow-hidden bg-gray-100">
      <Image
        src={img}
        alt="World Map"
        className="w-full h-full object-cover"
        width={300}
        height={200}
      />
      {visibleBubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute transition-all duration-1000 ease-in-out"
          style={{
            top: bubble.top,
            left: bubble.left,
            opacity: 0,
            transform: 'scale(0.5)',
            animation: 'bubbleAppear 5s forwards',
          }}
        >
          <div className="relative">
            <div className="absolute z-10 -translate-x-1/2 left-1/2 -bottom-2 w-0 h-0 border-x-4 border-b-4 border-x-transparent border-b-white"></div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="font-bold">{bubble.learners.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Learners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <style jsx global>{`
        @keyframes bubbleAppear {
          0% { opacity: 0; transform: scale(0.5); }
          10% { opacity: 1; transform: scale(1.1); }
          15% { transform: scale(1); }
          85% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.5); }
        }
      `}</style>
    </div>
  );
};

export default MapComponent;