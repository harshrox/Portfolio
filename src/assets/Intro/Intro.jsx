import React from 'react';
import { useState } from 'react'
import '../../App.css';
import { TypeAnimation } from 'react-type-animation';
import profile from '../../assets/Images/Photo.png';
import linkedin from '../../assets/Images/linkedin.svg';
import github from '../../assets/Images/github.svg';
import leetcode from '../../assets/Images/leetcode.svg';


function Intro() {

    const [activeLink, setActiveLink] = useState(0);  // Hook used to update the highlighting of navbar links based on which section is being viewed

	const [menuIcon, setMenuIcon] = useState(true);   // Hook used to activate or deactivate the menu icon(true means menu icon is visible and vice versa)

	const [closeIcon, setCloseIcon] = useState(false);  // Hook used to activate or deactivate the close icon(true means close icon is visible and vice versa)

    return (
        <>
            {/* Navbar and Intro */}
            <section className="flex flex-col min-h-screen" id="Intro">
                {/* Navbar */}
                <nav className="bg-black fixed w-full z-20">
                    <div className={`px-6 md:px-4 py-3 md:py-5 flex justify-center md:items-center md:justify-evenly shadow-lg shadow-slate-800`}>
                        <div className={`${menuIcon ? 'absolute md:relative left-5 md:left-0 top-[20px] md:top-0 block' : 'hidden md:block'}`}>
                            <h1 className="font-bold text-xl">PORTFOLIO</h1>
                        </div>
                        <div className={`overflow-hidden ${menuIcon ? 'transition-max-h duration-500 max-h-0' : 'transition-max-h duration-1000 max-h-[1000px]'} md:max-h-[none] md:block text-xl md:text-base mt-8 mb-2 md:mt-0 md:mb-0`}>
                            {/* <div className={`${menuIcon ? 'md:block hidden' : 'block text-xl md:text-base mt-8 mb-2 md:mt-0 md:mb-0'}`}> */}
                            <ul className="flex md:flex-row flex-col md:mx-0 gap-5 md:gap-8 items-center">
                                {[
                                    { name: 'HOME', href: '#', index: 0 },
                                    { name: 'ABOUT', href: '#About', index: 1 },
                                    { name: 'SKILLS', href: '#Skills', index: 2 },
                                    { name: 'PROJECTS', href: '#Projects', index: 3 },
                                    { name: 'BLOGS', href: '#Blogs', index: 4 },
                                    { name: 'CONNECT', href: '#Connect', index: 5 },
                                ].map(link => (
                                    <li key={link.index}>
                                        <a
                                            href={link.href}
                                            className={`text-gray-400 hover:text-white cursor-pointer font-mono font-semibold hover:border-b-2 border-b-blue-700 ${activeLink === link.index ? 'text-white border-b-2' : ''}`}
                                            onClick={() => { setActiveLink(link.index); setMenuIcon(true); setCloseIcon(false); }}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                                <li className="md:hidden flex gap-4">
                                    <a href="https://www.linkedin.com/in/harshrox/" target="_blank">
                                        <img src={linkedin} alt="LinkedIn" width={30} title="LinkedIn" />
                                    </a>
                                    <a href="https://github.com/harshrox" target="_blank">
                                        <img src={github} alt="GitHub" width={30} title="GitHub" />
                                    </a>
                                    <a href="https://leetcode.com/u/harshrox/" target='_blank'>
                                        <img src={leetcode} alt="LeetCode" width={30} title="LeetCode" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex gap-4 ">
                                <li>
                                    <a href="https://www.linkedin.com/in/harshrox/" target="_blank">
                                        <img src={linkedin} alt="LinkedIn" width={30} title="LinkedIn" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/harshrox" target="_blank">
                                        <img src={github} alt="GitHub" width={30} title="GitHub" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://leetcode.com/u/harshrox/" target='_blank'>
                                        <img src={leetcode} alt="LeetCode" width={30} title="LeetCode" />
                                    </a>
                                </li>
                            </ul>
                        </div>


                        {/* Menu Icon / Close Icon */}
                        <div className="w-6 h-8 absolute right-5 top-[17px] block md:hidden" onClick={() => { setMenuIcon(menuIcon => !menuIcon); setCloseIcon(closeIcon => !closeIcon) }}>
                            <span className={`w-full h-1 bg-blue-700 block absolute top-1/2 left-1/2 transition-transform duration-500 ${menuIcon ? 'transform -translate-x-1/2 -translate-y-2' : 'transform -rotate-45 -translate-x-1/2 -translate-y-1/2'}`}></span>
                            {/* <span className={`w-full h-1 bg-blue-700 block absolute top-1/2 left-1/2 transition duration-500 ${menuIcon ? 'transform -translate-x-1/2 -translate-y-1/2' : 'transform -rotate-180 -translate-x-1/2 -translate-y-1/2 opacity-0'}`}></span> */}
                            <span className={`w-full h-1 bg-blue-700 block absolute top-1/2 left-1/2 transition-transform duration-500 ${menuIcon ? 'transform -translate-x-1/2 translate-y-1' : 'transform rotate-45 -translate-x-1/2 -translate-y-1/2'}`}></span>
                        </div>



                    </div>
                </nav>

                {/* Intro */}
                <main className="mt-10 md:mt-0 flex-grow flex flex-col justify-center items-center">
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:p-16 border-0 md:border-x-2 border-slate-800 w-screen md:w-auto">
                            <div className="md:p-2 flex justify-center items-center flex-col md:block">
                                <h2 className="text-2xl md:text-4xl font-serif">Hello, I am</h2>
                                <h2 className="font-bold text-5xl md:text-7xl mt-2 font-mono">Harsh Anand</h2>
                                <div className="w-1/4 h-1 bg-blue-700 mt-1 md:mt-2"></div>
                                <h2 className="h-20 text-2xl md:text-4xl mt-2 md:mt-4 text-blue-700 font-serif">
                                    <TypeAnimation
                                        sequence={[
                                            // Same substring at the start will only be typed out once, initially
                                            'Full Stack Developer.',
                                            1000, // wait 1s 
                                            'Competitive Programmer.',
                                            1000,
                                            'ML Enthusiast.',
                                            1000,
                                            'Gamer.',
                                            1000
                                        ]}
                                        wrapper="span"
                                        speed={60}
                                        style={{ display: 'inline-block' }}
                                        repeat={Infinity}
                                    />
                                </h2>
                            </div>
                            <div className="flex justify-center items-center">
                                <img src={profile} alt="Profile" className="w-52 border-b-2 border-blue-700 pb-5" />
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* The resume is directly accessed from the public folder */}
                        <a href="/ResumeHarsh.pdf" download="ResumeHarsh" target='_blank'>
                            <button className="mt-20 py-5 px-7 md:px-16 border-x hover:bg-gray-900 text-xl font-mono">DOWNLOAD RESUME</button>
                        </a>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Intro;
