import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <section
      className="mt-[50px] bg-[#313131] rounded-xl md:py-10 py-7 md:w-3/4 w-full mx-auto"
      id="experience"
    >
      <div className="text-center text-[#ADB7BE]">
        <span className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Experience
        </span>
        {/* bg-[#484747] */}

        <div className="md:mt-9 w-5/6 mx-auto px-0 py-5 ">
          <div className="md:flex justify-between">
            <div className="text-left">
              <h4 className="md:text-lg font-bold text-md">
                Teaching Assistant - Operating Systems Lab
              </h4>
              <h6 className="text-sm mt-1 text-[#5f69cc] font-bold">
                <a href="https://www.sih.gov.in/sih2024PS" target="_blank" rel="noopener noreferrer">
                  OS Lab Course, LNMIIT
                </a>
              </h6>
            </div>
            <div className="flex flex-col text-right">
              <div className="flex">
                <div className="italic text-sm">January 2025 - May 2025</div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-left text-md">
            <p>
            Assisted students in grasping core Operating Systems concepts during lab sessions and guided them through practical implementations. Provided one-on-one support in debugging code and understanding process management, synchronization, and memory handling.
            </p>
          </div>
          {/* <div className="text-left">
            <button className="group">
              <a
                href="/SIH Certificate.pdf"
                target="_blank"
                className="flex px-2 py-1 rounded hover:bg-[#313131] text-sm items-center mt-3 text-white w-25"
              >
                <span className="text-[#ADB7BE] group-hover:underline text-md">View certificate</span>
                <Image
                  src="/images/maximize.png"
                  width={15}
                  height={15}
                  className="ml-2"
                ></Image>
              </a>
            </button>
          </div> */}
        </div>
        <div className="md:mt-9 w-5/6 mx-auto px-0 py-5 ">
          <div className="md:flex justify-between">
            <div className="text-left">
              <h4 className="md:text-lg font-bold text-md">
                Teaching Assistant - Computer Networks Lab
              </h4>
              <h6 className="text-sm mt-1 text-[#5f69cc] font-bold">
                <a href="https://www.sih.gov.in/sih2024PS" target="_blank" rel="noopener noreferrer">
                  CN Lab Course, LNMIIT
                </a>
              </h6>
            </div>
            <div className="flex flex-col text-right">
              <div className="flex">
                <div className="italic text-sm">January 2025 - May 2025</div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-left text-md">
            <p>
            Supported students in understanding core Computer Networks concepts during lab sessions through practical experiments and simulations. Assisted in debugging network configurations and clarifying topics like routing, protocols, and socket programming.
            </p>
          </div>
          {/* <div className="text-left">
            <button className="group">
              <a
                href="/SIH Certificate.pdf"
                target="_blank"
                className="flex px-2 py-1 rounded hover:bg-[#313131] text-sm items-center mt-3 text-white w-25"
              >
                <span className="text-[#ADB7BE] group-hover:underline text-md">View certificate</span>
                <Image
                  src="/images/maximize.png"
                  width={15}
                  height={15}
                  className="ml-2"
                ></Image>
              </a>
            </button>
          </div> */}
        </div>
        <div className="md:mt-9 w-5/6 mx-auto px-0 py-5 ">
          <div className="md:flex justify-between">
            <div className="text-left">
              <h4 className="md:text-lg font-bold text-md">
                Teaching Assistant - Database Management Lab
              </h4>
              <h6 className="text-sm mt-1 text-[#5f69cc] font-bold">
                <a href="https://www.sih.gov.in/sih2024PS" target="_blank" rel="noopener noreferrer">
                  DBMS Lab Course, LNMIIT
                </a>
              </h6>
            </div>
            <div className="flex flex-col text-right">
              <div className="flex">
                <div className="italic text-sm">August 2024 - December 2024</div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-left text-md">
            <p>
            Guided students through hands-on lab sessions in Database Management Systems, reinforcing theoretical concepts with practical SQL exercises. Assisted in debugging queries, designing schemas, and understanding normalization, transactions, and indexing.
            </p>
          </div>
          <div className="text-left">
            <button className="group">
              <a
                href="/DBMS.pdf"
                target="_blank"
                className="flex px-2 py-1 rounded hover:bg-[#313131] text-sm items-center mt-3 text-white w-25"
              >
                <span className="text-[#ADB7BE] group-hover:underline text-md">View certificate</span>
                <Image
                  src="/images/maximize.png"
                  width={15}
                  height={15}
                  className="ml-2"
                ></Image>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;