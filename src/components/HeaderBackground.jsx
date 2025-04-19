import React from 'react';
import { FaCogs } from 'react-icons/fa';
import { MdPrecisionManufacturing } from 'react-icons/md';

const HeaderBackground = () => {
  return (
    <>
      {/* Blueprint Grid Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      ></div>

      {/* Spinning Gears + Icons */}
      <div className="absolute top-[5%] right-[2%] text-white/10 dark:text-white/10 text-[260px] z-0 animate-[spin_25s_linear_infinite]">
        <FaCogs />
      </div>
      <div className="absolute bottom-[5%] left-[3%] text-white/10 dark:text-white/10 text-[200px] z-0 animate-[spin_35s_linear_infinite]">
        <FaCogs />
      </div>
      <div className="absolute bottom-[3%] right-[0%] text-white/10 dark:text-white/10 text-[400px] z-0 scale-x-[-1]">
        <MdPrecisionManufacturing />
      </div>
    </>
  );
};

export default HeaderBackground;
