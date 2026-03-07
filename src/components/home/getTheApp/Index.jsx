import React from "react";
import Container from "../../common/Container";
import allImages from "../../../helper/imageProvider";

const GetTheApp = () => {
  const { getTheAppBannar, getTheAppImages,appImages } = allImages;
  return (
    <section
      style={{ backgroundImage: `url(${getTheAppBannar})` }}
      className="object-cover py-10"
    >
      <Container>
        <div className="grid grid-cols-2 gap-x-[10px]  items-center">
          <div>
            <h2 className=" ">
              {" "}
              <span className="text-[70px]/[170%] font-bold text-success">
                {" "}
                বাজার দর -
              </span>
              <span className="block heading-two text-muted">
                প্রতিদিনের সরকারি ও বাজার মূল্যের স্বচ্ছ তথ্য
              </span>{" "}
            </h2>
            <p className="mt-4 heading-six text-secondary">
              “iOS ও Android-এ ডাউনলোড করুন”
            </p>
            <div className="mt-[57px] ">
              <figure className="flex items-center ">
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
          <div>
            <figure>
              <img src={getTheAppImages} alt="getTheAppImages" />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetTheApp;
