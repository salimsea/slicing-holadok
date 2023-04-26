import { NavItem } from "@/components/atoms";
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex gap-[50px] items-center justify-center">
      <NavItem name="Home" isActive />
      <NavItem name="Features" />
      <NavItem name="Blog" />
      <NavItem name="About Us" />
    </div>
  );
};
