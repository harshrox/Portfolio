import React from 'react';
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import nginx from "highlight.js/lib/languages/nginx"; 
import properties from "highlight.js/lib/languages/properties"; 
import "highlight.js/styles/monokai.css";
import { useState, useEffect, useRef } from "react";
import copyImage from '../Images/copy.svg';
import copiedImage from '../Images/copied.svg';

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("nginx", nginx);
hljs.registerLanguage("properties", properties);


function CodeBlock({language, code}) {
    const codeRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const copyToClipboard = ()=>{
        window.navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    useEffect(() => {
        hljs.highlightBlock(codeRef.current);
    }, []);

    return (
        <pre className='relative bg-slate-950 rounded-lg pr-8 md:pr-10'>
            <div className='absolute right-2 top-2'>
                <button onClick={copyToClipboard}>
                    <img 
                        src={copied ? copiedImage : copyImage} 
                        alt="Copy" 
                        title="Copy Code" 
                        className='w-5 h-5 md:w-7 md:h-7 md:hover:scale-110'
                    />
                </button>
            </div>
            <code className={language} style={{ background: "transparent" }} ref={codeRef}>
                {code}
            </code>
        </pre>
    )
}

export default CodeBlock;
