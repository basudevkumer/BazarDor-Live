import React from "react";
import Container from "../common/Container";
import { FiUsers, FiAward, FiShare2 } from "react-icons/fi";

const AffiliateComp = () => {
  const benefits = [
    "সহজ রেফারেল লিংক শেয়ার করুন",
    "প্রতিটি সফল রেফারেল এ কমিশন পান",
    "বিশ্বস্ত এবং ট্র্যাকেবল সিস্টেম",
    "বাংলাদেশের কৃষক ও ব্যবসায়ীদের সহায়তা করুন"
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 ">
      <Container>
        <div className="px-4 sm:px-6 md:px-0 max-w-4xl mx-auto text-center">

          {/* Heading */}
          <h2 className="heading-two text-[#253d4e] font-bold mb-4">
            অ্যাফিলিয়েট প্রোগ্রাম
          </h2>
          <p className="para-normal text-gray-600 mb-10">
            “আজকের বাজার দর” অ্যাফিলিয়েট প্রোগ্রামের মাধ্যমে আপনি সহজেই অর্থ উপার্জন করতে পারেন। আপনার বন্ধু এবং পরিচিতদের আমাদের প্ল্যাটফর্মে আনুন এবং কমিশন পান।
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white border border-[#e8f5ef] rounded-2xl p-5 hover:shadow-lg transition-all duration-300"
              >
                <FiShare2 className="text-[#3bb77e] text-2xl flex-shrink-0 mt-1" />
                <p className="para-medium text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-[#3bb77e] text-white font-semibold py-3 px-8 sm:px-12 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#2da26d]">
            এখনি যোগ দিন
          </button>

        </div>
      </Container>
    </section>
  );
};

export default AffiliateComp;