import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="w-full bg-bgsecondary text-white sm:gap-10">
        <div className="container border-bdr grid grid-cols-1 sm:grid-cols-2 sm:justify-between items-center sm:h-[450px] space-y-0 py-8 sm:py-0 mx-auto">
          <div className="space-y-2 grid justify-items-center sm:justify-items-start">  
              <p className="text-4xl md:text-6xl sm:text-4xl font-bold text-white">About</p>
              <p className="text-white/75 text-center sm:text-left">
              Aspiring Web Developer seeking opportunities in Frontend roles. <br/>
              Skilled in JavaScript, SQL, 
              HTML, CSS, Bootstrap, Node Js and Python, <br/> I am exploring opportunities to 
              contribute while continuously learning and growing in the field. 
              </p>
              <button>
              <a 
                href="/ResumeAkhil.pdf"
                download="Akhil_Padamati_Resume.pdf"
                className="inline-block primary-btn my-3 bg-primary p-2 rounded text-white hover:bg-hoverr"
              >
                Download Resume
              </a>
              </button>
          </div>
          <div className="space-y-2 sm:pt-12 md:space-y-8 grid justify-items-center sm:justify-items-start md:px-40">  
            <p className="text-4xl md:text-6xl font-bold text-white">
                Skills
            </p>
            <div className="text-white/75 ">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>SQL</p>
                <p>React JS</p>
                <p>Node JS</p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
