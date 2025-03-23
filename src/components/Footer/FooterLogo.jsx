import React from "react";
import { Link } from "react-router-dom";

const FooterLogo = ({ data, color }) => {
  return (
    <div className={`text-[${color}] flex flex-row gap-5 text-[1.5rem]`}>
      {data.map((item, index) => {
        return (
          <Link key={index} to={item.link} target='_blank'>
            <item.icon />
          </Link>
        );
      })}
    </div>
  );
};

export default FooterLogo;
