import React from "react";
import Container from "../common/Container";
import { FiTarget, FiEye, FiHeart, FiTrendingUp, FiUsers, FiAward } from "react-icons/fi";
import { MdVerified, MdLocationOn } from "react-icons/md";
import { GrGlobe } from "react-icons/gr"; // ✅ FIXED

const AboutComp = () => {
  const stats = [
    { icon: <FiUsers className="text-2xl" />, number: "৫০,০০০+", label: "সক্রিয় ব্যবহারকারী" },
    { icon: <MdLocationOn className="text-2xl" />, number: "৬৪", label: "জেলা কভারেজ" },
    { icon: <FiTrendingUp className="text-2xl" />, number: "১০,০০০+", label: "দৈনিক মূল্য আপডেট" },
    { icon: <FiAward className="text-2xl" />, number: "২০२৫", label: "প্রতিষ্ঠিত বছর" },
  ];

  const values = [
    {
      icon: <FiEye className="text-3xl sm:text-4xl" />,
      title: "স্বচ্ছতা",
      description: "আমরা সত্যিকারের এবং যাচাইকৃত বাজার মূল্য প্রদান করি"
    },
    {
      icon: <FiTarget className="text-3xl sm:text-4xl" />,
      title: "নির্ভুলতা",
      description: "প্রতিটি মূল্য তথ্য সাবধানে যাচাই করা হয়"
    },
    {
      icon: <FiHeart className="text-3xl sm:text-4xl" />,
      title: "সম্প্রদায়",
      description: "আমরা কৃষক এবং ক্রেতাদের মধ্যে সেতুবন্ধন তৈরি করি"
    },
    {
      icon: <GrGlobe className="text-3xl sm:text-4xl" />,
      title: "সহজলভ্য",
      description: "সবার জন্য বাজার তথ্য সহজে পৌঁছে দেওয়া আমাদের লক্ষ্য"
    },
  ];

  const features = [
    { title: "রিয়েল-টাইম মূল্য", description: "প্রতিদিন আপডেটেড বাজার দর" },
    { title: "এলাকা-ভিত্তিক তথ্য", description: "আপনার এলাকার নির্দিষ্ট মূল্য" },
    { title: "বিশেষজ্ঞ পরামর্শ", description: "কৃষি বিশেষজ্ঞদের টিপস এবং পরামর্শ" },
    { title: "মোবাইল অ্যাপ", description: "যেকোনো সময় যেকোনো জায়গা থেকে ব্যবহার করুন" },
    { title: "সম্প্রদায় ফোরাম", description: "অন্যান্য কৃষক এবং ব্যবসায়ীদের সাথে যুক্ত হন" },
    { title: "সম্পূর্ণ বিনামূল্যে", description: "কোনো লুকানো খরচ বা সদস্যতা নেই" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#f8fffe] via-white to-[#e8f5ef]">
      {/* Hero Section */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 border-b border-[#e8f5ef]">
        <Container>
          <div className="px-4 sm:px-6 md:px-0 text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 bg-[#e8f5ef] rounded-full">
              <span className="text-xs sm:text-sm font-bold text-[#3bb77e]">আমাদের গল্প</span>
            </div>
            <h1 className="heading-one text-[#253d4e] text-[clamp(28px,6vw,40px)] font-bold mb-4 sm:mb-6">
              আজকের বাজার দর
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
              বাংলাদেশের কৃষক, ব্যবসায়ী এবং ভোক্তাদের জন্য সত্যিকারের বাজার মূল্য প্রদান করি। আমরা বিশ্বাস করি স্বচ্ছ তথ্য সকলের অধিকার।
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-8 bg-[#3bb77e] rounded-full" />
              <span className="text-xs sm:text-sm text-gray-500 font-medium">२०२५ থেকে আপনার সেবায় নিয়োজিত</span>
              <div className="h-1 w-8 bg-[#3bb77e] rounded-full" />
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 md:py-14 lg:py-16">
        <Container>
          <div className="px-4 sm:px-6 md:px-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl border border-[#e8f5ef] p-4 sm:p-6 md:p-8 text-center hover:shadow-lg hover:shadow-[#3bb77e]/10 transition-all duration-300"
                >
                  <div className="flex justify-center mb-2 sm:mb-4 text-[#3bb77e]">
                    {stat.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#253d4e] mb-1 sm:mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 border-y border-[#e8f5ef]">
        <Container>
          <div className="px-4 sm:px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
              
              {/* Mission */}
              <div className="bg-gradient-to-br from-[#e8f5ef] to-[#f0fdf7] rounded-2xl p-6 sm:p-8 md:p-10 border border-[#3bb77e]/20">
                <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <FiTarget className="text-3xl sm:text-4xl text-[#3bb77e] flex-shrink-0" />
                  <h2 className="heading-three text-[#253d4e] font-bold">আমাদের লক্ষ্য</h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  প্রতিটি কৃষক এবং ব্যবসায়ীকে সঠিক বাজার তথ্য প্রদান করে তাদের সিদ্ধান্ত গ্রহণকে আরও কার্যকর এবং লাভজনক করা। আমরা চাই বাংলাদেশের প্রতিটি কোণে মানুষ সঠিক মূল্য জানুক এবং ন্যায্য ব্যবসা করতে পারুক।
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-[#f8fffe] to-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#3bb77e]/20">
                <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <FiEye className="text-3xl sm:text-4xl text-[#3bb77e] flex-shrink-0" />
                  <h2 className="heading-three text-[#253d4e] font-bold">আমাদের দৃষ্টিভঙ্গি</h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  একটি স্বচ্ছ বাজার ব্যবস্থা তৈরি করা যেখানে তথ্য সকলের জন্য সহজলভ্য এবং সাশ্রয়ী। কৃষক এবং ভোক্তার মধ্যে সরাসরি যোগাযোগ স্থাপন করে মধ্যস্থতাকারীদের ভূমিকা কমিয়ে সবার জন্য ন্যায্য মূল্য নিশ্চিত করা।
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <Container>
          <div className="px-4 sm:px-6 md:px-0">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="heading-two text-[#253d4e] text-[clamp(28px,5vw,32px)] font-bold mb-4">
                আমাদের মূল্যবোধ
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                এই চারটি মূল্যবোধ আমাদের প্রতিটি সিদ্ধান্ত এবং কাজকে নির্দেশনা দেয়
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#e8f5ef] p-6 sm:p-8 text-center hover:shadow-lg hover:shadow-[#3bb77e]/10 hover:border-[#3bb77e]/50 transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-4 sm:mb-6 text-[#3bb77e] group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="heading-five text-[#253d4e] font-bold mb-2 sm:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white border-y border-[#e8f5ef]">
        <Container>
          <div className="px-4 sm:px-6 md:px-0">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="heading-two text-[#253d4e] text-[clamp(28px,5vw,32px)] font-bold mb-4">
                আমাদের বৈশিষ্ট্যসমূহ
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                যা আমাদের অন্যদের থেকে আলাদা করে তোলে
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#f8fffe] to-[#e8f5ef] border border-[#e8f5ef] p-6 sm:p-8 hover:shadow-lg hover:shadow-[#3bb77e]/10 transition-all duration-300 group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#3bb77e] opacity-5 rounded-full group-hover:opacity-10 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <MdVerified className="text-lg sm:text-xl text-[#3bb77e]" />
                      <h3 className="heading-six text-[#253d4e] font-bold">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <Container>
          <div className="px-4 sm:px-6 md:px-0">
            <div className="bg-gradient-to-r from-[#3bb77e] to-[#2da26d] rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 text-center max-w-3xl mx-auto">
              <h2 className="heading-two text-white text-[clamp(24px,5vw,32px)] font-bold mb-4 sm:mb-6">
                আমাদের সাথে যোগ দিন
              </h2>
              <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 leading-relaxed">
                প্রতিদিন হাজার হাজার কৃষক এবং ব্যবসায়ী আমাদের প্ল্যাটফর্ম ব্যবহার করে সঠিক সিদ্ধান্ত নিচ্ছেন। আপনিও যোগ দিন এবং আপনার ব্যবসা বৃদ্ধি করুন।
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-white text-[#3bb77e] font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-xl text-sm sm:text-base transition-all duration-300 hover:shadow-lg active:scale-95 min-h-[44px]">
                  এখনই শুরু করুন
                </button>
                <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-xl text-sm sm:text-base transition-all duration-300 hover:bg-white/10 min-h-[44px]">
                  আরও জানুন
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer Text */}
      <section className="py-8 sm:py-10 border-t border-[#e8f5ef]">
        <Container>
          <div className="px-4 sm:px-6 md:px-0 text-center">
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              © २०२५ আজকের বাজার দর। সর্বাধিকার সংরক্ষিত। | আমরা বাংলাদেশের কৃষি সেক্টরকে ডিজিটালভাবে সমর্থন করতে প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutComp;