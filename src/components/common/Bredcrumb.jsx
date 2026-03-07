import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import allIcons from "../../helper/iconProvider";

const Bredcrumb = () => {
  //get icon
  const { homeIcon, greaterThan } = allIcons;

  // get current location path
  const { pathname } = useLocation();

  // here process path
  const patharr = pathname.split("/").filter(Boolean);

  return (
    <div className="py-6 bg-green-200">
      <Container>
        <nav className="flex items-center">
          <Link
            to={"/"}
            className="navitems text-secondary flex items-center gap-x-2"
          >
            {/* Home Page Link */}
            <span className="text-xl inline-block">{homeIcon}</span> Home
          </Link>

          {patharr.map((items, index) => {
            // catch path name
            const segment = "/" + patharr.slice(0, index + 1).join("/");
            // word of first letter converte into toUppercase
            const label = items
              .replace(/-/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase());
            // get last items
            const isLast = index === patharr.length - 1;

            return (
              <span key={segment} className="flex items-center">
                <span className=" text-secondary px-3">{greaterThan}</span>
                {isLast ? (
                  <span className="  navitems text-muted">{label}</span>
                ) : (
                  <Link to={segment} className="sm_400 text-gray_600">
                    {label}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      </Container>
    </div>
  );
};

export default Bredcrumb;
