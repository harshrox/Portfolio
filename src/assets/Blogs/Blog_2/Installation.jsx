import React, { useEffect, useRef } from 'react';
import hljs from "highlight.js/lib/core";
import nginx from "highlight.js/lib/languages/nginx"; // Import nginx language support
import "highlight.js/styles/monokai.css";

hljs.registerLanguage("nginx", nginx); // Register nginx language with highlight.js

function Installation() {
    const codeRef = useRef(null);

    useEffect(() => {
        hljs.highlightBlock(codeRef.current);
    }, []);

    const codeBlock = `npm install react-type-animation`;
    
    return (
        <pre className='bg-slate-950 rounded-lg'>
            <code className="nginx" style={{ background: "transparent" }} ref={codeRef}>
                {codeBlock}
            </code>
        </pre>
    )
}

export default Installation;
