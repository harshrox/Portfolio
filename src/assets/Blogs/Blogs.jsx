import React from "react";
import '../../App.css';
import blog1 from '../Images/blog1.png';
import blog2 from '../Images/blog2.png';
import blog3 from '../Images/blog3.jpg';

function Blogs() {
    return (
        <div className="w-full flex flex-col items-center bg-black" id="Blogs">
            <section className='mt-20 md:mt-40 px-5 md:px-10 w-[90%] md:w-[70%] flex flex-col'>
                <div className="py-2 text-2xl md:text-4xl font-mono text-white">BLOGS</div>
                <div className="mb-5 md:mb-10 w-[6%] border border-blue-700"></div>
                <div className="flex flex-col gap-10">
                    <BlogCard
                        imgSrc={blog3}
                        title="Understanding Gradient Descent Optimization for Linear Regression."
                        date="June 05, 2024"
                        readTime="10 min read"
                        link="/blog3"
                    />
                    <BlogCard
                        imgSrc={blog2}
                        title="Spice up the website with React's typewriter effect."
                        date="June 05, 2024"
                        readTime="3 min read"
                        link="/blog2"
                    />
                    <BlogCard
                        imgSrc={blog1}
                        title="Fun and functional makeover of the boring terminal."
                        date="June 05, 2024"
                        readTime="5 min read"
                        link="/blog1"
                    />
                </div>
            </section>
        </div>
    );
}

function BlogCard({ imgSrc, title, date, readTime, link }) {
    return (
        <div className="h-80 md:h-36 flex flex-col md:flex-row border-2 border-slate-900 rounded-lg shadow-xl shadow-slate-900 hover:shadow-blue-950 text-lg font-mono w-full">
            <div className='h-[50%] w-full md:h-full md:w-[20%]'><img src={imgSrc} alt="Blog" className='h-full w-full rounded-t-lg rounded-l-none md:rounded-t-none md:rounded-l-lg' /></div>
            <div className='h-[50%] w-full md:h-full md:w-[80%] flex flex-col border-t-2 border-l-0 md:border-t-0 md:border-l-2 border-slate-900'>
                <a href={link} target="_blank" className='h-full w-full flex flex-col'>
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
                </a>
            </div>
        </div>
    );
}

export default Blogs;