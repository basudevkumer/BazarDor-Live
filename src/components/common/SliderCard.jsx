import React from "react";
import allImages from "../../helper/imageProvider";
import Container from "../common/Container";

const SliderCard = ({ product }) => {
  const { banner, heroImages } = allImages;

  const {
    name = "পেঁয়াজ",
    type = "শাকসবজি",
    govtPrice = "৫০",
    marketPrice = "৫৫",
    weight = "১ কেজি",
    origin = "ঢাকা",
    storage = "ঠান্ডা ও শুকনো স্থান",
    stockPercent = 72,
    stockLabel = "পর্যাপ্ত",
    lastUpdated = "১২ মার্চ ২০২৬",
    note = "সরকারি সরবরাহকৃত পণ্য",
  } = product || {};

  const priceDiff = parseInt(marketPrice) - parseInt(govtPrice);

  const infoChips = [
    { label: "ওজন", val: weight },
    { label: "উৎপত্তি", val: origin },
    { label: "সংরক্ষণ", val: storage },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="w-full min-h-[420px] bg-cover bg-center relative overflow-hidden bg-[#e8f5ef]"
    >
      {/* dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #3bb77e 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* RIGHT IMAGE — absolute, outside container */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-[38%] overflow-hidden pointer-events-none">
        {/* left fade blend */}
        <div className="absolute left-0 top-0 bottom-0 w-24  z-10" />
        {/* live badge */}
        <div className="absolute top-5 right-5 z-20 bg-white rounded-full px-4 py-1.5 flex items-center gap-2 border border-[#e2f3ea]">
          <span className="w-2 h-2 rounded-full bg-[#3bb77e] animate-pulse" />
          <span className="text-xs font-semibold text-[#3bb77e]">
            লাইভ মূল্য
          </span>
        </div>
        <figure className="w-full h-full">
          <img
            src={heroImages}
            alt="heroImages"
            className="w-full h-full object-cover"
          />
        </figure>
      </div>

      {/* LEFT CONTENT */}
      <Container>
        <div className="relative z-10 flex flex-col justify-center gap-4 py-10 lg:pr-[40%]">
          {/* category tag */}
          <span className="inline-flex items-center gap-2 bg-white border border-[#3bb77e33] rounded-full px-4 py-1 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#3bb77e]" />
            <span className="text-sm font-semibold text-[#3bb77e]">{type}</span>
          </span>

          {/* product name */}
          <div>
            <h1 className="text-[clamp(52px,6vw,72px)] w-fit font-bold text-[#253d4e] leading-tight tracking-tight">
              {name}
            </h1>
            <p className="text-sm text-[#7aaa90] w-fit font-medium mt-1">
              পণ্যের ধরন : {type} &nbsp;·&nbsp; প্রতি কেজি
            </p>
          </div>

          {/* price cards */}
          <div className="flex flex-wrap gap-3">
            <div className="bg-white rounded-2xl px-4 py-3 border border-[#ede9ff] min-w-[140px]">
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                সরকারি মূল্য
              </p>
              <p className="text-[22px] font-bold text-[#6438ea]">
                {govtPrice} টাকা/কেজি
              </p>
            </div>

            <div className="bg-white rounded-2xl px-4 py-3 border border-[#e2f3ea] min-w-[160px]">
              <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                বর্তমান বাজার মূল্য
              </p>
              <p className="text-[22px] font-bold text-[#253d4e]">
                {marketPrice} টাকা/কেজি
              </p>
              {priceDiff > 0 && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-red-50 text-red-500 rounded-md px-2 py-0.5 mt-1">
                  ▲ +{priceDiff} টাকা বেশি
                </span>
              )}
            </div>
          </div>

          {/* info chips */}
          <div className="flex flex-wrap gap-2">
            {infoChips.map(({ label, val }) => (
              <div
                key={label}
                className="bg-white border border-[#e2f3ea] rounded-xl px-4 py-2 flex flex-col gap-0.5"
              >
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  {label}
                </span>
                <span className="text-sm font-semibold text-[#253d4e]">
                  {val}
                </span>
              </div>
            ))}
          </div>

          {/* stock bar */}
          <div className="bg-white border max-w-[400px] border-[#e2f3ea] rounded-xl px-4 py-3">
            <div className="flex justify-between mb-2">
              <span className="text-xs text-gray-400">স্টক অবস্থা</span>
              <span className="text-xs font-bold text-[#3bb77e]">
                {stockLabel} · {stockPercent}%
              </span>
            </div>
            <div className="h-1.5 bg-[#eef7f3] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#3bb77e] to-[#5dffb0] rounded-full transition-all duration-1000"
                style={{ width: `${stockPercent}%` }}
              />
            </div>
          </div>

          {/* footer */}
          <div className="flex items-center flex-wrap gap-x-[120px] gap-y-3">
            <div>
              <p className="text-xs text-gray-400">
                সর্বশেষ আপডেট : {lastUpdated}
              </p>
              <p className="text-xs text-gray-400">নোট : {note}</p>
            </div>
            <button className="flex items-center gap-2 bg-[#3bb77e] hover:bg-[#2ea06a] active:scale-95 text-white font-bold rounded-xl px-6 py-2.5 text-sm transition-all duration-200">
              আরও দেখুন <span>→</span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SliderCard;
