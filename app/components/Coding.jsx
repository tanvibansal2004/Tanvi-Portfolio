import React from 'react';
import Morelink from './Morelink';

const More = () => {
    return (
        <section className='mt-[10px] rounded-xl md:py-10 py-7 md:w-3/4 w-full mx-auto flex-col flex gap-5 lg:flex-cols-2' id="more">
            <div className='bg-[#313131] w-full p-6 rounded-xl items-center text-center'>
            <span className='text-xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Coding Journey</span>
                <p className='mt-7 px-5 text-md text-[#ADB7BE]'>
                My coding journey has been an exciting adventure of growth and learning. It began in my first year with C/C++, where I built a solid programming foundation. In my second year, I advanced to data structures and algorithms, honing my problem-solving skills. By the third year, I delved into web and app development, crafting innovative and interactive solutions. I also explored UI/UX design, adding a creative dimension to my skill set. Each step has shaped me into a passionate and curious developer, always eager to learn and innovate.
                </p>
                <div className='flex w-3/4 mx-auto mt-2 justify-center'>
                    <Morelink href='https://github.com/tanvibansal2004' path='/images/github-mark-white.png' />
                    <Morelink href='https://leetcode.com/u/bansaltanvi2004/' path='/images/leeetcode.png' />
                    <Morelink href='https://www.geeksforgeeks.org/user/chilliawaz/' path='/images/gg.jpg' />
                </div>

            </div>
            {/* <div className='bg-[#313131] w-full p-6 rounded-xl items-center text-center'>
                <span className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Extra Curricular</span>
                <p className='mt-4 text-[#ADB7BE]'>
                    Check out my extracurricular engagements, where I thrive beyond academics. From leadership roles to sports, explore how I balance passion with purpose, enriching my college experience and contributing positively to the community around me.
                </p>
                <div className='w-full lg:w-2/3 flex flex-col gap-3 mx-auto mt-7'>
                    <p className='p-4 lg:p-2 bg-[#181818] hover:bg-[#313131] text-white font-semibold rounded-full'>
                        Public Relations Head at Plinth, the technical fest of LNMIIT
                    </p>
                    <p className='p-4 lg:p-2 bg-[#181818] hover:bg-[#313131] text-white font-semibold rounded-full'>
                        Student Mentor at The Counselling and Guideance cell, LNMIIT
                    </p>
                    <p className='p-4 lg:p-2 bg-[#181818] hover:bg-[#313131] text-white font-semibold rounded-full'>
                        Played basketball at Desportivos, the sports fest of LNMIIT
                    </p>
                </div>

            </div> */}
        </section>
    )
}

export default More;