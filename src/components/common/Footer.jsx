import React from "react";
import Container from "./Container";
import { siteData } from "../../helper/projectArryObj";
import Button from "../common/Button";
import allImages from "../../helper/imageProvider";

const Footer = () => {
  // for images

  const { appImages } = allImages;

  return (
    <footer>
      <Container>
        <div className="grid grid-cols-6 gap-x-[80px]">
          <div className="">
            <h6 className="text-success heading-six">বাজার দর</h6>
          </div>
          <div className="">
            <ul className="space-y-[10px]">
              <li className="heading-six text-primary pb-4">শীর্ষ শহরসমূহ</li>
              {siteData.topCities.map((items) => {
                return (
                  <li key={items.id}>
                    <a href="#" className="para-normal text-secondary">
                      {items.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <ul className="space-y-[10px]">
              <li className="heading-six text-primary pb-4">বিভাগসমূহ</li>
              {siteData.categories.map((items) => {
                return (
                  <li key={items.id}>
                    <a href="#" className="para-normal text-secondary">
                      {items.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <ul className="space-y-[10px]">
              <li className="heading-six text-primary pb-4">আমাদের সম্পর্কে</li>
              {siteData.aboutUs.map((items) => {
                return (
                  <li key={items.id}>
                    <a href="#" className="para-normal text-secondary">
                      {items.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-2    ">
            <h3 className="heading-six text-primary pb-[34px]">
              আমাদের নিউজলেটারে সাবস্ক্রাইব করুন
            </h3>
            <div>
              <div className="flex justify-between">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল লিখুন"
                  className="border px-4 w-[230px] border border-gray-400 rounded-[40px] para-normal text-secondary"
                />
                <Button
                  children={"সাবস্ক্রাইব করুন"}
                  iconClassName={"hidden"}
                />
              </div>
              <p className="text-secondary font-semibold text-[12px] mt-3">
                অফার ও পণ্যের আপডেট পেতে এখনই নিবন্ধন করুন
              </p>
            </div>

            <div className="mt-7"> 
              <h4 className="mb-4 heading-five text-primary">অ্যাপ ডাউনলোড করুন</h4>
              <figure className="flex  justify-between ">
                {appImages.map((items) => {
                  return (
                    <a href="#" key={items.id}>
                      <img src={items.img} alt={items.img} />
                    </a>
                  );
                })}
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
