import { useState } from 'react'
import './App.css'
import { TypeAnimation } from 'react-type-animation';
import profile from './assets/Images/Photo.png'
import linkedin from './assets/Images/linkedin.svg'
import github from './assets/Images/github.svg'
import leetcode from './assets/Images/leetcode.svg'
import avatar from './assets/Images/avatar.svg'
import java from './assets/Images/java.svg'
import html from './assets/Images/html.svg'
import css from './assets/Images/css.svg'
import javascript from './assets/Images/javascript.svg'
import spring from './assets/Images/spring.svg'
import tailwind from './assets/Images/tailwind.svg'
import python from './assets/Images/python.svg'
import android from './assets/Images/android.svg'
import react from './assets/Images/react.svg'
import cpp from './assets/Images/c++.svg'
import mail from './assets/Images/mail.svg'
import hackerrank from './assets/Images/hackerrank.svg'
import arrow from './assets/Images/arrow.svg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blogs from './assets/Blogs/Blogs';
import Blog1 from './assets/Blogs/Blog1'; 
import Blog2 from './assets/Blogs/Blog2'; 
import Blog3 from './assets/Blogs/Blog3'; 

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog1" element={<Blog1 />} />
				<Route path="/blog2" element={<Blog2 />} />
				<Route path="/blog3" element={<Blog3 />} />
			</Routes>
		</Router>
	);
}
function Home() {

	window.onload = function () {
		window.scrollTo(0, 0);
	};

	const [activeLink, setActiveLink] = useState(0);  // Hook used to update the highlighting of navbar links based on which section is being viewed

	const [menuIcon, setMenuIcon] = useState(true);   // Hook used to activate or deactivate the menu icon(true means menu icon is visible and vice versa)

	const [closeIcon, setCloseIcon] = useState(false);  // Hook used to activate or deactivate the close icon(true means close icon is visible and vice versa)


	return (
		<>

			{/* Navbar and Intro */}
			<div className="flex flex-col min-h-screen" id="Intro">
				{/* Navbar */}
				<header className="bg-black fixed w-full z-20">
					<div className={`px-6 md:px-4 py-3 md:py-5 flex justify-center md:items-center md:justify-evenly shadow-lg shadow-slate-800`}>
						<div className={`${menuIcon ? 'absolute md:relative left-5 md:left-0 top-[20px] md:top-0 block' : 'hidden md:block'}`}>
							<h1 className="font-bold text-xl">PORTFOLIO</h1>
						</div>
						<div className={`overflow-hidden ${menuIcon ? 'transition-max-h duration-500 max-h-0' : 'transition-max-h duration-1000 max-h-[1000px]'} md:max-h-[none] md:block text-xl md:text-base mt-8 mb-2 md:mt-0 md:mb-0`}>
							{/* <div className={`${menuIcon ? 'md:block hidden' : 'block text-xl md:text-base mt-8 mb-2 md:mt-0 md:mb-0'}`}> */}
							<ul className="flex md:flex-row flex-col md:mx-0 gap-5 md:gap-8 items-center">
								<li>
									<a href="#" className={`text-gray-400 hover:text-white cursor-pointer font-mono font-semibold hover:border-b-2 border-b-blue-700 ${activeLink === 0 ? 'text-white border-b-2' : ''}`} onClick={() => { setActiveLink(0); setMenuIcon(true); setCloseIcon(false) }}>HOME</a>
								</li>
								<li>
									<a href="#About" className={`text-gray-400 hover:text-white cursor-pointer font-mono font-semibold hover:border-b-2 border-b-blue-700 ${activeLink === 1 ? 'text-white border-b-2' : ''}`} onClick={() => { setActiveLink(1); setMenuIcon(true); setCloseIcon(false) }}>ABOUT</a>
								</li>
								<li>
									<a href="#Skills" className={`text-gray-400 hover:text-white cursor-pointer font-mono font-semibold hover:border-b-2 border-b-blue-700 ${activeLink === 2 ? 'text-white border-b-2' : ''}`} onClick={() => { setActiveLink(2); setMenuIcon(true); setCloseIcon(false) }}>SKILLS</a>
								</li>
								<li>
									<a href="#Projects" className={`text-gray-400 hover:text-white cursor-pointer font-mono font-semibold hover:border-b-2 border-b-blue-700 ${activeLink === 3 ? 'text-white border-b-2' : ''}`} onClick={() => { { setActiveLink(3); setMenuIcon(true); setCloseIcon(false) } }}>PROJECTS</a>
								</li>
								<li>
									<a href="#Blogs" className={`text-gray-400 hover:text-white cursor-pointer font-mono font-semibold hover:border-b-2 border-b-blue-700 ${activeLink === 4 ? 'text-white border-b-2' : ''}`} onClick={() => { { setActiveLink(4); setMenuIcon(true); setCloseIcon(false) } }}>BLOGS</a>
								</li>
								<li>
									<a href="#Connect" className={`text-gray-400 hover:text-white cursor-pointer font-mono font-semibold hover:border-b-2 border-b-blue-700 ${activeLink === 5 ? 'text-white border-b-2' : ''}`} onClick={() => { { setActiveLink(5); setMenuIcon(true); setCloseIcon(false) } }}>CONNECT</a>
								</li>
								<li className="md:hidden flex gap-4">
									<a href="#">
										<img src={linkedin} alt="LinkedIn" width={30} title="LinkedIn" />
									</a>
									<a href="#">
										<img src={github} alt="GitHub" width={30} title="GitHub" />
									</a>
									<a href="#">
										<img src={leetcode} alt="LeetCode" width={30} title="LeetCode" />
									</a>
								</li>
							</ul>
						</div>
						<div className="hidden md:block">
							<ul className="flex gap-4 ">
								<li>
									<a href="#">
										<img src={linkedin} alt="LinkedIn" width={30} title="LinkedIn" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={github} alt="GitHub" width={30} title="GitHub" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={leetcode} alt="LeetCode" width={30} title="LeetCode" />
									</a>
								</li>
							</ul>
						</div>

						{/* Menu Icon */}
						{/* < div className={`block md:hidden ${menuIcon ? 'block' : 'hidden'}`}>
              <button onClick={() => { setMenuIcon(false); setCloseIcon(true) }}><img src={menu} alt="Menu" width={32} /></button>
            </div> */}
						{/* Close Icon*/}
						{/* <div className={`${closeIcon ? 'md:hidden block' : 'hidden'}`}>
              <button onClick={() => { setMenuIcon(true); setCloseIcon(false) }}><img src={close} alt="Close" width={32} /></button>
            </div>  */}

						{/* Menu Icon / Close Icon */}
						<div className="w-6 h-8 absolute right-5 top-[17px] block md:hidden" onClick={() => { setMenuIcon(menuIcon => !menuIcon); setCloseIcon(closeIcon => !closeIcon) }}>
							<span className={`w-full h-1 bg-blue-700 block absolute top-1/2 left-1/2 transition-transform duration-500 ${menuIcon ? 'transform -translate-x-1/2 -translate-y-2' : 'transform -rotate-45 -translate-x-1/2 -translate-y-1/2'}`}></span>
							{/* <span className={`w-full h-1 bg-blue-700 block absolute top-1/2 left-1/2 transition duration-500 ${menuIcon ? 'transform -translate-x-1/2 -translate-y-1/2' : 'transform -rotate-180 -translate-x-1/2 -translate-y-1/2 opacity-0'}`}></span> */}
							<span className={`w-full h-1 bg-blue-700 block absolute top-1/2 left-1/2 transition-transform duration-500 ${menuIcon ? 'transform -translate-x-1/2 translate-y-1' : 'transform rotate-45 -translate-x-1/2 -translate-y-1/2'}`}></span>
						</div>



					</div>
				</header>

				{/* Intro */}
				<main className="mt-10 md:mt-0 flex-grow flex flex-col justify-center items-center">
					<section>
						<div className="grid grid-cols-1 md:grid-cols-2 md:p-16 border-0 md:border-x-2 border-slate-800 w-screen md:w-auto">
							<div className="md:p-2 flex justify-center items-center flex-col md:block">
								<h2 className="text-2xl md:text-4xl font-serif">Hello, I am</h2>
								<h2 className="font-bold text-4xl md:text-7xl mt-2 font-mono">Harsh Anand</h2>
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
										speed={40}
										style={{ display: 'inline-block' }}
										repeat={Infinity}
									/>
								</h2>
							</div>
							<div className="flex justify-center items-center">
								<img src={profile} alt="Profile" className="w-52 border-b-2 border-blue-700 pb-5" />
							</div>
						</div>
					</section>
					<section>
						<button className="mt-20 py-5 px-7 md:px-16 border-x hover:bg-gray-900 text-xl font-mono">DOWNLOAD RESUME</button>
					</section>
				</main>
			</div>

			{/* About */}
			<div className="h-auto w-full flex flex-col justify-center items-center bg-black" id="About">
				<section className='my-20 md:my-40 w-[90%] md:w-[70%] flex flex-col'>
					{/* About me */}
					<div className="px-5 md:px-10 py-2 text-2xl md:text-4xl font-mono text-white">
						ABOUT ME
					</div>
					<div className="mx-5 md:mx-10 mb-5 md:mb-10 w-[6%] border border-blue-700"></div>
					<div className="grid grid-cols-1 md:grid-cols-2 ">
						<div className="px-5 md:px-10 text-lg md:text-2xl font-mono text-white">
							Hey there! I'm a 4th-semester B.Tech in Computer Science and Engineering student at the <span className="text-blue-700">Indian Institute of Information Technology, Kalyani</span>. With a deep passion for technology and innovation , I'm proficient in languages like Java, Python, JavaScript, and C. I'm always eager to dive into new technologies within the realm of computer science. I'm also into gaming and would love to learn game development some day.
						</div>
						<div className="px-5 md:px-10 text-lg md:text-2xl font-mono text-white">
							In addition to my prowess in core languages, I'm well-versed in frontend development using HTML, CSS, and JavaScript, as well as backend development using Spring Boot. From front-end design to back-end architecture, I've honed my skills to cover every aspect of modern software development. I love taking on tough challenges! Every problem is a chance for me to learn and get better. With that being said , I consider myself as a <span className="text-blue-700">profound learner and problem solver</span>.
						</div>
					</div>
				</section>

				<div className='h-0 w-0 xl:h-20 xl:w-full flex justify-center items-center' id="Education">
					<a href="#Education"><img src={arrow} alt="Arrow" className="w-10 h-10" /></a>
				</div>

				{/* Education */}
				<section className='my-10 md:my-20 w-[90%] md:w-[70%] flex flex-col'>
					{/* Educaton */}
					<div className="px-5 md:px-10 py-2 text-2xl md:text-4xl font-mono text-white">
						EDUCATION
					</div>
					<div className="mx-5 md:mx-10 mb-5 md:mb-10 w-[6%] border border-blue-700"></div>
					{/* Timeline */}
					<div className="relative mt-10 p-10 text-white after:content-[' '] after:absolute after:w-1 after:h-full after:bg-white after:top-0 after:md:left-1/2 after:left-8 after:-ml-1">
						<div className="pl-5 py-5 md:pl-0 md:pr-10 md:py-4 relative w-full md:w-1/2 left-0">
							<img src={avatar} alt="" className="absolute w-10 left-[-30px] md:left-auto md:right-[-18px] top-8 z-10" />
							<div className="px-5 py-8 bg-slate-900 relative rounded-lg">
								<h2 className="text-xl font-bold font-mono">Indian Institute of Information Technology, Kalyani</h2>
								<small className="font-mono">2022 - 2026</small><br />
								<small className="font-mono">Grade: 9.42 CGPA</small>
								<p className="font-mono pt-2">I am currently enrolled in the Bachelor of Technology program in Computer Science and Engineering, currently in my fourth semester. My current CGPA stands at <span className="font-bold">9.42</span> out of <span className="font-bold">10</span>, indicating consistent academic performance.</p>
							</div>
						</div>

						<div className="pl-5 py-5 md:pl-10 md:py-4 relative w-full md:w-1/2 left-0 md:left-1/2">
							<img src={avatar} alt="" className="absolute w-10 left-[-30px] md:left-[-22px] top-8 z-10" />
							<div className="px-5 py-8 bg-slate-900 relative rounded-lg">
								<h2 className="text-xl font-bold font-mono">Kendriya Vidyalaya Saharsa</h2>
								<small className="font-mono">2019 - 2021</small><br />
								<small className="font-mono">Grade: 89.4%</small>
								<p className="font-mono pt-2">I completed my 12th grade education from the Central Board of Secondary Education
									(CBSE) with an overall score of <span className="font-bold">89.4%</span> in the Maths stream and <span className="font-bold">91%</span> score in Computer Science.</p>
							</div>
						</div>

						<div className="pl-5 py-5 md:pl-0 md:pr-10 md:py-4 relative w-full md:w-1/2 left-0">
							<img src={avatar} alt="" className="absolute w-10 left-[-30px] md:left-auto md:right-[-18px] top-8 z-10" />
							<div className="px-5 py-8 bg-slate-900 relative rounded-lg">
								<h2 className="text-xl font-bold font-mono">Jay Pratap Singh Public School, Saharsa</h2>
								<small className="font-mono">2012 - 2019</small><br />
								<small className="font-mono">Grade: 92.6%</small>
								<p className="font-mono pt-2">I completed my 10th grade education from the Central Board of Secondary Education
									(CBSE) with an overall score of <span className="font-bold">92.6%</span> in the Science stream and <span className="font-bold">100%</span> score in Computer Science.</p>
							</div>
						</div>
					</div>

				</section>
			</div>

			{/* Skills */}
			<div className="min-h-screen w-full flex flex-col items-center bg-black" id="Skills">
				<section className='mt-20 md:mt-40 w-[90%] md:w-[70%] flex flex-col flex-grow'>
					<div className="px-5 md:px-10 py-2 text-2xl md:text-4xl font-mono text-white">
						SKILLS
					</div>
					<div className="mx-5 md:mx-10 mb-5 md:mb-10 w-[6%] border border-blue-700"></div>
					<div className="flex flex-col flex-grow justify-evenly">
						<div className="flex flex-row flex-wrap justify-evenly">
							<img src={html} alt="HTML" title="HTML" className="w-20 md:w-auto" />
							<img src={css} alt="CSS" title="CSS" className="w-20 md:w-auto" />
							<img src={javascript} alt="JavaScript" title="JavaScript" className="w-20 md:w-auto" />
						</div>
						<div className="flex flex-row flex-wrap justify-evenly">
							<img src={tailwind} alt="Tailwind CSS" title="Tailwind CSS" className="w-20 md:w-auto" />
							<img src={react} alt="React" title="React" className="w-20 md:w-auto" />
						</div>
						<div className="flex flex-row flex-wrap justify-evenly">
							<img src={java} alt="Java" title="Java" className="w-20 md:w-auto" />
							<img src={spring} alt="Spring Boot" title="Spring Boot" className="w-20 md:w-auto" />
							<img src={android} alt="Android Studio" title="Android Studio" className="w-20 md:w-auto" />
						</div>
						<div className="flex flex-row flex-wrap justify-evenly">
							<img src={python} alt="Python3" title="Python3" className="w-20 md:w-auto" />
							<img src={cpp} alt="C++" title="C++" className="w-20 md:w-auto" />
						</div>
					</div>
				</section>
			</div>

			{/* Project */}
			<div className="min-h-screen w-full flex flex-col justify-center items-center bg-black" id="Projects">
				<section className='border my-20 md:my-40 w-[90%] md:w-[70%] flex flex-col flex-grow'>
					<div className="border px-5 md:px-10 py-2 text-2xl md:text-4xl font-mono text-white">
						PROJECTS
					</div>
					<div className="mx-5 md:mx-10 mb-5 md:mb-10 w-[6%] border border-blue-700"></div>
					<div className="border px-5 md:px-10 flex flex-col md:flex-row justify-between gap-10">
						<div className="border p-2 flex flex-col items-center">
							<img src={github} alt="" className="w-[50%] border" />
							<h3>Project 1</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, alias.</p>
							<div className="mt-5 w-full flex flex-row justify-evenly">
								<button className="bg-cyan-800 py-1 px-5">Open</button>
								<button className="bg-cyan-800 py-1 px-5">GitHub</button>
							</div>
						</div>
						<div className="border p-2 flex flex-col items-center">
							<img src={github} alt="" className="w-[50%] border" />
							<h3>Project 2</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, alias.</p>
							<div className="mt-5 w-full flex flex-row justify-evenly">
								<button className="bg-cyan-800 py-1 px-5">Open</button>
								<button className="bg-cyan-800 py-1 px-5">GitHub</button>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* Blogs */}
			<Blogs/>

			{/* Connect */}
			<section className="min-h-screen w-full flex flex-col items-center bg-black text-white" id="Connect">
				<div className='mt-20 md:mt-40 px-5 md:px-10 w-[90%] md:w-[70%] flex flex-col flex-grow'>
					<div className="py-2 text-2xl md:text-4xl font-mono text-white">
						CONNECT
					</div>
					<div className="mb-5 md:mb-10 w-[6%] border border-blue-700"></div>
					<div className="mb-5 md:mb-10 text-lg md:text-2xl font-mono text-white">
						I am enthusiastic about connecting with like-minded individuals who share a passion for <span className="text-blue-700">technology</span>, <span className="text-blue-700">innovation</span>, and <span className="text-blue-700">problem-solving</span>.
					</div>
					<div className="text-lg md:text-2xl font-mono text-white">
						Feel free to reach out to me on -
					</div>

					<div className="flex flex-col flex-grow justify-evenly">
						<div className="flex flex-row flex-wrap justify-evenly">
							<a href="mailto:harshjha08@outlook.com"><img src={mail} alt="Mail" title="Mail" className="w-14 md:w-20" /></a>
							<a href="https://www.linkedin.com/in/harshrox/" target="_blank"><img src={linkedin} alt="LinkedIn" title="LinkedIn" className="w-14 md:w-20" /></a>
							<a href="https://github.com/harshrox" target="_blank"><img src={github} alt="GitHub" title="GitHub" className="w-14 md:w-20" /></a>
						</div>
						<div className="flex flex-row flex-wrap justify-evenly">
							<a href="https://leetcode.com/u/harshrox/" target="_blank"><img src={leetcode} alt="LeetCode" title="LeetCode" className="w-14 md:w-20" /></a>
							<a href="https://www.hackerrank.com/profile/harshrox" target="_blank"><img src={hackerrank} alt="HackerRank" title="HackerRank" className="w-14 md:w-20" /></a>
						</div>
					</div>
				</div>

				<div className="border-t border-slate-800 w-full h-20 md:h-32 flex flex-col gap-3 justify-center items-center font-mono">
					<h3>Copyright 2024</h3>
					<h3>Designed and Developed by Harsh Anand.</h3>
				</div>
			</section>

		</>
	)
}

export default App
