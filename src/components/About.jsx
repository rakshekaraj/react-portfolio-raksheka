import React, { useState } from "react";
import about_me_pic from "../assets/about_me_picture.jpg";
import about_me_vid from "../assets/about_me_vid.mp4";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      id="about"
      className="mt-10 lg:mt-20 lg:pt-40 border-b border-neutral-900 pb-4 lg:mb-35"
    >
      <div className="flex flex-wrap">
        {/* --------- */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <span className="my-2  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl font-thin tracking-wide text-transparent">
              What am I?
            </span>
            <p className="my-2 mx-w-xl py-2 font-light tracking-tighter">
              I'm a problem solver with a passion for leveraging technology to
              create sustainable solutions. Driven by gratitude and a commitment
              to giving back, I thrive on dynamic learning and embrace an
              interdisciplinary approach to tackling challenges.
            </p>
            <p className="my-2 mx-w-xl font-light tracking-tighter">
              Passionate about leveraging the power of Machine Learning and Data
              Science, I am a Master's student in Electrical and Computer
              Engineering at the University of Southern California, specializing
              in cutting-edge technologies such as NLP and Computer Vision. My
              journey in the field has been marked by hands-on experiences as a
              Machine Learning Research Intern, where I developed algorithms for
              education data predictions and collaborated on real-time
              deployments.
            </p>

            {/* Conditional rendering for additional paragraphs */}
            {showMore && (
              <>
                <p className="my-2 mx-w-xl font-light tracking-tighter">
                  With a solid foundation in Electronics and Communication
                  Engineering, complemented by a Minor in Machine Learning from
                  Anna University, I have honed my skills in Python, TensorFlow,
                  and other key libraries. My projects, from constructing
                  databases for spectral image analysis to optimizing AI-driven
                  gesture recognition systems, reflect my commitment to
                  addressing real-world challenges through innovative solutions.
                </p>
                <p className="my-2 mx-w-xlfont-light tracking-tighter">
                  As a creative problem-solver, I thrive on pushing the
                  boundaries of what's possible in the world of AI. I am excited
                  about contributing my skills to the intersection of technology
                  and entertainment, particularly in the realm of NFTs and
                  digital tokens. Let's connect and explore opportunities to
                  collaborate and create meaningful experiences together!
                </p>
              </>
            )}

            {/* Button to toggle additional content */}
            <button
              className="text-slate-500 hover:underline mt-4"
              onClick={toggleShowMore}
            >
              {showMore ? "Read Less" : "Read More About Me"}
            </button>
          </div>
          {/* <p>
            <a href="#navbar" className="text-purple-600 hover:text-purple-400">
              go to top
            </a>
          </p> */}
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 overflow-hidden">
          <div className="flex justify-center">
            {/* <img src={about_me_pic} alt="" className="brightness-60" /> */}
            <video
              src={about_me_vid}
              autoPlay
              muted
              loop
              className="h-full w-full object-cover brightness-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
