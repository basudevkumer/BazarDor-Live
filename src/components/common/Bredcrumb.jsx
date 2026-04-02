import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import allIcons from "../../helper/iconProvider";

const Bredcrumb = () => {
  const { homeIcon, greaterThan } = allIcons;
  const { pathname } = useLocation();
  const patharr = pathname.split("/").filter(Boolean);

  return (
    <div className="py-6 bg-green-200">
      <Container>
        <nav className="flex items-center">
          <Link
            to={"/"}
            className="navitems text-secondary flex items-center gap-x-2"
          >
            <span className="inline-block">{homeIcon}</span>
            Home
          </Link>

          {patharr.map((items, index) => {
            const segment = "/" + patharr.slice(0, index + 1).join("/");
            const label = items
              .replace(/-/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase());
            const isLast = index === patharr.length - 1;

            return (
              <span key={segment} className="flex items-center">
                <span className="text-secondary px-3">{greaterThan}</span>
                {isLast ? (
                  <span className="navitems text-gray-500">{label}</span>
                ) : (
                  <Link to={segment} className="navitems text-text   ">
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