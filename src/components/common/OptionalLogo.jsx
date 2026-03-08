import { useState } from "react";

const logos = [
  {
    id: 1,
    label: "01 · Bold Minimal",
    component: () => (
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-2xl shadow-lg shadow-green-900/40 flex-shrink-0">
          🛒
        </div>
        <div>
          <div className="text-3xl font-black text-white leading-none tracking-tight">
            বাজার দর
          </div>
          <div className="text-xs tracking-widest text-green-400 mt-1 font-medium uppercase">
            Price Tracker
          </div>
        </div>
      </div>
    ),
    bg: "bg-[#0d2818] border border-green-900/40",
  },
  {
    id: 2,
    label: "02 · Stamp Badge",
    component: () => (
      <div className="flex flex-col items-center justify-center">
        <div className="w-40 h-40 rounded-full border-4 border-green-700 bg-white flex flex-col items-center justify-center relative shadow-[0_0_0_8px_#dcfce7,0_0_0_12px_#15803d22]">
          <div className="absolute inset-2 rounded-full border border-dashed border-green-300/60" />
          <span className="text-4xl">🏪</span>
          <div className="text-xl font-black text-green-700 mt-1 leading-none">
            বাজার দর
          </div>
          <div className="w-14 h-0.5 bg-green-700 my-1.5" />
          <div className="text-[9px] tracking-[4px] text-green-700 uppercase font-semibold">
            Market Price
          </div>
        </div>
      </div>
    ),
    bg: "bg-white",
  },
  {
    id: 3,
    label: "03 · Gradient Modern",
    component: () => (
      <div className="flex items-center">
        <div className="w-12 h-12 bg-green-500 rounded-2xl rounded-r-md flex items-center justify-center text-xl flex-shrink-0">
          📊
        </div>
        <div className="bg-white/10 border border-white/10 px-5 py-2.5 rounded-2xl rounded-l-md backdrop-blur-sm">
          <div className="text-2xl font-black text-white leading-none tracking-tight">
            বাজার দর
          </div>
          <div className="text-[9px] tracking-[4px] text-green-300 uppercase font-medium mt-1">
            Smart Market
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-[#052e16] via-[#14532d] to-[#166534]",
  },
  {
    id: 4,
    label: "04 · Yellow Accent",
    component: () => (
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
        </div>
        <div className="text-4xl font-black text-green-800 leading-none tracking-tight">
          বাজার <span className="text-green-500">দর</span>
        </div>
        <div className="h-1 w-full rounded-full bg-gradient-to-r from-green-500 to-yellow-400 my-1" />
        <div className="text-[10px] tracking-[5px] text-gray-500 uppercase font-semibold">
          Live Market Prices
        </div>
      </div>
    ),
    bg: "bg-white",
  },
  {
    id: 5,
    label: "05 · Dark Sleek",
    component: () => (
      <div className="flex items-center gap-4 relative">
        <div className="absolute w-20 h-20 rounded-full bg-green-500/10 -left-2 blur-xl pointer-events-none" />
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-800 flex items-center justify-center relative flex-shrink-0 shadow-[0_0_24px_rgba(34,197,94,0.25)]">
          <div className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center text-lg">
            💹
          </div>
        </div>
        <div>
          <div className="text-3xl font-black text-gray-50 leading-none tracking-tight">
            বাজার দর
          </div>
          <div className="text-[9px] tracking-[5px] text-green-400 uppercase font-medium mt-1.5">
            Daily Price Update
          </div>
        </div>
      </div>
    ),
    bg: "bg-[#111827] border border-gray-800",
  },
  {
    id: 6,
    label: "06 · Monogram",
    component: () => (
      <div className="flex items-center gap-5">
        <div className="text-5xl font-black text-green-400 leading-none relative drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">
          বদ
          <div className="absolute bottom-0.5 left-0 right-0 h-1 bg-yellow-400 rounded-full" />
        </div>
        <div className="w-px h-14 bg-gradient-to-b from-transparent via-green-500/50 to-transparent" />
        <div>
          <div className="text-2xl font-black text-white leading-none tracking-tight">
            বাজার দর
          </div>
          <div className="text-[9px] tracking-[4px] text-green-300 uppercase font-medium mt-1.5">
            Market Price
          </div>
          <div className="inline-block mt-2 bg-yellow-400 text-green-900 text-[8px] font-bold tracking-widest px-2 py-0.5 rounded-full uppercase">
            ✦ Trusted
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-[#14532d] to-[#052e16]",
  },
  {
    id: 7,
    label: "07 · App Icon",
    component: () => (
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-4xl shadow-[0_12px_32px_rgba(21,128,61,0.35)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/10 rounded-3xl rounded-b-[50%]" />
          🛍️
        </div>
        <div className="text-2xl font-black text-green-800 leading-none tracking-tight">
          বাজার দর
        </div>
        <div className="text-[10px] tracking-[4px] text-green-600 uppercase font-semibold -mt-1">
          Your Price Guide
        </div>
      </div>
    ),
    bg: "bg-green-50",
  },
];

export default function OptionalLogo() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (id) => {
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-12">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-xs tracking-[8px] text-neutral-500 uppercase mb-2">
          Logo Collection
        </p>
        <h1 className="text-4xl font-black text-white tracking-tight">
          বাজার দর
        </h1>
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {logos.map(({ id, label, component: Logo, bg }) => (
          <div
            key={id}
            className={`relative rounded-2xl px-8 py-12 flex flex-col items-center justify-center min-h-[200px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 cursor-pointer group ${bg}`}
            onClick={() => handleCopy(id)}
          >
            <Logo />

            {/* Label */}
            <span className="absolute bottom-3 right-4 text-[10px] tracking-[3px] opacity-30 uppercase font-medium">
              {label}
            </span>

            {/* Copy hint */}
            <div
              className={`absolute inset-0 rounded-2xl flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${copied === id ? "opacity-100" : "opacity-0 group-hover:opacity-0"}`}
            >
              <span className="text-white text-sm font-semibold tracking-widest">
                ✓ Copied!
              </span>
            </div>
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center bg-black/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="text-white/80 text-xs font-medium tracking-widest uppercase">
                Click to Copy
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-neutral-700 mt-14 tracking-widest uppercase">
        বাজার দর · 2025 · All Rights Reserved
      </p>
    </div>
  );
}
