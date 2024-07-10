import React from 'react'
import '../../App.css';
import java from '../../assets/Images/java.svg'
import html from '../../assets/Images/html.svg'
import css from '../../assets/Images/css.svg'
import javascript from '../../assets/Images/javascript.svg'
import spring from '../../assets/Images/spring.svg'
import tailwind from '../../assets/Images/tailwind.svg'
import python from '../../assets/Images/python.svg'
import android from '../../assets/Images/android.svg'
import react from '../../assets/Images/react.svg'
import cpp from '../../assets/Images/c++.svg'
import numpy from '../../assets/Images/numpy.svg'
import pandas from '../../assets/Images/pandas.svg'
import mongodb from '../../assets/Images/mongodb.svg'


function Skills() {
    return (
        <>
            {/* Skills */}
            <div className="min-h-screen w-full flex flex-col items-center bg-black" id="Skills">
                <section className='mt-20 md:mt-40 w-[90%] md:w-[70%] flex flex-col flex-grow'>
                    <div className=" py-2 text-2xl md:text-4xl font-mono text-white">
                        SKILLS
                    </div>
                    <div className="mb-5 md:mb-10 w-[14%] md:w-[6%] border border-blue-700"></div>
                    <div className="flex flex-col flex-grow justify-evenly">
                        <div className="flex flex-row flex-wrap justify-evenly">
                            <img src={html} alt="HTML" title="HTML" className="w-14 md:w-20" />
                            <img src={css} alt="CSS" title="CSS" className="w-14 md:w-20" />
                            <img src={javascript} alt="JavaScript" title="JavaScript" className="w-14 md:w-20" />
                        </div>
                        <div className="flex flex-row flex-wrap justify-evenly">
                            <img src={tailwind} alt="Tailwind CSS" title="Tailwind CSS" className="w-14 md:w-20" />
                            <img src={react} alt="React" title="React" className="w-14 md:w-20" />
                        </div>
                        <div className="flex flex-row flex-wrap justify-evenly">
                            <img src={java} alt="Java" title="Java" className="w-14 md:w-20" />
                            <img src={spring} alt="Spring Boot" title="Spring Boot" className="w-14 md:w-20" />
                            <img src={android} alt="Android Studio" title="Android Studio" className="w-14 md:w-20" />
                        </div>
                        <div className="flex flex-row flex-wrap justify-evenly">
                            <img src={python} alt="Python3" title="Python3" className="w-14 md:w-20" />
                            <img src={cpp} alt="C++" title="C++" className="w-14 md:w-20" />
                        </div>
                        <div className="flex flex-row flex-wrap justify-evenly">
                            <img src={numpy} alt="NumPy" title="NumPy" className="w-14 md:w-20" />
                            <img src={pandas} alt="Pandas" title="Pandas" className="w-14 md:w-20" />
                            <img src={mongodb} alt="MongoDB" title="MongoDB" className="w-14 md:w-20" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}


export default Skills;