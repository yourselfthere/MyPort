import React from "react";
import pic from "../assets/hero-img.png";
const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap border-neutral-900 pl-6 pt-24">
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <h1 className="text-6xl font-thin tracking-tight text-white lg:mt-14 mb-10 text-center">
            Navneet Singh 
          </h1>
          <span className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 text-3xl tracking-tight text-transparent bg-clip-text ">
            Full Stack Developer
          </span>
          <p className="my-2 py-4 font-light tracking-tight lg:pl-0 text-white">
            Hello, I’m Navneet Singh, a dedicated full-stack web developer with
            a robust background in Computer Science and Technology. Currently
            pursuing a Bachelor of Technology at Maharaja Agrasen Institute of
            Technology, New Delhi, I am set to graduate in 2025. My expertise
            spans both front-end and back-end development, enabling me to build
            sophisticated and dynamic web applications. I am committed to
            leveraging my technical skills and problem-solving abilities to
            deliver innovative solutions and drive technological advancement in
            the field of web development.
            <div>
              My expertise encompasses both front-end and back-end development,
              as well as database management, equipping me to create dynamic and
              responsive web applications. I am enthusiastic about applying my
              technical acumen and problem-solving skills to develop innovative
              and efficient solutions in the field of web development.
            </div>
          </p>
        </div>
        <div className="flex justify-center w-full lg:w-2/5 mt-16">
          <img
            src={pic}
            alt="Me"
            className="  lg:h-2/5 object-cover  rounded-2xl "
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
