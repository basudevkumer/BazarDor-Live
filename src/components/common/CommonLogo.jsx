import { useState } from "react";

const LogoSmall = () => (
  <div className="flex items-center gap-2 relative scale-90 origin-left">
    {/* Background Glow Effect */}
    <div className="absolute w-12 h-12 rounded-full bg-green-500/10 -left-1 blur-lg pointer-events-none" />
    
    {/* Icon Part */}
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-800 flex items-center justify-center relative flex-shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
      <div className="w-6 h-6 rounded-full bg-[#111827] flex items-center justify-center text-sm">
        💹
      </div>
    </div>

    {/* Text Part */}
    <div>
      <div className="text-lg font-black text-gray-50 leading-none tracking-tight">
        বাজার দর
      </div>
      <div className="text-[6px] tracking-[3px] text-green-400 uppercase font-medium mt-1">
        Market Prices
      </div>
    </div>
  </div>
);

export default function CommonLogo() {
  return (
    <div className="flex items-center">
      
      <div className="bg-[#111827] border border-gray-800 px-4 py-2 rounded-lg inline-block cursor-pointer hover:bg-[#1a2233] transition-colors">
        <LogoSmall />
      </div>
    </div>
  );
}