import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <>
      <header className="bg-[#bcf0c154]">
        <Container>
          <div>
            <div>
              <h1 className="heading-three py-4 text-[#0f172adc] ">
                আজকের বাজার দর
              </h1>
            </div>
            <div>
              <select name="language" id="language">
                <option value="">ভাষা নির্বাচন করুন</option>
                <option value="bn">বাংলা</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </Container>
      </header>
      <nav></nav>
    </>
  );
};

export default Navbar;
