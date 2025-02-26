import React from 'react'
import Projectcard from './Projectcard';

const Projects = () => {
    return (
        <section className='mt-[100px] rounded-xl md:py-10 py-7 md:w-5/6 w-full mx-auto' id="projects">
            <div className='md:flex md:flex-col flex-row items-center text-center'>
                <span className='text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Projects</span>
                <div className='w-5/6 items-center text-center mx-auto my-5'>
                    <p className='text-[#ADB7BE] text-md'>&quot;From concept to completion, each of my projects reflects a blend of problem-solving, creativity, and technical expertise. Discover the tangible outcomes that drive impactful solutions, pushing limits in ever evolving environments.&quot;</p>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-10 gap-4'>
                            <Projectcard
                                title='Tic-Tac-Toe'
                                smallDesc='2 Player Game'
                                desc='An engaging 2-player Tic-Tac-Toe game crafted with React.js. It features editable player names, a dynamic activity log tracking every move, and real-time updates declaring the winner or a draw. Built as part of my React.js learning journey, this project highlights interactivity and seamless state management.'
                                video='/TTT.mp4'
                                link='https://github.com/tanvibansal2004/Tic-Tac-Toe'
                            />
                            {/* <Projectcard
                                title='Mom Jokes'
                                smallDesc='Chrome Extension'
                                desc='This portfolio website reflects my journey of acquiring diverse skills and applying them to create impactful solutions. Discover a range of projects that highlight my technical expertise and creative innovation. See how I transform ideas into meaningful results, driving success in ever-evolving environments.'
                                image='/images/portfolio-project.png'
                                link=''
                            /> */}
                            <Projectcard
                                title='Bubble Game'
                                smallDesc='1 Player Game'
                                desc='A fun, single-player game designed to improve my JavaScript skills! Players have 60 seconds to match numbers on bubbles and score as many points as possible. This project highlights my ability to work with game logic, interactive design, and JavaScript.'
                                video='/BB.mp4'
                                link='https://github.com/tanvibansal2004/Bubble-Game'
                            />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
