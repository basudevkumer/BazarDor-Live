import React from "react";
import Container from "../../common/Container";
import allImages from "../../../helper/imageProvider";

const GetTheApp = () => {
  const { getTheAppBannar, getTheAppImages, appImages } = allImages;

  return (
    <section
      style={{ backgroundImage: `url(${getTheAppBannar})` }}
      className="bg-cover bg-center bg-no-repeat py-8 sm:py-12 lg:py-16 mt-[50px] md:mt-[90px] lg:mt-[120px]"
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 lg:gap-x-10 items-center">
          {/* Left — Text Content */}
          <div className="text-center sm:text-left">
            <h2>
              <span className="text-[36px] sm:text-[50px] lg:text-[70px] leading-[150%] font-bold text-success">
                বাজার দর -
              </span>
              <span className="block text-[18px] sm:text-[22px] lg:text-[28px] font-semibold text-muted mt-1">
                প্রতিদিনের সরকারি ও বাজার মূল্যের স্বচ্ছ তথ্য
              </span>
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-semibold text-secondary">
              "iOS ও Android-এ ডাউনলোড করুন"
            </p>

            {/* App Store Buttons */}
            <div className="mt-6 sm:mt-8 lg:mt-[57px]">
              <figure className="flex items-center justify-center sm:justify-start gap-x-3 flex-wrap gap-y-3">
                {appImages.map((items) => (
                  <a href="#" key={items.id}>
                    <img
                      src={items.img}
                      alt={items.img}
                      className="h-[40px] sm:h-[48px] lg:h-[56px] w-auto object-contain"
                    />
                  </a>
                ))}
              </figure>
            </div>
          </div>

          {/* Right — App Image */}
          <div className="flex justify-center sm:justify-end">
            <figure className="w-[220px] sm:w-full max-w-[480px]">
              <img
                src={getTheAppImages}
                alt="getTheAppImages"
                className="w-full h-auto object-contain"
              />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetTheApp;
