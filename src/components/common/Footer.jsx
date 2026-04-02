import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { siteData } from "../../helper/projectArryObj";
import Button from "../common/Button";
import allImages from "../../helper/imageProvider";
import CommonLogo from "./CommonLogo";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  // for images
  const { appImages } = allImages;

  return (
    <footer className="bg-gradient-to-br from-[#f8fffe] via-[#e8f5ef] to-[#f0fdf7]">
      {/* Main Footer Content */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-0">
            {/* Logo Section */}
            <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
              <CommonLogo />
              <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 leading-relaxed">
                তাজা পণ্যের সেরা বাজার দর
              </p>
            </div>

            {/* Top Cities */}
            <div className="col-span-1">
              <ul className="space-y-2 sm:space-y-2.5">
                <li className="heading-six text-[#253d4e] pb-2 sm:pb-3 font-bold">
                  শীর্ষ শহরসমূহ
                </li>
                {siteData.topCities.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className="text-xs sm:text-sm text-gray-600 hover:text-[#3bb77e] transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="col-span-1">
              <ul className="space-y-2 sm:space-y-2.5">
                <li className="heading-six text-[#253d4e] pb-2 sm:pb-3 font-bold">
                  বিভাগসমূহ
                </li>
                {siteData.categories.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className="text-xs sm:text-sm text-gray-600 hover:text-[#3bb77e] transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div className="col-span-1">
              <ul className="space-y-2 sm:space-y-2.5">
                <li className="heading-six text-[#253d4e] pb-2 sm:pb-3 font-bold">
                  আমাদের সম্পর্কে
                </li>
                {siteData.aboutUs.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className="text-xs sm:text-sm text-gray-600 hover:text-[#3bb77e] transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & App Download */}
            <div className="col-span-2 md:col-span-2 lg:col-span-1">
              <div className="space-y-6 sm:space-y-8">
                {/* Newsletter Section */}
                <div>
                  <h3 className="heading-six text-[#253d4e] pb-3 sm:pb-4 font-bold">
                    নিউজলেটার
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 bg-white rounded-full px-3 sm:px-4 py-2.5 sm:py-3 border-[1.5px] border-[#e8f5ef] focus-within:border-[#3bb77e] transition-colors">
                      <FiMail className="text-[#3bb77e] flex-shrink-0 text-lg" />
                      <input
                        type="email"
                        placeholder="আপনার ইমেইল"
                        className="flex-1 bg-transparent outline-none text-xs sm:text-sm text-[#253d4e] placeholder-gray-400 font-medium"
                      />
                    </div>
                    <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed">
                      অফার ও পণ্যের আপডেট পান
                    </p>
                  </div>
                </div>

                {/* App Download Section */}
                <div>
                  <h4 className="heading-six text-[#253d4e] pb-2 sm:pb-3 font-bold">
                    অ্যাপ ডাউনলোড
                  </h4>
                  <figure className="flex items-center gap-2 sm:gap-3">
                    {appImages.map((item) => (
                      <Link to="#" key={item.id}>
                        <img
                          src={item.img}
                          alt="App Store"
                          className="h-8 sm:h-10 md:h-12 object-contain hover:scale-105 transition-transform"
                        />
                      </Link>
                    ))}
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#3bb77e]/30 to-transparent" />

      {/* Bottom Footer */}
      <section className="py-6 sm:py-8">
        <Container>
          <div className="px-4 sm:px-6 md:px-0">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left font-medium">
                © ২০২৬ বাজার দর প্ল্যাটফর্ম। সর্বাধিকার সংরক্ষিত।
              </p>
              <div className="flex items-center gap-4 sm:gap-6">
                <Link
                  to="/privacy"
                  className="text-xs sm:text-sm text-gray-600 hover:text-[#3bb77e] transition-colors duration-200 font-medium"
                >
                  গোপনীয়তা নীতি
                </Link>
                <div className="hidden sm:block w-px h-4 bg-gray-300" />
                <Link
                  to="/terms"
                  className="text-xs sm:text-sm text-gray-600 hover:text-[#3bb77e] transition-colors duration-200 font-medium"
                >
                  শর্তাবলী
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
