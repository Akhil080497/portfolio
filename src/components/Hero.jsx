import React from "react";
const personImg = "/images/Akhil.png";

const Hero = () => {
  return (
    <>
      <section id="hero" className="w-full bg-secondary text-black">
        <div className="container border-bdr grid grid-cols-1 md:grid-cols-2 items-center sm:h-[450px] space-y-0 ">
          {/* Image section */}
          <div className=" mx-auto sm:max-w-xs ">
            <img 
              src={personImg}
              className="bg-white border-4 rounded-sm  p-2 transform transition-transform duration-300 hover:scale-105"
              alt="person"
            /> 
          </div>
          <div>
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">  
              <p >HELLO</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80">
                I'm Akhil Padamati
              </p>
              <p className="text-3xl text-gray-700">
                Frontend Developer
              </p>
              {/* <p className="text-black/75 text-center sm:text-left">
              Aspiring Web Developer seeking opportunities in Frontend roles. <br/>
              Skilled in JavaScript, SQL, 
              HTML, CSS, Bootstrap, Node Js and Python, <br/> I am exploring opportunities to 
              contribute while continuously learning and growing in the field. 
              </p> */}
              <button>
              <a 
                href="mailto:akhilreddy.padamati@gmail.com"
                className="inline-block primary-btn my-3 bg-primary p-2 rounded text-white hover:bg-hoverr"
              >
                Hire me
              </a>
              </button>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Hero;
