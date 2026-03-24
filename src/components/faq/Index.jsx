import React, { useState } from "react";
import Container from "../common/Container";
import { FiChevronDown } from "react-icons/fi";

const FaqComp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "আজকের বাজার দর কীভাবে আপডেট করা হয়?",
      answer:
        "আমাদের টিম প্রতিদিন বিভিন্ন বাজার থেকে তথ্য সংগ্রহ করে এবং যাচাই করার পর আপডেট করে।"
    },
    {
      question: "আমি কি নিজের এলাকার বাজার দর যোগ করতে পারি?",
      answer:
        "হ্যাঁ, আপনি আমাদের প্ল্যাটফর্মে আপনার এলাকার বাজার দর সাবমিট করতে পারবেন।"
    },
    {
      question: "এই সেবা কি সম্পূর্ণ বিনামূল্যে?",
      answer:
        "হ্যাঁ, আমাদের সকল ফিচার সম্পূর্ণ ফ্রি এবং কোনো লুকানো চার্জ নেই।"
    },
    {
      question: "কোন কোন জেলা কভার করা হয়?",
      answer:
        "আমরা বাংলাদেশের সকল ৬৪টি জেলার বাজার তথ্য কভার করার চেষ্টা করছি।"
    },
    {
      question: "মোবাইল থেকে ব্যবহার করা যাবে?",
      answer:
        "হ্যাঁ, আমাদের ওয়েবসাইট সম্পূর্ণ responsive এবং মোবাইল-friendly।"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-br from-[#f8fffe] to-[#e8f5ef]">
      <Container>
        <div className="px-4 sm:px-6 md:px-0 max-w-3xl mx-auto">
          
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="heading-two text-[#253d4e] font-bold mb-4">
              প্রায়শই জিজ্ঞাসিত প্রশ্ন
            </h2>
            <p className="para-normal text-gray-600">
              আপনার যেকোনো প্রশ্নের উত্তর এখানে খুঁজে নিন
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 sm:space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#e8f5ef] rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-6 text-left"
                >
                  <h3 className="heading-six text-[#253d4e]">
                    {faq.question}
                  </h3>

                  <FiChevronDown
                    className={`text-xl text-[#3bb77e] transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-4 sm:px-6 transition-all duration-300 ${
                    activeIndex === index
                      ? "max-h-40 opacity-100 pb-4 sm:pb-6"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="para-normal text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FaqComp;