import React from "react";
import Container from "../../common/Container";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
    // এখানে alert / console / API সব old code ঠিক থাকবে
    console.log("Form Data:", data);
  };

  return (
    <section className="py-[80px]">
      <Container>
        <div>
          <h2 className="text-secondary heading-one text-center mb-6 tracking-[5px]">
            আপনার এলাকা নির্বাচন করুন
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="  bg-white p-10 space-y-12 items-center max-w-[1100px] mx-auto rounded-[15px] shadow-[0px_0px_31px_4px_rgba(156,163,175,0.15)] "
          >
           <div className="grid grid-cols-2 gap-12">
             {/* Division */}
            <div className="flex flex-col">
              <label htmlFor="division">বিভাগ নির্বাচন করুন</label>
              <select id="division" {...register("division")}>
                <option value=""> নির্বাচন করুন</option>
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.division.message}
                </p>
              )}
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label htmlFor="city">জেলা নির্বাচন করুন</label>
              <select id="city" {...register("city")}>
                <option value=""> নির্বাচন করুন</option>
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>
            {/* Thana */}
            <div className="flex flex-col">
              <label htmlFor="thana">থানা নির্বাচন করুন</label>
              <select id="thana" {...register("thana")}>
                <option value=""> নির্বাচন করুন</option>
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.thana.message}
                </p>
              )}
            </div>
            {/* Date */}
            <div className="flex flex-col">
              <label htmlFor="date">তারিখ নির্বাচন করুন</label>
              <input type="date" id="date" {...register("date")} className="" />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>
           </div>
            <div className="flex justify-center">
              <button className="py-3 px-4 border rounded" type="submit">
                বাজার দর দেখুন
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default MarketLocationForm;
