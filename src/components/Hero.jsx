import React from "react";
const personImg = "/images/Akhil.png";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-secondary text-black">
        <div className="container border-bdr grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[500px] space-y-0 ">
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
          {/* Image section */}
          <div>
            <img 
              src={personImg}
              className="border-primary border-4 rounded-sm w-full md:max-w-md mx-auto p-2 hover:bg-hoverrsecondary"
              alt="person"
            /> 
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
