import React from "react";
import Container from "../../common/Container";

const govtNotices = [
  {
    id: 1,
    badge: "নতুন",
    text: "নিত্যপ্রয়োজনীয় পণ্যের সরকারি মূল্য তালিকা হালনাগাদ করা হয়েছে।",
    date: "১২ মার্চ ২০২৬",
    source: "বাণিজ্য মন্ত্রণালয়",
  },
  {
    id: 2,
    badge: null,
    text: "অতিরিক্ত মূল্যে পণ্য বিক্রয় করলে ভোক্তা অধিকার আইনে ব্যবস্থা নেওয়া হবে।",
    date: "০৮ মার্চ ২০২৬",
    source: "ভোক্তা অধিদপ্তর",
  },
];

const tickerMessages = [
  "সরকার নির্ধারিত মূল্যে পণ্য কিনুন — অতিরিক্ত মূল্যে বিক্রয় আইনত দণ্ডনীয়",
  "ভোক্তা অধিকার হেল্পলাইন: ১৬১২১",
  "বাজার তদারকি কার্যক্রম চলমান — ঢাকা, চট্টগ্রাম, সিলেট",
  "রমজান উপলক্ষে নিত্যপণ্যের মূল্য স্থিতিশীল রাখতে সরকার সচেষ্ট",
];

const GovtMess = () => {
  return (
    <section className=" py-[50px] md:py-[90px] lg:py-[120px]">
      {/* ── TICKER BAR ── */}
      <div className="bg-[#253d4e] py-2.5 overflow-hidden">
        <div className="flex items-center">
          {/* label */}
          <div className="relative bg-[#3bb77e] text-white text-xs font-bold px-4 py-1 whitespace-nowrap flex-shrink-0 z-10
            after:content-[''] after:absolute after:right-[-10px] after:top-0 after:border-t-[13px] after:border-b-[13px]
            after:border-l-[10px] after:border-t-transparent after:border-b-transparent after:border-l-[#3bb77e]">
            সর্বশেষ
          </div>
          {/* scrolling text */}
          <div className="overflow-hidden flex-1 ml-5">
            <div className="flex gap-16 whitespace-nowrap animate-[ticker_22s_linear_infinite]">
              {[...tickerMessages, ...tickerMessages].map((msg, i) => (
                <span key={i} className="text-[#def9ec] text-sm font-medium before:content-['◆'] before:text-[#3bb77e] before:mr-2.5 before:text-[9px]">
                  {msg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN BANNER ── */}
      <div className="bg-gradient-to-br from-[#f0fdf7] via-[#e4f7ef] to-[#eef9f4] border-t-[3px] border-[#3bb77e] py-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* CARD 1 — সরকারি ঘোষণা */}
            <div className="bg-white rounded-2xl p-5 border-[1.5px] border-[#d6f0e4] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3bb77e]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#3bb77e]">
                  সরকারি ঘোষণা
                </span>
              </div>
              {govtNotices.map((notice) => (
                <div key={notice.id} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#e8f5ef] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#3bb77e" strokeWidth="2" strokeLinecap="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </div>
                  <div>
                    {notice.badge && (
                      <span className="inline-block text-[10px] font-bold bg-[#e8f5ef] text-[#3bb77e] rounded-md px-2 py-0.5 mb-1">
                        {notice.badge}
                      </span>
                    )}
                    <p className="para-normal text-[#253d4e] font-medium">{notice.text}</p>
                    <p className="text-xs text-gray-400 mt-1">{notice.date} · {notice.source}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CARD 2 — স্লোগান */}
            <div className="bg-[#253d4e] rounded-2xl p-6 flex flex-col justify-between gap-4 relative overflow-hidden">
              <div className="absolute -right-5 -bottom-5 w-32 h-32 rounded-full bg-[#3bb77e]/10" />
              <div className="text-5xl text-[#3bb77e]/60 font-serif leading-none">"</div>
              <p className="heading-five text-white relative z-10">
                ন্যায্য মূল্যে পণ্য কিনুন, সুরক্ষিত থাকুন — সরকার আপনার পাশে আছে।
              </p>
              <p className="text-sm text-[#7aaa90] relative z-10">বাংলাদেশ সরকার · বাণিজ্য মন্ত্রণালয়</p>
              <div className="flex items-center gap-2 relative z-10">
                <div className="w-7 h-7 rounded-full bg-[#3bb77e] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-xs text-[#def9ec] font-semibold">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</span>
              </div>
            </div>

            {/* CARD 3 — হেল্পলাইন */}
            <div className="bg-white rounded-2xl p-5 border-[1.5px] border-[#d6f0e4] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3bb77e]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#3bb77e]">
                  হেল্পলাইন ও সতর্কতা
                </span>
              </div>
              {/* helpline 1 */}
              <div className="flex items-center gap-3 bg-[#f8fffe] rounded-xl p-3 border border-[#eef7f3]">
                <div className="w-9 h-9 rounded-lg bg-[#e8f5ef] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#3bb77e" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12 19.79 19.79 0 0 1 1.21 3.18 2 2 0 0 1 3.22 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium">ভোক্তা অধিকার হেল্পলাইন</p>
                  <p className="text-base font-bold text-[#253d4e] tracking-wide">১৬১২১</p>
                  <p className="text-[11px] text-[#3bb77e] font-medium">২৪/৭ সেবা চালু আছে</p>
                </div>
              </div>
              {/* helpline 2 */}
              <div className="flex items-center gap-3 bg-[#f8fffe] rounded-xl p-3 border border-[#eef7f3]">
                <div className="w-9 h-9 rounded-lg bg-[#f0ecff] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#6438ea" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12 19.79 19.79 0 0 1 1.21 3.18 2 2 0 0 1 3.22 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium">বাজার তদারকি কেন্দ্র</p>
                  <p className="text-base font-bold text-[#6438ea] tracking-wide">০২-৯৫৫৪৩২১</p>
                  <p className="text-[11px] text-[#6438ea] font-medium">অভিযোগ জানাতে কল করুন</p>
                </div>
              </div>
              {/* warning */}
              <div className="flex items-center gap-3 bg-[#fff8e6] border-[1.5px] border-[#ffe099] rounded-xl p-3">
                <div className="w-8 h-8 bg-[#fff3cc] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#8a6200] leading-snug">
                  সরকারি মূল্যের বেশি দামে কিনতে বাধ্য করলে অভিযোগ করুন
                </p>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
};

export default GovtMess;