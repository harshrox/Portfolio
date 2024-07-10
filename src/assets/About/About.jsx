import React from 'react';
import '../../App.css';
import arrow from '../../assets/Images/arrow.svg'
import avatar from '../../assets/Images/avatar.svg'

function About() {
    return (
        <>
            {/* About */}
            <div className="h-auto w-full flex flex-col justify-center items-center bg-black" id="About">
                <section className='my-20 md:my-40 w-[90%] md:w-[70%] flex flex-col'>
                    {/* About me */}
                    <div className=" py-2 text-2xl md:text-4xl font-mono text-white">
                        ABOUT ME
                    </div>
                    <div className=" mb-5 md:mb-10 w-[14%] md:w-[6%] border border-blue-700"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className=" text-lg md:text-2xl font-mono text-white">
                            Hey there! I'm a 5<sup>th</sup> semester Computer Science and Engineering undergrad at the <span className="text-blue-700">Indian Institute of Information Technology, Kalyani</span>. With a deep passion for technology and innovation , I'm proficient in languages like Java, Python, JavaScript, and C. I'm always eager to dive into new technologies within the realm of computer science. I'm also into gaming and would love to learn game development some day.
                        </div>
                        <div className=" text-lg md:text-2xl font-mono text-white">
                            In addition to my prowess in core languages, I'm well-versed in frontend development using ReactJS and Tailwind CSS, as well as backend development using Spring Boot and MongoDB. I have developed comprehensive skills in both front-end design and back-end architecture, covering all aspects of modern software development. I enjoy challenging problems, seeing each as an opportunity to learn and enhance my skills. I consider myself a <span className='text-blue-700'>dedicated learner </span>and an <span className='text-blue-700'>effective problem solver</span>.
                        </div>
                    </div>
                </section>

                <div className='h-0 w-0 xl:h-20 xl:w-full flex justify-center items-center' id="Education">
                    <a href="#Education"><img src={arrow} alt="Arrow" className="w-10 h-10" /></a>
                </div>

                {/* Education */}
                <section className='my-10 md:my-20 w-[90%] md:w-[70%] flex flex-col'>
                    {/* Educaton */}
                    <div className="py-2 text-2xl md:text-4xl font-mono text-white">
                        EDUCATION
                    </div>
                    <div className="mb-5 md:mb-10 w-[14%] md:w-[6%] border border-blue-700"></div>
                    {/* Timeline */}
                    <div className="relative mt-10 pl-10 md:p-0 text-white after:content-[' '] after:absolute after:w-1 after:h-full after:bg-white after:top-0 after:md:left-1/2 after:left-3 after:-ml-1">
                        <div className="py-5 md:pr-10 md:py-4 relative w-full md:w-1/2 left-0">
                            <img src={avatar} alt="" className="absolute w-10 left-[-50px] md:left-auto md:right-[-18px] top-8 z-10" />
                            <div className="px-5 py-8 bg-slate-900 relative rounded-lg">
                                <h2 className="text-xl font-bold font-mono">Indian Institute of Information Technology, Kalyani</h2>
                                <small className="font-mono">2022 - 2026</small><br />
                                <small className="font-mono">Grade: 9.51 CGPA</small>
                                <p className="font-mono pt-2">I am currently enrolled in the Bachelor of Technology program in Computer Science and Engineering, currently in my fifth semester. My current CGPA stands at <span className="font-bold">9.51</span> out of <span className="font-bold">10</span>, indicating consistent academic performance.</p>
                            </div>
                        </div>

                        <div className="py-5 md:pl-10 md:py-4 relative w-full md:w-1/2 left-0 md:left-1/2">
                            <img src={avatar} alt="" className="absolute w-10 left-[-50px] md:left-[-22px] top-8 z-10" />
                            <div className="px-5 py-8 bg-slate-900 relative rounded-lg">
                                <h2 className="text-xl font-bold font-mono">Kendriya Vidyalaya Saharsa</h2>
                                <small className="font-mono">2019 - 2021</small><br />
                                <small className="font-mono">Grade: 89.4%</small>
                                <p className="font-mono pt-2">I completed my 12th grade education from the Central Board of Secondary Education
                                    (CBSE) with an overall score of <span className="font-bold">89.4%</span> in the Maths stream and <span className="font-bold">91%</span> score in Computer Science.</p>
                            </div>
                        </div>

                        <div className="py-5 md:pr-10 md:py-4 relative w-full md:w-1/2 left-0">
                            <img src={avatar} alt="" className="absolute w-10 left-[-50px] md:left-auto md:right-[-18px] top-8 z-10" />
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
        </>
    )
}
export default About;