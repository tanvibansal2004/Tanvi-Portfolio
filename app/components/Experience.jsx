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
          Achievements
        </span>
        {/* bg-[#484747] */}

        <div className="md:mt-9 w-5/6 mx-auto px-0 py-5 ">
          <div className="md:flex justify-between">
            <div className="text-left">
              <h4 className="md:text-lg font-bold italic text-md">
                Winners - Smart India Hackathon, 2024
              </h4>
              <h6 className="text-sm mt-1 text-[#5f69cc] font-bold">
                <a href="https://www.sih.gov.in/sih2024PS" target="_blank" rel="noopener noreferrer">
                  SIH1694 - Ministry of Jal Shakti, India
                </a>
              </h6>
            </div>
            <div className="flex flex-col text-right">
              <div className="flex">
                <div>
                  <Image
                    src="/images/schedule.png"
                    height={20}
                    width={20}
                    className="mx-1"
                  ></Image>
                </div>
                <div className="italic text-sm">September 2024 - December 2024</div>
              </div>

              <div className="flex my-2 items-center md:justify-end">
                <div>
                  <Image
                    src="/images/placeholder.png"
                    height={20}
                    width={20}
                    className="mx-1"
                  ></Image>
                </div>
                <div className="text-sm">Jaipur - Bengaluru</div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-left text-md">
            <p>
              {/* Worked as part of Experiences and Devices Team in the M-365
              organization with primary focus to enrich the user experience and
              help users get all the personal information at their fingertips */}
              Worked in a team of 6 members to provide solution to problem statement - "Real-time Ganga river water quality forecasting using AI - enabled DSS, satellite data, IoT, and dynamic models."
            </p>
            {/* <ul className="mt-5 ml-9 list-disc space-y-2">
              <li>
                <span className="font-bold underline">
                  Source Attribution Implementation:
                </span>{" "}
                Developed and integrated APIs to display the source of inferred
                PIM data on the Live Persona Card (LPC) in M365 products.
              </li>
              <li>
                <span className="font-bold underline">UI Enhancement:</span>{" "}
                Added a source button next to inferred data, enabling users to
                view the originating email or document with a link to the full
                context.
              </li>
              <li>
                <span className="font-bold underline">
                  Privacy, Security, and Reduced Latency:
                </span>{" "}
                Ensured secure API exposure with minimal latency, maintaining
                user privacy and preventing data breaches.
              </li>
              <li>
                <span className="font-bold underline">Technologies Used:</span>{" "}
                Utilized React.js, TypeScript, C#, and .NET for frontend and
                backend development, and leveraged Git for version control.
              </li>
              <li>
                <span className="font-bold underline">
                  Debugging and Testing:
                </span>
                Gained experience with debugging techniques, and implemented
                end-to-end (E2E) and unit tests, using Storybook for isolated UI
                testing, ensuring a seamless user experience.
              </li>
            </ul> */}
          </div>
          <div className="text-left">
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
          </div>
        </div>
        <div className="md:mt-9 w-5/6 mx-auto px-0 py-5 ">
          <div className="md:flex justify-between">
            <div className="text-left">
              <h4 className="md:text-lg font-bold italic text-md">
                Winners - Hack The Waste Hackathon, 2023
              </h4>
              <h6 className="text-sm mt-1 text-[#5f69cc] font-bold">
                <a href="https://environment.rajasthan.gov.in/content/environment/en/rajasthan-state-pollution-control-board/information/Archive/WorldEnvironmentDay2023/Hackathon.html" target="_blank" rel="noopener noreferrer">
                Rajasthan State Pollution Control Board, India
                </a>
              </h6>
            </div>
            <div className="flex flex-col text-right">
              <div className="flex">
                <div>
                  <Image
                    src="/images/schedule.png"
                    height={20}
                    width={20}
                    className="mx-1"
                  ></Image>
                </div>
                <div className="italic text-sm">May 2023 - June 2023</div>
              </div>

              <div className="flex my-2 items-center md:justify-end">
                <div>
                  <Image
                    src="/images/placeholder.png"
                    height={20}
                    width={20}
                    className="mx-1"
                  ></Image>
                </div>
                <div className="text-sm">Jaipur</div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-left text-md">
            <p>
              {/* Worked as part of Experiences and Devices Team in the M-365
              organization with primary focus to enrich the user experience and
              help users get all the personal information at their fingertips */}
              Worked in a team of 5 members to provide solution to problem statement - "Sustainable solution to divert e-waste from informal to formal sector with responsible disposal, resource recovery and awareness while addressing infrastructure, behavior, and social impact challenges."
            </p>
            {/* <ul className="mt-5 ml-9 list-disc space-y-2">
              <li>
                <span className="font-bold underline">
                  Source Attribution Implementation:
                </span>{" "}
                Developed and integrated APIs to display the source of inferred
                PIM data on the Live Persona Card (LPC) in M365 products.
              </li>
              <li>
                <span className="font-bold underline">UI Enhancement:</span>{" "}
                Added a source button next to inferred data, enabling users to
                view the originating email or document with a link to the full
                context.
              </li>
              <li>
                <span className="font-bold underline">
                  Privacy, Security, and Reduced Latency:
                </span>{" "}
                Ensured secure API exposure with minimal latency, maintaining
                user privacy and preventing data breaches.
              </li>
              <li>
                <span className="font-bold underline">Technologies Used:</span>{" "}
                Utilized React.js, TypeScript, C#, and .NET for frontend and
                backend development, and leveraged Git for version control.
              </li>
              <li>
                <span className="font-bold underline">
                  Debugging and Testing:
                </span>
                Gained experience with debugging techniques, and implemented
                end-to-end (E2E) and unit tests, using Storybook for isolated UI
                testing, ensuring a seamless user experience.
              </li>
            </ul> */}
          </div>
          <div className="text-left">
            <button className="group">
              <a
                href="/Hack the Waste Certificate.pdf"
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
