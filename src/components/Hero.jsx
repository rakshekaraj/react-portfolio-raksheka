import React from "react";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-20 lg:py-20">
      <div className="flex flex-wrap">
        {/* --------- */}
        <div className="w-full lg:w-full">
          <div className="flex flex-col items-center lg:items-center">
            <h1 className="pb-16 text-6xl font-thin tracking-widest lg:mt-16 lg:8xl">
              Raksheka Rajakumar
            </h1>
            {/* marquee end */}
            <div className="w-1/2 flex overflow-hidden space-x-16 bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-500">
              <div className="flex space-x-16 animate-loop-scroll min-w-max">
                <span>Computer vision</span>
                <span>LLMs</span>
                <span>Generative AI</span>
                <span>Data Science</span>
                <span>Neural Networks</span>
                <span>Machine Learning</span>
              </div>
              <div className="flex space-x-16 animate-loop-scroll min-w-max">
                <span>Innovative Technologist</span>
                <span>Data Science Advocate</span>
                <span>Deep Learning Aficionado</span>
                <span>Cloud Deployment Specialist</span>
              </div>
            </div>
            {/* //marquee end */}
            <div className="w-full font-light text-center lg:w-1/2 mt-5 mb-20 lg:mt-16 ">
              <p>
                I'm a graduate engineer in the making. I architect ML pipelines
                and leverage data to derive insights. Here I talk about my
                personal footsteps in Machine Learning, Data Science, Cloud with
                a dash of FSD!
              </p>
              <p className="lg:mt-5 mt-3 text-center">
                On the personal side, I story-write songs and pencil sketch.
                Annnnd I'm almost sure you can't beat me @ TT!
              </p>
            </div>
          </div>
        </div>
        {/* --------- */}
      </div>
    </div>
  );
};

export default Hero;
