"use client";
import React from 'react';
import Skillcard from './Skillcard';

const skills = [
  { image: '/images/c++.png', skill: 'C/C++' },
  // { image: '/images/java.png', skill: 'Java' },
  { image: '/images/dsa.png', skill: 'DSA' },
  { image: '/images/webdev.png', skill: 'Web Development' },
  { image: '/images/api.png', skill: 'APIs' },
  { image: '/images/oops.png', skill: 'OOPs' },
  { image: '/images/database-management.png', skill: 'DBMS' },
  { image: '/images/os.png', skill: 'OS' },
  { image: '/images/cn.png', skill: 'CN' }
];

const Skills = () => {
  // Create a combined list of skills to achieve the infinite scroll
  const combinedSkills = [...skills, ...skills];
  // console.log(combinedSkills.map(skill => skill.skill)); // Logs all skill names


  return (
    <section className='mt-[160px] bg-[#313131] rounded-xl md:py-10 py-7 md:w-3/4 w-full mx-auto' id="skills">
      <div className='text-center'>
        <span className='text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Skill Set</span>
        <p className='text-[#ADB7BE] text-md mt-5 mx-10 mb-7'>&quot;Driven by proficiency in cutting-edge technologies and programming languages, I bring a versatile skill set to craft innovative solutions, fueling success in fast-paced and evolving projects.&quot;</p>
        
        <div className='relative mt-10'>
          {/* Infinite scroll for large screens */}
          {/* <div className='hidden md:flex md:overflow-hidden md:w-5/6 md:mx-auto'>
            <div className='flex w-full animate-scroll'>
              {combinedSkills.map((skill, index) => (
                <div className='flex-shrink-0 w-30 mx-4' key={index}>
                  <Skillcard image={skill.image} skill={skill.skill} />
                </div>
              ))}
            </div>
          </div> */}
          <div className='hidden md:flex md:overflow-hidden md:w-5/6 md:mx-auto'>
            <div className='flex animate-scroll w-auto'>
              {combinedSkills.map((skill, index) => (
                <div className='flex-shrink-0 mx-4 w-[120px]' key={index}>
                  <Skillcard image={skill.image} skill={skill.skill} />
                </div>
              ))}
            </div>
          </div>


          {/* Vertical list for mobile screens */}
          <div className='md:hidden flex flex-col'>
            {skills.map((skill, index) => (
              <div className='mb-10' key={index}>
                <Skillcard image={skill.image} skill={skill.skill} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Skills;
