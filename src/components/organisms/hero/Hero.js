import { Container } from "@/components/atoms";
import { FeatureList } from "@/components/molecules";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <>
      <section>
        <Container>
          <div className="flex gap-5 items-center">
            <div className="w-5/12">
              <div>
                <h1 className="font-mono text-5xl font-medium text-[#101C45] mb-4">
                  Get the healthcare you need, when you need it.
                </h1>
                <p className="font-mono text-lg font-normal text-[#101C45] mb-10">
                  Manage all of your healthcare needs in one convenient place –
                  from booking appointments to tracking your health history.
                </p>
                <button className=" bg-[#203271] text-white font-normal px-[35px] py-[15px] text-lg mb-32">
                  Book an Appointment
                </button>
              </div>
            </div>
            <div className="w-7/12 justify-end flex relative">
              <div className="p-5 bg-white shadow-quotes rounded-lg max-w-[292px] absolute left-0 top-24">
                {/* PROFIL */}
                <div className="flex justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={"/user-quotes.png"}
                      width={30}
                      height={30}
                      alt="user-quotes"
                    />
                    <h6 className="text-xs font-semibold text-black">
                      Jane Doe
                    </h6>
                  </div>
                  <Image
                    src={"/icon-quotes.svg"}
                    width={24}
                    height={24}
                    alt="icon-quotes"
                  />
                </div>
                {/* ANSWER */}
                <p className="text-[#101C45] font-normal text-xs">
                  “The doctor appointment app has been great for me. Scheduling
                  appointments and getting medication reminders is much easier,
                  and I love the option for virtual consultations. I{"'"}d
                  recommend this app to others.”
                </p>
              </div>
              <Image src={"/nurs.png"} width={500} height={750} alt="nurs" />
            </div>
          </div>
        </Container>
      </section>

      <FeatureList />
    </>
  );
};
