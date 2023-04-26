import React from "react";

export const ButtonMenu = ({ type, name }) => {
  const classNames = {
    primary:
      "border-0 bg-transparent text-[#101C45] font-semibold px-[20px] py-[8px]",
    secondary:
      "border-2 border-solid border-black bg-transparent text-[#101C45] font-semibold px-[20px] py-[8px]",
  };
  return <button className={classNames[type]}>{name}</button>;
};
