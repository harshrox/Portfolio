import React from 'react';
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai.css";
import { useEffect, useRef } from "react";

hljs.registerLanguage("javascript", javascript);

function CodeBlock() {
    const codeRef = useRef(null);

    useEffect(() => {
        hljs.highlightBlock(codeRef.current);
    }, []);

    const codeBlock = `
import React from 'react';
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
        <pre className='bg-slate-950 rounded-lg'>
            <code className="javascript" style={{ background: "transparent" }} ref={codeRef}>
                {codeBlock}
            </code>
        </pre>
    )
}

export default CodeBlock;
