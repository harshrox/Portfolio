import React from "react";
import '../../App.css';

function BlogHeader({title, readTime, date}) {
    return (
        <div className='flex flex-col justify-center items-center py-10 md:py-14'>
            <div className='w-auto flex flex-col justify-center items-center'>
                <div className='p-2 border-b-2 border-dashed border-blue-700 font-mono text-xl md:text-5xl'>
                    {title}
                </div>
                <div className='p-2 flex justify-between w-full font-mono text-gray-300'>
                    <div><small>{readTime}</small></div>
                    <div><small>{date}</small></div>
                </div>
            </div>
        </div>
    );
}

export default BlogHeader;
