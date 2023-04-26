import { Header, Hero } from "@/components/organisms";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <>
      <Image
        src={"/bg-nurs.png"}
        width={590}
        height={847}
        alt="bg-nurs"
        className="absolute -z-10 md:right-10 xl:right-10 2xl:right-32 3xl:right-40"
      />
      <Header />
      <Hero />
    </>
  );
};

export default index;
