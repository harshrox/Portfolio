import React from "react";
import '../../App.css';
import './style.css';
import currencyConverter from './currencyConverter.png';
import healthSymptomizer from './healthSymptomizer.jpg';
import codeEditor from './codeEditor.png';

function Projects() {
    return (
        <div className="w-full flex flex-col items-center bg-black" id="Projects">
            <section className='mt-20 md:mt-40 w-[90%] md:w-[70%] flex flex-col'>
                <div className="py-2 text-2xl md:text-4xl font-mono text-white">PROJECTS</div>
                <div className="mb-5 md:mb-10 w-[14%] md:w-[6%] border border-blue-700"></div>
                <div className="projects-scroll-container">
                    <div className="relative flex flex-col gap-10 top-5">
                        <small className="absolute w-auto h-4 right-0 top-[-1.2rem] font-mono italic text-slate-400">Latest</small>
                        <ProjectCard
                            imgSrc={currencyConverter}
                            title="A Practical Currency Converter Project."
                            GitHubLink="https://github.com/harshrox/Currency-Converter"
                            livePreview="https://currency-converter-hrx.vercel.app/"
                            isDisabled={false}
                        />
                        <ProjectCard
                            imgSrc={healthSymptomizer}
                            title="Empowering Health Awareness through Symptom Analysis and Disease Prediction."
                            GitHubLink="https://github.com/harshrox/HealthSymptomizer"
                            livePreview=""
                            isDisabled={true}
                        />
                        <ProjectCard
                            imgSrc={codeEditor}
                            title="Interactive Code Editor for HTML, CSS, and JavaScript."
                            GitHubLink="https://github.com/harshrox/Code-Editor"
                            livePreview="https://hrx-code-editor.vercel.app/"
                            isDisabled={false}
                        />
                        <small className="absolute w-auto h-4 right-0 bottom-[-1.2rem] font-mono italic text-slate-400">Oldest</small>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ProjectCard({ imgSrc, title, GitHubLink, livePreview, isDisabled }) {

    const handleClick = (event) => {
        if (isDisabled) {
            event.preventDefault();
        }
    }
    return (
        <div className="h-80 md:h-36 flex flex-col md:flex-row border-2 border-slate-900 rounded-lg shadow-xl shadow-slate-900 hover:shadow-blue-950 text-lg font-mono w-full">
            <div className='h-[50%] w-full md:h-full md:w-[20%]'><img src={imgSrc} alt="Blog" className='h-full w-full rounded-t-lg rounded-l-none md:rounded-t-none md:rounded-l-lg' /></div>
            <div className='h-[50%] w-full md:h-full md:w-[80%] flex flex-col border-t-2 border-l-0 md:border-t-0 md:border-l-2 border-slate-900'>
                <div className='h-full w-full flex flex-col'>
                    <div className='flex-grow flex items-center justify-center p-2'>
                        {title}
                    </div>
                    <div className='flex flex-row border-t-2 border-dotted border-slate-900'>
                        <a href={GitHubLink} target="_blank" className='w-1/2 flex justify-center border-r-2 border-dotted border-slate-900 hover:bg-slate-950'>
                            <small>GitHub</small>
                        </a>
                        <a href={isDisabled ? undefined : livePreview} target="_blank" onClick={handleClick} className={`w-1/2 flex justify-center ${isDisabled ? 'cursor-not-allowed text-slate-700' : 'hover:bg-slate-950'}`}>
                            <small>Live Preview</small>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;