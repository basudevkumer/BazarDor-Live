import React from "react";
import Container from "../../common/Container";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoLocationSharp } from "react-icons/io5";
import { MdDateRange, MdLocationCity } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BiError } from "react-icons/bi";
import { RiMapPin2Fill } from "react-icons/ri";
import { HiCheckCircle } from "react-icons/hi";

// Zod schema
const marketFormSchema = z.object({
  division: z.string().nonempty("দয়া করে বিভাগ নির্বাচন করুন"),
  city: z.string().nonempty("দয়া করে জেলা নির্বাচন করুন"),
  thana: z.string().nonempty("দয়া করে থানা নির্বাচন করুন"),
  date: z.string().nonempty("দয়া করে তারিখ নির্বাচন করুন"),
});

const MarketLocationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(marketFormSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#f8fffe] via-white to-[#e8f5ef]">
      <Container>
        <div className="px-4 sm:px-6 md:px-0">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <IoLocationSharp className="text-[#3bb77e] text-3xl sm:text-4xl" />
            </div>
            <h2 className="heading-one text-[#253d4e] text-[clamp(28px,6vw,36px)] font-bold mb-2 sm:mb-3">
              আপনার এলাকা নির্বাচন করুন
            </h2>
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <div className="h-1 w-6 sm:w-8 bg-[#3bb77e] rounded-full" />
              <span className="text-xs sm:text-sm text-gray-500 font-medium">বাজার দর জানতে</span>
              <div className="h-1 w-6 sm:w-8 bg-[#3bb77e] rounded-full" />
            </div>
          </div>

          {/* Form Container */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl shadow-[0px_8px_32px_rgba(156,163,175,0.12)] border border-[#e8f5ef] p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto space-y-8 sm:space-y-10"
          >
            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              
              {/* Division */}
              <div className="flex flex-col">
                <label
                  htmlFor="division"
                  className="text-sm sm:text-base font-semibold text-[#253d4e] mb-2 sm:mb-3 flex items-center gap-2"
                >
                  <RiMapPin2Fill className="text-[#3bb77e] text-lg" />
                  বিভাগ নির্বাচন করুন
                </label>
                <select
                  id="division"
                  {...register("division")}
                  className="w-full px-4 py-3 sm:py-3.5 bg-[#f8fffe] border-[1.5px] border-[#e8f5ef] rounded-xl text-sm sm:text-base text-[#253d4e] font-medium placeholder-gray-400 focus:outline-none focus:border-[#3bb77e] focus:ring-2 focus:ring-[#3bb77e]/20 transition-all duration-200 appearance-none cursor-pointer hover:border-[#3bb77e]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%233bb77e' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '2.5rem',
                  }}
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="dhaka">ঢাকা</option>
                  <option value="chattogram">চট্টগ্রাম</option>
                  <option value="rajshahi">রাজশাহী</option>
                  <option value="khulna">খুলনা</option>
                  <option value="barishal">বরিশাল</option>
                  <option value="sylhet">সিলেট</option>
                  <option value="rangpur">রংপুর</option>
                  <option value="mymensingh">ময়মনসিংহ</option>
                </select>
                {errors.division && (
                  <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1.5">
                    <BiError className="text-lg flex-shrink-0" />
                    {errors.division.message}
                  </p>
                )}
              </div>

              {/* City */}
              <div className="flex flex-col">
                <label
                  htmlFor="city"
                  className="text-sm sm:text-base font-semibold text-[#253d4e] mb-2 sm:mb-3 flex items-center gap-2"
                >
                  <MdLocationCity className="text-[#3bb77e] text-lg" />
                  জেলা নির্বাচন করুন
                </label>
                <select
                  id="city"
                  {...register("city")}
                  className="w-full px-4 py-3 sm:py-3.5 bg-[#f8fffe] border-[1.5px] border-[#e8f5ef] rounded-xl text-sm sm:text-base text-[#253d4e] font-medium placeholder-gray-400 focus:outline-none focus:border-[#3bb77e] focus:ring-2 focus:ring-[#3bb77e]/20 transition-all duration-200 appearance-none cursor-pointer hover:border-[#3bb77e]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%233bb77e' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '2.5rem',
                  }}
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="dhaka">ঢাকা</option>
                  <option value="gazipur">গাজীপুর</option>
                  <option value="narayanganj">নারায়ণগঞ্জ</option>
                  <option value="chattogram">চট্টগ্রাম</option>
                  <option value="coxsbazar">কক্সবাজার</option>
                  <option value="rajshahi">রাজশাহী</option>
                  <option value="khulna">খুলনা</option>
                  <option value="barishal">বরিশাল</option>
                  <option value="sylhet">সিলেট</option>
                </select>
                {errors.city && (
                  <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1.5">
                    <BiError className="text-lg flex-shrink-0" />
                    {errors.city.message}
                  </p>
                )}
              </div>

              {/* Thana */}
              <div className="flex flex-col">
                <label
                  htmlFor="thana"
                  className="text-sm sm:text-base font-semibold text-[#253d4e] mb-2 sm:mb-3 flex items-center gap-2"
                >
                  <IoLocationSharp className="text-[#3bb77e] text-lg" />
                  থানা নির্বাচন করুন
                </label>
                <select
                  id="thana"
                  {...register("thana")}
                  className="w-full px-4 py-3 sm:py-3.5 bg-[#f8fffe] border-[1.5px] border-[#e8f5ef] rounded-xl text-sm sm:text-base text-[#253d4e] font-medium placeholder-gray-400 focus:outline-none focus:border-[#3bb77e] focus:ring-2 focus:ring-[#3bb77e]/20 transition-all duration-200 appearance-none cursor-pointer hover:border-[#3bb77e]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%233bb77e' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '2.5rem',
                  }}
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="pallabi">পল্লবী</option>
                  <option value="mirpur">মিরপুর</option>
                  <option value="uttara">উত্তরা</option>
                  <option value="dhanmondi">ধানমন্ডি</option>
                  <option value="kotwali">কোতোয়ালি</option>
                  <option value="sonadanga">সোনাডাঙ্গা</option>
                  <option value="bakalia">বাকলিয়া</option>
                  <option value="bandar">বন্দর</option>
                </select>
                {errors.thana && (
                  <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1.5">
                    <BiError className="text-lg flex-shrink-0" />
                    {errors.thana.message}
                  </p>
                )}
              </div>

              {/* Date */}
              <div className="flex flex-col">
                <label
                  htmlFor="date"
                  className="text-sm sm:text-base font-semibold text-[#253d4e] mb-2 sm:mb-3 flex items-center gap-2"
                >
                  <MdDateRange className="text-[#3bb77e] text-lg" />
                  তারিখ নির্বাচন করুন
                </label>
                <input
                  type="date"
                  id="date"
                  {...register("date")}
                  className="w-full px-4 py-3 sm:py-3.5 bg-[#f8fffe] border-[1.5px] border-[#e8f5ef] rounded-xl text-sm sm:text-base text-[#253d4e] font-medium focus:outline-none focus:border-[#3bb77e] focus:ring-2 focus:ring-[#3bb77e]/20 transition-all duration-200 cursor-pointer hover:border-[#3bb77e]"
                />
                {errors.date && (
                  <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1.5">
                    <BiError className="text-lg flex-shrink-0" />
                    {errors.date.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4 sm:pt-6 md:pt-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#3bb77e] to-[#2da26d] hover:shadow-lg hover:shadow-[#3bb77e]/30 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-xl text-sm sm:text-base transition-all duration-300 active:scale-95 min-h-[44px] flex items-center justify-center gap-2 sm:gap-3 border border-[#3bb77e] hover:from-[#2da26d] hover:to-[#249060]"
              >
                <FiSearch className="text-lg sm:text-xl" />
                <span>বাজার দর দেখুন</span>
              </button>
            </div>

            {/* Info Text */}
            <div className="text-center pt-4 sm:pt-6">
              <p className="text-xs sm:text-sm text-gray-600 font-medium flex items-center justify-center gap-2">
                <HiCheckCircle className="text-[#3bb77e] text-lg" />
                আপনার এলাকার সর্বশেষ বাজার দর পাবেন
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default MarketLocationForm;