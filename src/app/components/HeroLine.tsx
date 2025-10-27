'use client';

import { useState, useEffect } from 'react';

const features = [
  'Permanence',
  'Durability', 
  'Resiliancy',
  'Availability',
  'Uptime',
  'Performance',
  'Content-Addressing',
  'Trustless Verification',
  'Scalability'
];

export default function HeroLine() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setTimeout(() => setIsFlipping(false), 100);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-8">
      <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 leading-tight">
        When your problem turns on
      </h1>
      
      <div className="flex justify-center mb-4">
        <div className="relative bg-slate-800 rounded-lg p-4 shadow-xl border-2 border-slate-600">
          <div className="relative overflow-hidden h-16 flex items-center justify-center min-w-[320px]">
            {/* Split-flap background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>
            
            {/* Horizontal divider line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600 z-10"></div>
            
            {/* Text display */}
            <div className="relative z-20">
              <div 
                className={`
                  text-amber-400 text-3xl font-mono font-bold tracking-wider
                  transition-all duration-400 ease-in-out
                  ${isFlipping ? 'transform -translate-y-2 opacity-0' : 'transform translate-y-0 opacity-100'}
                `}
                style={{
                  textShadow: '0 0 10px rgba(251, 191, 36, 0.5)',
                  fontFamily: 'monospace'
                }}
              >
                {features[currentFeature]}
              </div>
            </div>
            
            {/* Mechanical elements */}
            <div className="absolute left-2 top-1/2 w-1 h-8 bg-gray-600 rounded-full transform -translate-y-1/2"></div>
            <div className="absolute right-2 top-1/2 w-1 h-8 bg-gray-600 rounded-full transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
        turn on <span className="text-blue-500">Pinion</span>.
      </h1>
    </div>
  );
}