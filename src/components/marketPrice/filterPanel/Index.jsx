import React, { useState } from "react";
import Container from "../../common/Container";
import { categoriesItems, sortOptions } from "../../../helper/projectArryObj";
import HomeProducts from "../../home/product/Index";

const FilterPanel = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleCategory = (name) => {
    setSelectedCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  return (
    <section className="bg-[#f8fffe] min-h-screen py-6 sm:py-8 md:py-10">
      <Container>

        {/* ── HEADER ── */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4 sm:px-0">
          <h2 className="heading-two text-[#253d4e] text-[clamp(24px,6vw,32px)]">
            পল্লবী থানার আজকের বাজার দর
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2 sm:mt-3 flex-wrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3bb77e]" />
            <span className="text-xs sm:text-sm text-gray-400">সর্বশেষ আপডেট:</span>
            <span className="text-xs sm:text-sm text-[#3bb77e] font-semibold">
              ১০ মার্চ, ২০২৬
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3bb77e]" />
            <span className="text-[10px] sm:text-xs font-semibold text-[#3bb77e] bg-[#e8f5ef] px-2 sm:px-3 py-0.5 rounded-full">
              লাইভ
            </span>
          </div>
        </div>

        {/* ── MOBILE FILTER BUTTON ── */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden w-full mb-4 bg-white rounded-xl border-[1.5px] border-[#e8f5ef] px-4 py-3 flex items-center justify-between text-[#253d4e] font-semibold text-sm hover:bg-[#f8fffe] transition-colors"
        >
          <span>🔍 ফিল্টার</span>
          <span className={`transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>

        {/* ── BODY ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-4 sm:gap-6 items-start px-4 sm:px-0">

          {/* ── SIDEBAR ── */}
          <aside className={`${
            sidebarOpen ? 'block' : 'hidden'
          } lg:block bg-white rounded-xl sm:rounded-2xl border-[1.5px] border-[#e8f5ef] p-4 sm:p-5 lg:sticky lg:top-24 transition-all duration-300`}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-[3px] h-4 bg-[#3bb77e] rounded-full" />
              <h3 className="text-[11px] sm:text-[13px] font-bold uppercase tracking-wider text-[#3bb77e]">
                পণ্যের বিভাগ
              </h3>
            </div>

            <div className="space-y-1 max-h-[400px] overflow-y-auto">
              {categoriesItems.map((item) => (
                <label
                  key={item.id}
                  htmlFor={item.name}
                  className="flex items-center gap-3 px-2 sm:px-3 py-2 rounded-lg sm:rounded-xl cursor-pointer hover:bg-[#f0fdf7] transition-colors duration-150 group min-h-[44px]"
                >
                  <input
                    type="checkbox"
                    id={item.name}
                    checked={selectedCategories.includes(item.name)}
                    onChange={() => toggleCategory(item.name)}
                    className="w-4 h-4 accent-[#3bb77e] cursor-pointer flex-shrink-0"
                  />
                  <span className="text-[13px] sm:text-[14px] text-[#253d4e] flex-1 group-hover:text-[#3bb77e] transition-colors">
                    {item.name}
                  </span>
                  {item.count && (
                    <span className="text-[10px] sm:text-[11px] bg-[#e8f5ef] text-[#3bb77e] rounded-full px-1.5 sm:px-2 py-0.5 font-semibold whitespace-nowrap">
                      {item.count}
                    </span>
                  )}
                </label>
              ))}
            </div>

            {/* Reset */}
            {selectedCategories.length > 0 && (
              <button
                onClick={() => setSelectedCategories([])}
                className="mt-4 w-full text-xs sm:text-sm text-gray-400 hover:text-red-400 border border-dashed border-gray-200 hover:border-red-200 rounded-lg sm:rounded-xl py-2 transition-all duration-200 font-medium min-h-[44px] flex items-center justify-center"
              >
                ফিল্টার রিসেট
              </button>
            )}
          </aside>

          {/* ── MAIN PANEL ── */}
          <div className="flex flex-col gap-4 sm:gap-5 w-full">

            {/* Toolbar */}
            <div className="bg-white rounded-xl sm:rounded-2xl border-[1.5px] border-[#e8f5ef] px-3 sm:px-5 py-3 sm:py-4 flex items-center justify-between flex-wrap gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <span className="bg-[#e8f5ef] text-[#3bb77e] text-xs sm:text-sm font-bold rounded-lg px-2 sm:px-3 py-1 whitespace-nowrap">
                  ৫টি
                </span>
                <span className="text-xs sm:text-sm text-gray-400 hidden sm:inline">
                  ফলাফল পাওয়া গেছে
                </span>
                <span className="text-xs sm:hidden text-gray-400">
                  ফলাফল
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                <label htmlFor="sort-select" className="text-xs sm:text-sm text-gray-400 whitespace-nowrap hidden sm:inline">
                  সাজান:
                </label>
                <label htmlFor="sort-select" className="text-xs sm:hidden text-gray-400 whitespace-nowrap">
                  সাজান
                </label>
                <select
                  id="sort-select"
                  value={sortValue}
                  onChange={(e) => setSortValue(e.target.value)}
                  className="border-[1.5px] border-[#e8f5ef] focus:border-[#3bb77e] rounded-lg sm:rounded-xl px-2 sm:px-3 py-2 text-xs sm:text-sm text-[#253d4e] bg-[#f8fffe] outline-none cursor-pointer transition-all duration-200"
                >
                  {sortOptions.map((item, index) => (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products */}
            <div className="w-full">
              <HomeProducts />
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default FilterPanel;