import React from "react";
import Container from "../common/Container";
import { FiUsers, FiAward, FiTarget } from "react-icons/fi";

const CareerComp = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Dhaka, Bangladesh",
      desc: "আমরা খুঁজছি একজন দক্ষ ফ্রন্টএন্ড ডেভেলপার যারা React, Tailwind, এবং modern web development জানেন।"
    },
    {
      title: "Backend Developer",
      type: "Full-time",
      location: "Remote / Dhaka",
      desc: "Node.js/Express এবং Database management এর দক্ষ ব্যাকএন্ড ডেভেলপার প্রয়োজন।"
    },
    {
      title: "UI/UX Designer",
      type: "Part-time",
      location: "Dhaka, Bangladesh",
      desc: "একজন creative designer প্রয়োজন, যিনি clean, modern, এবং responsive design বানাতে পারেন।"
    }
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 ">
      <Container>
        <div className="px-4 sm:px-6 md:px-0 max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-two text-[#253d4e] font-bold mb-4">
              ক্যারিয়ার
            </h2>
            <p className="para-normal text-gray-600 max-w-2xl mx-auto">
              “আজকের বাজার দর” দলের অংশ হয়ে দেশের কৃষি ও ব্যবসায়িক তথ্যকে ডিজিটালাইজ করতে সাহায্য করুন। আমাদের সাথে যোগ দিন!
            </p>
          </div>

          {/* Job Openings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#e8f5ef] overflow-hidden hover:shadow-lg hover:shadow-[#3bb77e]/10 transition-all duration-300 group"
              >
                <div className="p-5 sm:p-6 flex flex-col h-full justify-between">

                  {/* Job Title */}
                  <h3 className="heading-five text-[#253d4e] font-bold mb-2 group-hover:text-[#3bb77e] transition-colors">
                    {job.title}
                  </h3>

                  {/* Job Meta */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FiTarget /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiUsers /> {job.location}
                    </span>
                  </div>

                  {/* Job Description */}
                  <p className="para-normal text-gray-600 mb-4">{job.desc}</p>

                  {/* Apply Button */}
                  <button className="bg-[#3bb77e] text-white font-semibold py-2 px-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#2da26d]">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
};

export default CareerComp;