import React from "react";
import Link from "next/link";

export const NavItem = ({ name, isActive }) => {
  return (
    <Link href="#">
      <h3
        className={`font-semibold text-md ${
          isActive ? "text-[#101C45]" : "text-[#00000080]"
        } `}
      >
        {name}
      </h3>
    </Link>
  );
};
