import React from "react";
import '../../App.css';
import './style.css';
import blogOhMyPosh from '../Images/blogOhMyPosh.png';
import blogTypewriterEffect from '../Images/blogTypewriterEffect.png';
import blogLinearRegression from '../Images/blogLinearRegression.jpg';

function Blogs() {
    return (
        <div className="w-full flex flex-col items-center bg-black" id="Blogs">
            <section className='mt-20 md:mt-40 w-[90%] md:w-[70%] flex flex-col'>
                <div className="py-2 text-2xl md:text-4xl font-mono text-white">BLOGS</div>
                <div className="mb-5 md:mb-10 w-[14%] md:w-[6%] border border-blue-700"></div>
                <div className="blogs-scroll-container">
                    <div className="relative flex flex-col gap-10 top-5">
                        <small className="absolute w-auto h-4 right-0 top-[-1.2rem] font-mono italic text-slate-400">Latest</small>
                        <BlogCard
                            imgSrc={blogOhMyPosh}
                            title="Fun and functional makeover of the boring terminal."
                            date="July 09, 2024"
                            readTime="5 min read"
                            link="/blogOhMyPosh"
                        />
                        <BlogCard
                            imgSrc={blogLinearRegression}
                            title="Understanding Gradient Descent Optimization for Linear Regression."
                            date="June 10, 2024"
                            readTime="10 min read"
                            link="/blogLinearRegression"
                        />
                        <BlogCard
                            imgSrc={blogTypewriterEffect}
                            title="Spice up the website with React's typewriter effect."
                            date="June 04, 2024"
                            readTime="3 min read"
                            link="/blogTypewriterEffect"
                        />
                        <small className="absolute w-auto h-4 right-0 bottom-[-1.2rem] font-mono italic text-slate-400">Oldest</small>
                    </div>
                </div>
            </section>
        </div>
    );
}

function BlogCard({ imgSrc, title, date, readTime, link }) {
    return (
        <a href={link} target="_blank" className="h-80 md:h-36 flex flex-col md:flex-row border-2 border-slate-900 rounded-lg shadow-xl shadow-slate-900 hover:shadow-blue-950 text-lg font-mono w-full">
            <div className='h-[50%] w-full md:h-full md:w-[20%]'><img src={imgSrc} alt="Blog" className='h-full w-full rounded-t-lg rounded-l-none md:rounded-t-none md:rounded-l-lg' /></div>
            <div className='h-[50%] w-full md:h-full md:w-[80%] flex flex-col border-t-2 border-l-0 md:border-t-0 md:border-l-2 border-slate-900'>
                <div className='h-full w-full flex flex-col'>
                    <div className='flex-grow flex items-center justify-center p-2'>
                        {title}
                    </div>
                    <div className='flex flex-row border-t-2 border-dotted border-slate-900'>
                        <div className='w-1/2 flex justify-center border-r-2 border-dotted border-slate-900'>
                            <small>{readTime}</small>
                        </div>
                        <div className='w-1/2 flex justify-center'>
                            <small>{date}</small>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Blogs;