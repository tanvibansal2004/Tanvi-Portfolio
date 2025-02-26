import React from "react";
import Image from "next/image";

const Communities = () => {
  return (
    <section
      className="mt-[50px] bg-[#313131] rounded-xl md:py-10 py-7 md:w-3/4 w-full mx-auto"
      id="communities"
    >
      <div className="text-center text-[#ADB7BE]">
        <span className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Cells & Communities
        </span>
        {/* bg-[#484747] */}

        <div className="md:mt-9 w-5/6 mx-auto px-0 py-5 ">
          <div className="md:flex justify-between">
            <div className="text-left">
              <h4 className="md:text-lg font-bold text-md italic">
                Training and Placement Cell, LNMIIT
              </h4>
              <h6 className="text-sm mt-1 font-bold">
                Role - Senior Executive
              </h6>
            </div>
          </div>
          <div className="mt-2 text-left text-md">
            <ul className="mt-5 ml-9 list-disc space-y-2">
              <li>
                Lead and coordinate placement activities, including company interactions, placement drives, and career development sessions.
              </li>
              <li>
                Contribute to event planning, marketing strategies, and execution as part of the Event Management and Marketing team.
              </li>
              <li>
                Learn and apply values such as teamwork, effective communication, leadership, and problem-solving in a fast-paced and dynamic environment.
              </li>
            </ul>
          </div>
          
        </div>
        <div className="w-5/6 mx-auto px-0 py-5 ">
          <div className="md:flex justify-between">
            <div className="text-left">
              <h4 className="md:text-lg font-bold text-md italic">
                Counselling and Guidance Cell, LNMIIT
              </h4>
              <h6 className="text-sm mt-1 font-bold">
                Role - Associate Coordinator
              </h6>
            </div>
          </div>
          <div className="mt-2 text-left text-md">
            <ul className="mt-5 ml-9 list-disc space-y-2">
              <li>
                Lead mentoring programs to help freshers adjust to college life, providing guidance and support during their initial years.
              </li>
              <li>
                Organize fun and engaging events aimed at interpersonal development, promoting interaction and collaboration among students and faculty.
              </li>
              <li>
                Coordinate various resources and counseling sessions, ensuring students feel supported and connected in their new environment away from home.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-5/6 mx-auto px-0 py-5 ">
          <div className="md:flex justify-between">
            <div className="text-left">
              <h4 className="md:text-lg font-bold text-md italic">
                Google Developer Groups - on Campus, LNMIIT
              </h4>
              <h6 className="text-sm mt-1 font-bold">
                Creative and Development Teams
              </h6>
            </div>
          </div>
          <div className="mt-2 text-left text-md">
            <ul className="mt-5 ml-9 list-disc space-y-2">
              <li>
                Contributed as a member of both the Creative and Development teams of Google Developer Groups on Campus, LNMIIT, gaining experience in web development and UI/UX design.
              </li>
              <li>
                Learned and applied various frontend technologies, enhancing both development skills and design knowledge.
              </li>
              <li>
                Gained proficiency in design tools like Figma, blending creative design with technical development to create user-friendly solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communities;
