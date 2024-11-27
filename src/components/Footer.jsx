import React from "react";

const Footer = () => {
  return (
    <footer className="text-center bg-primary py-8 text-white">
      <div className="container flex flex-col sm:flex-col md:flex-row md:justify-around gap-4">
        <div>
            <h1 className='text-3xl text-white font-bold'>Contact</h1>
        </div>
        <div>
            <p>
            +91-7995713323 
            </p>
        </div>
        <div>
            <p>
            akhilreddy.padamati@gmail.com 
            </p>
        </div>
        <div className="text-3xl">
            <a className="hover-secondary" href="https://www.linkedin.com/in/akhil-padamati/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>  
    </footer>
  );
};

export default Footer;
