import React from 'react';
import '../../../App.css';
import BlogHeader from '../BlogHeader';
import { TypeAnimation } from 'react-type-animation';
import CodeBlock from './CodeBlock';
import Installation from './Installation';

function Blog2() {
  return (
    <>
      <BlogHeader title="React's Typewriter Effect" readTime="3 min read" date="June 04, 2024" />

      <div className="h-auto w-full flex flex-col items-center font-mono">
        <div className='px-5 md:px-10 w-full lg:w-[70%] flex flex-col'>
          <div className='text-xl md:text-3xl text-blue-700'>What is React Typewriter Effect?</div>
          <div className='mt-2 text-lg md:text-xl'>The React typewriter effect is a UI animation technique used to simulate the appearance of text being typed onto the screen, character by character, as if produced by a typewriter.</div>
          <div className="mt-10 mb-10 text-xl md:text-4xl text-blue-700 text-center">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Typewriter effect',
                500, // wait 500ms 
                'is',
                500, // wait 500ms 
                'awesome.',
                500, // wait 500ms 
              ]}
              wrapper="span"
              speed={80}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
          <div className="text-lg md:text-xl">Let's not waste time and proceed directly to the installation.</div>
          <div className='mt-10 text-xl md:text-3xl text-blue-700'>How to install?</div>
          <div className="mt-2 text-lg md:text-xl">To get the desired effect, we will have to install 'react-type-animation'.<br/>'react-type-animation' is a React component library used to create typewriter-like text animations in web applications.</div>
          <div className="mt-5 text-lg md:text-xl">Run the below command in your react project directory.</div>
          <div className="mt-2"><Installation/></div>
          <div className="mt-5 mb-2">Now copy the code below, save it as a .jsx file, and that's it, you're done!</div>
          <CodeBlock/>
        </div>
      </div>
    </>
  );
}

export default Blog2;
