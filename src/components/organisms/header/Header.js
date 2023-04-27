import Image from "next/image";
import React from "react";
import { Navbar } from "../../molecules/navbar";
import { ButtonMenu, Container } from "@/components/atoms";

export const Header = () => {
  return (
    <section className="py-6 bg-transparent">
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-3/12">
            <Image src={"/logo.svg"} width={200} height={48} alt="logo" />
          </div>
          <div className="w-5/12">
            <Navbar />
          </div>
          <div className="w-4/12">
            <div className="flex gap-5 justify-end">
              <ButtonMenu type="primary" name="Login" />
              <ButtonMenu type="secondary" name="Book Now" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
