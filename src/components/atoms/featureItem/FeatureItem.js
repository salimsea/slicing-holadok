import Image from "next/image";
import React from "react";

export const FeatureItem = ({ src, title, desc }) => {
  return (
    <div className="flex items-start gap-6" data-aos="zoom-in">
      <Image src={src} width={40} height={40} alt="icon-bell" />
      <div>
        <h4 className="font-mono text-lg font-bold text-white">{title}</h4>
        <h6 className="font-mono text-md font-light text-[#FFFFFF80]">
          {desc}
        </h6>
      </div>
    </div>
  );
};
