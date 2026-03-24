import React from "react";
import Container from "../common/Container";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const LocationComp = () => {
  const locations = [
    {
      name: "ঢাকা অফিস",
      address: "123, উত্তরা, ঢাকা 1230, বাংলাদেশ",
      phone: "+880 1234 567890",
      email: "dhaka@bazardor.com"
    },
    {
      name: "চট্টগ্রাম অফিস",
      address: "456, পতেঙ্গা, চট্টগ্রাম 4000, বাংলাদেশ",
      phone: "+880 9876 543210",
      email: "ctg@bazardor.com"
    },
    {
      name: "রাজশাহী অফিস",
      address: "789, কাজী রোড, রাজশাহী 6000, বাংলাদেশ",
      phone: "+880 1122 334455",
      email: "raj@bazardor.com"
    }
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-br from-[#f8fffe] to-[#e8f5ef]">
      <Container>
        <div className="px-4 sm:px-6 md:px-0 max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-two text-[#253d4e] font-bold mb-4">
              আমাদের অফিস লোকেশন
            </h2>
            <p className="para-normal text-gray-600 max-w-2xl mx-auto">
              “আজকের বাজার দর” আপনাকে দেশের বিভিন্ন জেলার অফিসে সাপোর্ট প্রদান করে। আমাদের অফিসগুলোতে সরাসরি যোগাযোগ করতে পারেন।
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {locations.map((loc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#e8f5ef] p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="heading-five text-[#253d4e] font-bold mb-3">
                  <MdLocationOn className="inline text-[#3bb77e] mr-2" />
                  {loc.name}
                </h3>
                <p className="para-normal text-gray-700 mb-2">{loc.address}</p>
                <p className="para-normal text-gray-700 flex items-center gap-2">
                  <MdPhone className="text-[#3bb77e]" /> {loc.phone}
                </p>
                <p className="para-normal text-gray-700 flex items-center gap-2 mt-1">
                  <MdEmail className="text-[#3bb77e]" /> {loc.email}
                </p>
              </div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
};

export default LocationComp;