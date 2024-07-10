import React from 'react'
import '../../App.css';
import linkedin from '../../assets/Images/linkedin.svg'
import github from '../../assets/Images/github.svg'
import leetcode from '../../assets/Images/leetcode.svg'
import mail from '../../assets/Images/mail.svg'
import hackerrank from '../../assets/Images/hackerrank.svg'

function Connect() {
    return (
        <>
            {/* Connect */}
            <section className="h-full w-full flex flex-col items-center bg-black text-white" id="Connect">
                <div className='mt-20 md:mt-40 w-[90%] md:w-[70%] flex flex-col flex-grow'>
                    <div className="py-2 text-2xl md:text-4xl font-mono text-white">
                        CONNECT
                    </div>
                    <div className="mb-5 md:mb-10 w-[14%] md:w-[6%] border border-blue-700"></div>
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

export default Connect;