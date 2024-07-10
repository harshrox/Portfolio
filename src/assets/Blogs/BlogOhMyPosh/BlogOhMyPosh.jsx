import React from 'react';
import '../../../App.css';
import BlogHeader from '../BlogHeader';
import sample from './sample.png';
import CodeBlock from '../CodeBlock';
import prefences from './prefences.png';


function Blog1() {
  const installationCode =
  `sudo wget https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/posh-linux-amd64 -O /usr/local/bin/oh-my-posh
sudo chmod +x /usr/local/bin/oh-my-posh`; 

  const themesCode =
  `mkdir ~/.poshthemes
wget https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/themes.zip -O ~/.poshthemes/themes.zip
unzip ~/.poshthemes/themes.zip -d ~/.poshthemes
chmod u+rw ~/.poshthemes/*.json
rm ~/.poshthemes/themes.zip`;

  const bashCode = 
  `nano ~/.bashrc`;

  const evalCode =
  `eval "$(oh-my-posh init bash --config $HOME/.poshthemes/{theme}.omp.json)"`;

  const fontCode =
  `cd ~
mkdir .fonts
unzip ~/Downloads/{font}.zip -d ~/.fonts/{font}
fc-cache -fv`;

  return (
    <>           
      <BlogHeader title="Oh My Posh" readTime="5 min read" date="July 09, 2024"/>

      <div className="h-auto w-full flex flex-col items-center font-mono">
        <div className='px-5 md:px-10 w-full lg:w-[70%] flex flex-col'>
          <div className='text-xl md:text-3xl text-blue-700'>What is Oh My Posh?</div>
          <div className='mt-2 text-lg md:text-xl'>Oh My Posh is a prompt theme engine for any shell, designed to be highly customizable and visually appealing. It allows users to configure their command line prompt with a variety of themes, segments, and icons, enhancing the overall terminal experience.</div>
          <div className="mt-2 text-lg md:text-xl">As for example, look at the image below:</div>
          <div className='mt-10 flex justify-center'><img src={sample} alt="Sample" className="md:w-[50%] md:h-[50%]"/></div>
          <div className='mt-5 text-xl md:text-3xl text-blue-700'>Why am I writing a blog about it?</div>
          <div className='mt-2 text-lg md:text-xl'>I reviewed the official documentation of Oh My Posh for installation on Ubuntu and found it quite complex. After exploring multiple sources and blogs, I've compiled the simplest way to download and beautify your terminal.</div>
          <div className='mt-2 text-lg md:text-xl'><span className='text-blue-700'>Note: </span>The steps provided are for Linux systems only.</div>
          <div className='mt-10 text-xl md:text-3xl text-blue-700'>How to install?</div>
          <div className='mt-2 text-lg md:text-xl'>Run the following command on your terminal.</div>
          <div className="mt-2 flex flex-col">
            To install Oh My Posh
            <CodeBlock language="properties" code={installationCode}></CodeBlock>
          </div>
          <div className="mt-5 flex flex-col">
            To install Oh My Posh Themes
            <CodeBlock language="properties" code={themesCode}></CodeBlock>
          </div>
          <div className='mt-2 text-lg md:text-xl'><span className='text-blue-700'>Note: </span>A <small className='text-gray-300'>.poshthemes</small> folder will be created in the home directory to contain all the Oh My Posh themes. This folder will be hidden by default. To unhide it, press the <small className='text-gray-300'>Ctrl + H</small> key combination in your home directory.</div>
          <div className='mt-10 text-xl md:text-3xl text-blue-700'>How to set up the theme?</div>
          <div className='mt-2 text-lg md:text-xl'>Open your ~/.bashrc by executing the following command in your terminal.</div>  
          <CodeBlock language="properties" code={bashCode}></CodeBlock>
          <div className='mt-2 text-lg md:text-xl'>Now put the below code at the bottom in your bashrc file.</div>  
          <CodeBlock language="properties" code={evalCode}></CodeBlock>
          <div className='mt-2 text-lg md:text-xl'><span className='text-blue-700'>Note: </span>Replace <small className='text-gray-300'>{"{"}theme{"}"}</small> with an actual theme from <small className='text-gray-300'>.poshthemes </small>folder</div>

          <div className='mt-10 text-xl md:text-3xl text-blue-700'>How to set up the font?</div>
          <div className='mt-2 text-lg md:text-xl'>Now that the theme is set, the final step is to choose and configure your desired font. This completes the setup process.</div> 
          <div className='mt-2 text-lg md:text-xl'>Run the below code in your terminal.</div> 
          <CodeBlock language="properties" code={fontCode}></CodeBlock>
          <div className='mt-2 text-lg md:text-xl'><span className='text-blue-700'>Note: </span>Replace <small className='text-gray-300'>{"{"}font{"}"}</small> with an actual font name after downloading it from <a href="https://www.nerdfonts.com/font-downloads" target='_blank' className='text-blue-700'>here</a>.</div>
          <div className='mt-5 text-lg md:text-xl'>Now, simply change your font by accessing your terminal's preferences as shown in the image below:</div>
          <div className='mt-10 flex justify-center'><img src={prefences} alt="Prefences" className="md:w-[50%] md:h-[50%]"/></div>
          <div className='mt-5 text-lg md:text-xl'>And that's it, everything is done! Your terminal now has a new look.</div>

          <div className='mt-10 mb-10 text-xl md:text-2xl text-slate-500'>More information on the <a href="https://ohmyposh.dev/" target='_blank' className='text-blue-700 underline'>official Oh My Posh website</a>.</div>
        </div>
      </div>
    </>
  );
}

export default Blog1;
