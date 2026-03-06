import React from "react";
import allImages from "../../helper/imageProvider";
import Container from "../common/Container";

const SliderCard = () => {
  // for images
  const { banner, heroImages } = allImages;
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="object-cover w-full h-[477px]  relative overflow-hidden "
    >
      <figure className="absolute top-0 right-0">
        <img src={heroImages} alt="heroImages" />
      </figure>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4  text-start gap-x-[148px] ">
          <div className="space-y-6  col-span-3  py-[75px]">
            <div className="flex   items-center  gap-x-[100px]">
              <div class="">
                <h2 className="text-[75px] font-bold text-success">পেঁয়াজ</h2>
                <p className="heading-four text-secondary">
                  পণ্যের ধরন : শাকসবজি
                </p>
              </div>

              <div class="">
                <p className="heading-three text-secondary">
                  সরকারি মূল্য :{" "}
                  <span className="text-govt-price">৫০ টাকা / কেজি</span>
                </p>
                <p className="heading-three text-secondary">
                  বর্তমান বাজার মূল্য : <span> ৫৫ টাকা / কেজি</span>
                </p>
              </div>
            </div>

            <div class=" grid grid-cols-3  ">
              <div className="w-fit space-y-3">
                <p className="heading-four">ওজন: 1 কেজি</p>
                <p className="heading-four">উৎপত্তি অঞ্চল: ঢাকা</p>
              </div>
              <div className="space-y-3">
                <p className="heading-four whitespace-nowrap">
                  সংরক্ষণ: ঠান্ডা ও শুকনো স্থানে রাখুন
                </p>
                <p className="heading-four">স্টক অবস্থা: পর্যাপ্ত</p>
              </div>
            </div>

            <div class="">
              <p className="para-medium text-secondary">
                সর্বশেষ আপডেট : 12 মার্চ 2026
              </p>
              <p className="para-medium text-secondary">
                নোট : সরকারি সরবরাহকৃত পণ্য
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SliderCard;
