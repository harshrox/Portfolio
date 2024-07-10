import React from 'react';
import '../../../App.css';
import BlogHeader from '../BlogHeader';
import { TypeAnimation } from 'react-type-animation';
import CodeBlock from '../CodeBlock';

function Blog2() {
  const installationCode = `npm install react-type-animation`;
  const sampleCode =
    `import React from 'react';
import { TypeAnimation } from 'react-type-animation';
 
const App = () => {
  return (
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
  );
}

export default App;`;
  return (
    <>
      <BlogHeader title="React's Typewriter Effect" readTime="3 min read" date="June 04, 2024" />

      <div className="h-auto w-full flex flex-col items-center font-mono">
        <div className='px-5 md:px-10 w-full lg:w-[70%] flex flex-col'>
          <div className='text-xl md:text-3xl text-blue-700'>What is React Typewriter Effect?</div>
          <div className='mt-2 text-lg md:text-xl'>The React typewriter effect is a UI animation technique used to simulate the appearance of text being typed onto the screen, character by character, as if produced by a typewriter.</div>
          <div className="mt-10 mb-10 text-3xl md:text-4xl text-blue-700 text-center">
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
          <div className="mt-2 text-lg md:text-xl">To get the desired effect, we will have to install 'react-type-animation'.<br />'react-type-animation' is a React component library used to create typewriter-like text animations in web applications.</div>
          <div className="mt-5 text-lg md:text-xl">Run the below command in your react project directory.</div>
          <div className="mt-2"><CodeBlock language="nginx" code={installationCode} /></div>
          <div className="mt-5 mb-2">Now copy the code below, save it as a .jsx file, and that's it, you're done!</div>
          <CodeBlock language="javascript" code={sampleCode} />
          <div className='mt-10 text-xl md:text-3xl text-blue-700'>What are the props used in the component?</div>
          <div className='mt-2 text-lg md:text-xl'>There are a number of props that can be passed in the TypeAnimation component.</div>
          <div className="mt-2 text-lg md:text-xl">Some of which are:</div>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full bg-black divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">sequence</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">Array</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">Array containing [Text, Delay] </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">["Sample 1", 500, "Sample2", 500]</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">wrapper</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">string</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">HTML element to wrap the animation</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">div, span, small</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">speed</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">number</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">Speed of the animation</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">40, 80</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">style</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">object</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">CSS to be applied to the animation</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">color: 'red'</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">repeat</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">number</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">Number of animation repeatitions</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">1, 10, infinity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 text-lg md:text-xl"><span className="text-blue-700">Note: </span>Props changes will not be reflected until the page is hard-reloaded.</div>
          <div className='mt-10 mb-10 text-xl md:text-2xl text-slate-500'>More information on the <a href="https://github.com/maxeth/react-type-animation" target='_blank' className='text-blue-700 underline'>official GitHub repository of react-type-animation</a>.</div>
        </div>
      </div>
    </>
  );
}

export default Blog2;
