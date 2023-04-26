import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <main>
      <Image
        src={"/bg-nurs.png"}
        width={590}
        height={847}
        alt="bg-nurs"
        className="absolute -z-10 md:right-10 xl:right-10 2xl:right-32 3xl:right-40"
      />
      {/* NAVBAR */}
      <section className="py-6 bg-transparent">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between">
            <div className="w-3/12">
              <Image src={"/logo.svg"} width={200} height={48} alt="logo" />
            </div>
            <div className="w-5/12">
              <div className="flex gap-[50px] items-center justify-center">
                <h3 className="font-semibold text-md text-[#101C45]">Home</h3>
                <h3 className="font-normal text-md text-[#00000080]">
                  Features
                </h3>
                <h3 className="font-normal text-md text-[#00000080]">Blog</h3>
                <h3 className="font-normal text-md text-[#00000080]">
                  About Us
                </h3>
              </div>
            </div>
            <div className="w-4/12">
              <div className="flex gap-5 justify-end">
                <button className="border-0 bg-transparent text-[#101C45] font-semibold px-[20px] py-[8px]">
                  Login
                </button>
                <button className="border-2 border-solid border-black bg-transparent text-[#101C45] font-semibold px-[20px] py-[8px]">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-8">
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
        </div>
      </section>

      <section className="bg-[#203271] py-10">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="flex items-start gap-6">
                <Image
                  src={"/icon-calendar.svg"}
                  width={40}
                  height={40}
                  alt="icon-calendar"
                />
                <div>
                  <h4 className="font-mono text-lg font-bold text-white">
                    Online appointment scheduling
                  </h4>
                  <h6 className="font-mono text-md font-light text-[#FFFFFF80]">
                    Allows users to schedule appointments with their healthcare
                    provider through the app.
                  </h6>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-6">
                <Image
                  src={"/icon-bell.svg"}
                  width={40}
                  height={40}
                  alt="icon-bell"
                />
                <div>
                  <h4 className="font-mono text-lg font-bold text-white">
                    Medication reminders
                  </h4>
                  <h6 className="font-mono text-md font-light text-[#FFFFFF80]">
                    Allows users to schedule appointments with their healthcare
                    provider through the app.
                  </h6>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-6">
                <Image
                  src={"/icon-camera.svg"}
                  width={40}
                  height={40}
                  alt="icon-camera"
                />
                <div>
                  <h4 className="font-mono text-lg font-bold text-white">
                    Virtual consultations
                  </h4>
                  <h6 className="font-mono text-md font-light text-[#FFFFFF80]">
                    Allows users to schedule appointments with their healthcare
                    provider through the app.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default index;
