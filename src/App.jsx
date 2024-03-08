import { useState } from 'react'
import './App.css'
import profile from './assets/Photo.png'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import leetcode from './assets/leetcode.svg'

function App() {
  
  window.onload = function(){
    window.scrollTo(0 , 0);
  };

  const [activeLink, setActiveLink] = useState(0);  // Hook used to update the highlighting of navbar links based on which section is being viewed


  return (
    <>

      {/* Header / navbar */}
      <div className="flex flex-col h-screen" id="Intro">
        <header className="bg-black fixed top-0 w-full">
          <div className="px-4 py-5 flex justify-center md:justify-evenly shadow-lg shadow-slate-800">
            <div>
              <h1 className="font-bold text-xl hidden md:block">Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-5 md:gap-10">
                <li>
                  <a href="#" className={`text-gray-400 hover:text-white cursor-pointer font-mono font-semibold hover:border-b-2 border-b-blue-700 ${activeLink === 0 ? 'text-white border-b-2' : ''}`} onClick={()=> setActiveLink(0)}>HOME</a>
                </li>
                <li>
                  <a href="#About" className={`text-gray-400 hover:text-white cursor-pointer font-mono font-semibold hover:border-b-2 border-b-blue-700 ${activeLink === 1 ? 'text-white border-b-2' : ''}`} onClick={()=> setActiveLink(1)}>ABOUT</a>
                </li>
                <li>
                  <a href="#" className={`text-gray-400 hover:text-white cursor-pointer font-mono font-semibold hover:border-b-2 border-b-blue-700 ${activeLink === 2 ? 'text-white border-b-2' : ''}`} onClick={()=> setActiveLink(2)}>SKILLS</a>
                </li>
                <li>
                  <a href="#" className={`text-gray-400 hover:text-white cursor-pointer font-mono font-semibold hover:border-b-2 border-b-blue-700 ${activeLink === 3 ? 'text-white border-b-2' : ''}`} onClick={()=> setActiveLink(3)}>PROJECTS</a>
                </li>
                <li>
                  <a href="#" className={`text-gray-400 hover:text-white cursor-pointer font-mono font-semibold hover:border-b-2 border-b-blue-700 ${activeLink === 4 ? 'text-white border-b-2' : ''}`} onClick={()=> setActiveLink(4)}>CONNECT</a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <ul className="flex gap-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                    <img src={linkedin} alt="LinkedIn" width={30} title="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                    <img src={github} alt="GitHub" width={30} title="GitHub" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                    <img src={leetcode} alt="LeetCode" width={30} title="LeetCode" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Intro */}
        <main className="flex-grow flex flex-col justify-center items-center">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 p-16 border-0 md:border-x-2 border-slate-800">
              <div className="md:p-2">
                <h2 className="font-bold text-2xl md:text-4xl">Hello, I am</h2>
                <h2 className="font-bold text-4xl md:text-7xl mt-2 font-mono">Harsh Anand</h2>
                <div className="w-1/4 h-1 bg-blue-500 mt-1 md:mt-2"></div>
                <h2 className="font-bold text-2xl md:text-4xl mt-2 md:mt-4 text-blue-700">Full stack developer.</h2>
              </div>
              <div className="flex justify-center items-center mt-10 md:mt-0">
                <img src={profile} alt="Profile" className="w-52 border-b-2 border-blue-700 pb-5" />
              </div>
            </div>
          </section>
          <section>
            <button className="mt-0 md:mt-20 py-5 px-7 md:px-16 border-x hover:bg-gray-900 text-xl font-mono">DOWNLOAD RESUME</button>
          </section>
        </main>
      </div>

      {/* About */}
      <div className="h-auto w-full flex flex-col justify-center items-center bg-white" id="About">
        <section className='my-20 md:my-40 w-[90%] md:w-[70%] flex flex-col'>
          {/* About me */}
          <div className="px-5 md:px-10 py-2 text-2xl md:text-4xl font-mono text-black">
            ABOUT ME
          </div>
          <div className="mx-5 md:mx-10 mb-5 md:mb-10 w-1/12 border border-blue-700"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="p-5 md:p-10 text-lg md:text-2xl font-mono text-black">
            Hey there! I'm a 4th-semester B.Tech in Computer Science and Engineering student at the <span className="text-blue-700">Indian Institute of Information Technology, Kalyani</span>. With a deep passion for technology and innovation , I'm proficient in languages like Java, Python, JavaScript, and C. I'm always eager to dive into new technologies within the realm of computer science. I'm also into gaming and would love to learn game development some day.
            </div>
            <div className="p-5 md:p-10 text-lg md:text-2xl font-mono text-black">
            In addition to my prowess in core languages, I'm well-versed in frontend development using HTML, CSS, and JavaScript, as well as backend development using Spring Boot. From front-end design to back-end architecture, I've honed my skills to cover every aspect of modern software development. I love taking on tough challenges! Every problem is a chance for me to learn and get better. With that being said , I consider myself as a <span className="text-blue-700">profound learner and problem solver</span>.
            </div>
          </div>
        </section>

        {/* Education */}
        <section>

        </section>
      </div>

      {/* Skills */}
      <div className="h-screen bg-white">
        
      </div>

    </>
  )
}

export default App
