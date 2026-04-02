import React from "react";
import Container from "../common/Container";
import { FiCheckCircle, FiTarget, FiEye, FiAward, FiUsers } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const CompanyInfoComp = () => {
  const companyHighlights = [
    "সর্বদা সঠিক বাজার তথ্য প্রদান",
    "বাংলাদেশের ৬৪টি জেলা কভারেজ",
    "দৈনিক আপডেটেড বাজার দর",
    "কৃষক এবং ব্যবসায়ীদের জন্য সহায়ক প্ল্যাটফর্ম",
    "সম্পূর্ণ বিনামূল্যে এবং স্বচ্ছ সেবা"
  ];

  const stats = [
    { icon: <FiUsers className="text-2xl text-[#3bb77e]" />, number: "৫০,০০০+", label: "সক্রিয় ব্যবহারকারী" },
    { icon: <MdLocationOn className="text-2xl text-[#3bb77e]" />, number: "৬৪", label: "জেলা কভারেজ" },
    { icon: <FiAward className="text-2xl text-[#3bb77e]" />, number: "২০২৫", label: "প্রতিষ্ঠিত বছর" },
    { icon: <FiEye className="text-2xl text-[#3bb77e]" />, number: "১০,০০০+", label: "দৈনিক মূল্য আপডেট" },
  ];

  const values = [
    {
      icon: <FiEye className="text-3xl sm:text-4xl text-[#3bb77e]" />,
      title: "স্বচ্ছতা",
      description: "আমরা সত্যিকারের এবং যাচাইকৃত বাজার মূল্য প্রদান করি"
    },
    {
      icon: <FiTarget className="text-3xl sm:text-4xl text-[#3bb77e]" />,
      title: "নির্ভুলতা",
      description: "প্রতিটি মূল্য তথ্য সাবধানে যাচাই করা হয়"
    },
    {
      icon: <FiCheckCircle className="text-3xl sm:text-4xl text-[#3bb77e]" />,
      title: "সম্প্রদায়",
      description: "আমরা কৃষক এবং ক্রেতাদের মধ্যে সেতুবন্ধন তৈরি করি"
    },
    {
      icon: <FiAward className="text-3xl sm:text-4xl text-[#3bb77e]" />,
      title: "সহজলভ্য",
      description: "সবার জন্য বাজার তথ্য সহজে পৌঁছে দেওয়া আমাদের লক্ষ্য"
    },
  ];

  return (
    <section className=" py-10 sm:py-14 md:py-16 lg:py-20">
      <Container>
        <div className="px-4 sm:px-6 md:px-0 max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-two text-[#253d4e] font-bold mb-4">আমাদের কোম্পানি</h2>
            <p className="para-normal text-gray-600 max-w-2xl mx-auto">
              "আজকের বাজার দর" প্রতিদিন কৃষক, ব্যবসায়ী এবং ভোক্তাদের জন্য সঠিক এবং যাচাইকৃত বাজার তথ্য সরবরাহ করে।
            </p>
          </div>

          {/* Highlights + Mission/Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">

            {/* Left: Description & Highlights */}
            <div className="flex flex-col justify-center gap-6">
              <p className="para-normal text-gray-700">
                আমরা বিশ্বাস করি স্বচ্ছতা এবং নির্ভুলতা সঠিক ব্যবসায়িক সিদ্ধান্ত গ্রহণে গুরুত্বপূর্ণ ভূমিকা রাখে। আমাদের লক্ষ্য বাংলাদেশের প্রতিটি কৃষক এবং ব্যবসায়ীকে সঠিক তথ্য পৌঁছে দেওয়া এবং ন্যায্য ব্যবসা নিশ্চিত করা।
              </p>
              <ul className="space-y-3">
                {companyHighlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="text-[#3bb77e] text-xl mt-1 flex-shrink-0" />
                    <span className="para-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="bg-[#3bb77e] text-white font-semibold py-3 px-8 sm:px-12 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#2da26d]">
                  আরও জানুন
                </button>
              </div>
            </div>

            {/* Right: Core Values */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl border border-[#e8f5ef] p-5 sm:p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center mb-3">
                    {value.icon}
                  </div>
                  <h3 className="heading-six text-[#253d4e] font-bold mb-2">{value.title}</h3>
                  <p className="para-normal text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl border border-[#e8f5ef] p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-2 sm:mb-3">
                  {stat.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#253d4e] mb-1 sm:mb-2">{stat.number}</h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default CompanyInfoComp;