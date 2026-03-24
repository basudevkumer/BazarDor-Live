import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Container from "../common/Container";
import { MdLocationCity } from "react-icons/md";
import { FiUpload, FiCheck } from "react-icons/fi";
import { BiError } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineTag } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { BiMoney } from "react-icons/bi";

// Zod schema for price submission
const priceSubmitSchema = z.object({
  division: z.string().nonempty("দয়া করে বিভাগ নির্বাচন করুন"),
  district: z.string().nonempty("দয়া করে জেলা নির্বাচন করুন"),
  thana: z.string().nonempty("দয়া করে থানা নির্বাচন করুন"),
  productName: z.string().min(2, "পণ্যের নাম ন্যূনতম ২ অক্ষর হতে হবে"),
  productCategory: z.string().nonempty("দয়া করে পণ্যের বিভাগ নির্বাচন করুন"),
  price: z.string().regex(/^\d+$/, "দয়া করে সঠিক দাম লিখুন"),
  unit: z.string().nonempty("দয়া করে ইউনিট নির্বাচন করুন"),
  date: z.string().nonempty("দয়া করে তারিখ নির্বাচন করুন"),
  source: z.string().nonempty("দয়া করে উৎস নির্বাচন করুন"),
  notes: z.string().optional(),
});

const SubmitPriceComp = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(priceSubmitSchema),
  });

  const onSubmit = (data) => {
    console.log("Price Submission Data:", data);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 ">
      <Container>
        <div className="px-4 sm:px-6 md:px-0">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <FiUpload className="text-[#3bb77e] text-3xl sm:text-4xl" />
            </div>
            <h1 className="heading-one text-[#253d4e] text-[clamp(28px,6vw,36px)] font-bold mb-2 sm:mb-3">
              মূল্য জমা দিন
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              আপনার এলাকার বাজার দর আমাদের সাথে শেয়ার করুন এবং সবাইকে সঠিক মূল্য জানতে সাহায্য করুন
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 flex-wrap">
              <div className="h-1 w-6 sm:w-8 bg-[#3bb77e] rounded-full" />
              <span className="text-xs sm:text-sm text-gray-600 font-medium">আজকের বাজার দর</span>
              <div className="h-1 w-6 sm:w-8 bg-[#3bb77e] rounded-full" />
            </div>
          </div>

          {/* Success Message */}
          {submitSuccess && (
            <div className="mb-8 p-4 sm:p-6 bg-green-50 border-l-4 border-[#3bb77e] rounded-lg max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <FiCheck className="text-[#3bb77e] text-2xl flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#3bb77e] text-sm sm:text-base mb-1">
                    সফলভাবে জমা দেওয়া হয়েছে!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    আপনার মূল্য তথ্য আমাদের কাছে পৌঁছেছে। ধন্যবাদ!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Form Container */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl shadow-[0px_8px_32px_rgba(156,163,175,0.12)] border border-[#e8f5ef] p-6 sm:p-8 md:p-10 lg:p-12 max-w-4xl mx-auto space-y-8 sm:space-y-10"
          >
            {/* Section 1: Location */}
            <div>
              <h2 className="heading-four text-[#253d4e] mb-6 flex items-center gap-2">
                <IoLocationSharp className="text-[#3bb77e]" />
                আপনার এলাকা
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                
                {/* Division */}
                <div className="flex flex-col">
                  <label className="text-sm sm:text-base font-semibold text-[#253d4e] mb-2 sm:mb-3 flex items-center gap-2">
                    <MdLocationCity className="text-[#3bb77e] text-lg" />
                    বিভাগ
                  </label>
                  <select
                    {...register("division")}
                    className="w-full px-4 py-3 sm:py-3.5 bg-[#f8fffe] border-[1.5px] border-[#e8f5ef] rounded-xl text-sm sm:text-base text-[#253d4e] font-medium focus:outline-none focus:border-[#3bb77e] focus:ring-2 focus:ring-[#3bb77e]/20 transition-all duration-200 appearance-none cursor-pointer hover:border-[#3bb77e]"
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

                {/* District */}
                <div className="flex flex-col">
                  <label className="text-sm sm:text-base font-semibold text-[#253d4e] mb-2 sm:mb-3 flex items-center gap-2">
                    <MdLocationCity className="text-[#3bb77e] text-lg" />
                    জেলা
                  </label>
                  <select
                    {...register("district")}
                    className="w-full px-4 py-3 sm:py-3.5 bg-[#f8fffe] border-[1.5px] border-[#e8f5ef] rounded-xl text-sm sm:text-base text-[#253d4e] font-medium focus:outline-none focus:border-[#3bb77e] focus:ring-2 focus:ring-[#3bb77e]/20 transition-all duration-200 appearance-none cursor-pointer hover:border-[#3bb77e]"
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
                  </select>
                  {errors.district && (
                    <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1.5">
                      <BiError className="text-lg flex-shrink-0" />
                      {errors.district.message}
                    </p>
                  )}
                </div>

                {/* Thana */}
                <div className="flex flex-col">
                  <label className="text-sm sm:text-base font-semibold text-[#253d4e] mb-2 sm:mb-3 flex items-center gap-2">
                    <IoLocationSharp className="text-[#3bb77e] text-lg" />
                    থানা/এলাকা
                  </label>
                  <select
                    {...register("thana")}
                    className="w-full px-4 py-3 sm:py-3.5 bg-[#f8fffe] border-[1.5px] border-[#e8f5ef] rounded-xl text-sm sm:text-base text-[#253d4e] font-medium focus:outline-none focus:border-[#3bb77e] focus:ring-2 focus:ring-[#3bb77e]/20 transition-all duration-200 appearance-none cursor-pointer hover:border-[#3bb77e]"
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
                  </select>
                  {errors.thana && (
                    <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1.5">
                      <BiError className="text-lg flex-shrink-0" />
                      {errors.thana.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#e8f5ef] to-transparent" />

            {/* Section 2: Product Information */}
            <div>
              <h2 className="heading-four text-[#253d4e] mb-6 flex items-center gap-2">
                <AiOutlineTag className="text-[#3bb77e]" />
                পণ্যের তথ্য
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Product Name */}
                <div className="flex flex-col">
                  <label className="text-sm sm:text-base font-semibold text-[#253d4e] mb-2 sm:mb-3 flex items-center gap-2">
                    <AiOutlineTag className="text-[#3bb77e] text-lg" />
                    পণ্যের নাম
                  </label>
                  <input
                    type="text"
                    placeholder="যেমন: চাল, ডাল, শাকসবজি"
                    {...register("productName")}
                    className="w-full px-4 py-3 sm:py-3.5 bg-[#f8fffe] border-[1.5px] border-[#e8f5ef] rounded-xl text-sm sm:text-base text-[#253d4e] font-medium placeholder-gray-400 focus:outline-none focus:border-[#3bb77e] focus:ring-2 focus:ring-[#3bb77e]/20 transition-all duration-200 hover:border-[#3bb77e]"
                  />
                  {errors.productName && (
                    <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1.5">
                      <BiError className="text-lg flex-shrink-0" />
                      {errors.productName.message}
                    </p>
                  )}
                </div>

                {/* Category */}
                <div className="flex flex-col">
                  <label className="text-sm sm:text-base font-semibold text-[#253d4e] mb-2 sm:mb-3 flex items-center gap-2">
                    <AiOutlineTag className="text-[#3bb77e] text-lg" />
                    বিভাগ
                  </label>
                  <select
                    {...register("productCategory")}
                    className="w-full px-4 py-3 sm:py-3.5 bg-[#f8fffe] border-[1.5px] border-[#e8f5ef] rounded-xl text-sm sm:text-base text-[#253d4e] font-medium focus:outline-none focus:border-[#3bb77e] focus:ring-2 focus:ring-[#3bb77e]/20 transition-all duration-200 appearance-none cursor-pointer hover:border-[#3bb77e]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%233bb77e' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      paddingRight: '2.5rem',
                    }}
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="vegetables">শাকসবজি</option>
                    <option value="rice">চাল</option>
                    <option value="lentils">ডাল</option>
                    <option value="fruits">ফলমূল</option>
                    <option value="fish">মাছ</option>
                    <option value="meat">মাংস</option>
                    <option value="eggs">ডিম</option>
                    <option value="dairy">দুধ ও দুগ্ধজাত</option>
                    <option value="oil">ভোজ্য তেল</option>
                    <option value="spices">মসলা</option>
                  </select>
                  {errors.productCategory && (
                    <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1.5">
                      <BiError className="text-lg flex-shrink-0" />
                      {errors.productCategory.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#e8f5ef] to-transparent" />

            {/* Section 3: Price Information */}
            <div>
              <h2 className="heading-four text-[#253d4e] mb-6 flex items-center gap-2">
                <BiMoney className="text-[#3bb77e]" />
                মূল্য তথ্য
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                
                {/* Price */}
                <div className="sm:col-span-2 flex flex-col">
                  <label className="text-sm sm:text-base font-semibold text-[#253d4e] mb-2 sm:mb-3 flex items-center gap-2">
                    <BiMoney className="text-[#3bb77e] text-lg" />
                    মূল্য (টাকা)
                  </label>
                  <input
                    type="number"
                    placeholder="যেমন: 850"
                    {...register("price")}
                    className="w-full px-4 py-3 sm:py-3.5 bg-[#f8fffe] border-[1.5px] border-[#e8f5ef] rounded-xl text-sm sm:text-base text-[#253d4e] font-medium placeholder-gray-400 focus:outline-none focus:border-[#3bb77e] focus:ring-2 focus:ring-[#3bb77e]/20 transition-all duration-200 hover:border-[#3bb77e]"
                  />
                  {errors.price && (
                    <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1.5">
                      <BiError className="text-lg flex-shrink-0" />
                      {errors.price.message}
                    </p>
                  )}
                </div>

                {/* Unit */}
                <div className="flex flex-col">
                  <label className="text-sm sm:text-base font-semibold text-[#253d4e] mb-2 sm:mb-3">
                    ইউনিট
                  </label>
                  <select
                    {...register("unit")}
                    className="w-full px-4 py-3 sm:py-3.5 bg-[#f8fffe] border-[1.5px] border-[#e8f5ef] rounded-xl text-sm sm:text-base text-[#253d4e] font-medium focus:outline-none focus:border-[#3bb77e] focus:ring-2 focus:ring-[#3bb77e]/20 transition-all duration-200 appearance-none cursor-pointer hover:border-[#3bb77e]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%233bb77e' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      paddingRight: '2.5rem',
                    }}
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="kg">কেজি</option>
                    <option value="liter">লিটার</option>
                    <option value="piece">পিস</option>
                    <option value="dozen">ডজন</option>
                  </select>
                  {errors.unit && (
                    <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1.5">
                      <BiError className="text-lg flex-shrink-0" />
                      {errors.unit.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#e8f5ef] to-transparent" />

            {/* Section 4: Additional Information */}
            <div>
              <h2 className="heading-four text-[#253d4e] mb-6 flex items-center gap-2">
                <MdDateRange className="text-[#3bb77e]" />
                অতিরিক্ত তথ্য
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Date */}
                <div className="flex flex-col">
                  <label className="text-sm sm:text-base font-semibold text-[#253d4e] mb-2 sm:mb-3 flex items-center gap-2">
                    <MdDateRange className="text-[#3bb77e] text-lg" />
                    তারিখ
                  </label>
                  <input
                    type="date"
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

                {/* Source */}
                <div className="flex flex-col">
                  <label className="text-sm sm:text-base font-semibold text-[#253d4e] mb-2 sm:mb-3 flex items-center gap-2">
                    <IoLocationSharp className="text-[#3bb77e] text-lg" />
                    উৎস
                  </label>
                  <select
                    {...register("source")}
                    className="w-full px-4 py-3 sm:py-3.5 bg-[#f8fffe] border-[1.5px] border-[#e8f5ef] rounded-xl text-sm sm:text-base text-[#253d4e] font-medium focus:outline-none focus:border-[#3bb77e] focus:ring-2 focus:ring-[#3bb77e]/20 transition-all duration-200 appearance-none cursor-pointer hover:border-[#3bb77e]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%233bb77e' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      paddingRight: '2.5rem',
                    }}
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="wholesaler">পাইকারি বাজার</option>
                    <option value="retail">খুচরা বাজার</option>
                    <option value="farm">খামার/মাঠ</option>
                    <option value="supplier">সরবরাহকারী</option>
                    <option value="other">অন্যান্য</option>
                  </select>
                  {errors.source && (
                    <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1.5">
                      <BiError className="text-lg flex-shrink-0" />
                      {errors.source.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Notes */}
              <div className="mt-4 sm:mt-6">
                <label className="text-sm sm:text-base font-semibold text-[#253d4e] mb-2 sm:mb-3 block">
                  অতিরিক্ত মন্তব্য (ঐচ্ছিক)
                </label>
                <textarea
                  placeholder="যদি কোনো বিশেষ তথ্য থাকে তাহলে লিখুন..."
                  {...register("notes")}
                  rows="4"
                  className="w-full px-4 py-3 sm:py-3.5 bg-[#f8fffe] border-[1.5px] border-[#e8f5ef] rounded-xl text-sm sm:text-base text-[#253d4e] font-medium placeholder-gray-400 focus:outline-none focus:border-[#3bb77e] focus:ring-2 focus:ring-[#3bb77e]/20 transition-all duration-200 resize-none hover:border-[#3bb77e]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4 sm:pt-6 md:pt-8">
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-[#3bb77e] to-[#2da26d] hover:shadow-lg hover:shadow-[#3bb77e]/30 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-xl text-sm sm:text-base transition-all duration-300 active:scale-95 min-h-[44px] flex items-center justify-center gap-2 sm:gap-3 border border-[#3bb77e] hover:from-[#2da26d] hover:to-[#249060]"
              >
                <FiUpload className="text-lg sm:text-xl" />
                <span>মূল্য জমা দিন</span>
              </button>
              <p className="text-xs sm:text-sm text-gray-500 font-medium text-center sm:text-left">
                আপনার তথ্য সম্পূর্ণ গোপনীয় রাখা হবে
              </p>
            </div>
          </form>

          {/* Info Box */}
          <div className="mt-10 sm:mt-12 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-[#3bb77e] rounded-lg p-4 sm:p-6">
              <h3 className="font-bold text-[#253d4e] text-sm sm:text-base mb-2">
                📌 গুরুত্বপূর্ণ তথ্য
              </h3>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2">
                <li>✓ নিয়মিত মূল্য জমা দিয়ে আমাদের সম্প্রদায়ের অংশ হন</li>
                <li>✓ সঠিক এবং বর্তমান মূল্য শেয়ার করুন</li>
                <li>✓ আপনার এলাকার সকল বাজারের তুলনা করুন</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubmitPriceComp;