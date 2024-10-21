import React from "react";
import p1 from "../assets/projects/1.png";
import p2 from "../assets/projects/2.png";
import p3 from "../assets/projects/3.png";
import p4 from "../assets/projects/4.png";
import p5 from "../assets/projects/5.png";
import p6 from "../assets/projects/6.png";
import p7 from "../assets/projects/7.png";
import p8 from "../assets/projects/8.png";
import p9 from "../assets/projects/9.png";

const ProjectGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Bean Deteect AI",
      description:
        "Developed a classification system to identify 7 types of beans using geometric and shape-based data from a 13,600 record dataset. Compared the performance of various machine learning models, including ANN, XGBoost, Gradient Boosting, SVM, and Nearest Means Classifier, focusing on both speed and accuracy. Achieved a top accuracy of 94.09% with the XGBoost model.",
      imageUrl: p1,
    },
    {
      id: 2,
      title: "Glove sight-Intelligent Sensory assistive glove",
      description:
        "Designed a computer vision and IoT-based wearable glove system to detect and identify obstacles(types-3200) via an ultra-sonic sensor, providing real-time speech output through optical character recognition to aid visually impaired people",
      imageUrl: p2,
    },
    {
      id: 3,
      title: "Flix finder-Web Application for movie recommendation",
      description:
        "Built a Movie recommendation system deploying Content based Filtering by means of Restricted Boltzmann Machines (RBMs) and compared it with K means. Demonstrated proficiency in web-development by creating a flask application for movie recommendations.",
      imageUrl: p3,
    },
    {
      id: 4,
      title: "Sara- ChatBot",
      description:
        "Developed a portfolio chatbot utilizing multiple AI models, including Llama 2 and OpenAI's GPT, to compare their performance in handling user interactions. The chatbot was designed to answer portfolio-related questions, assist with navigation, and provide personalized responses. Evaluated each model based on response accuracy, processing speed, and overall user experience.",
      imageUrl: p4,
    },
    {
      id: 5,
      title: "Fire-vision",
      description:
        "Constructed database of 46,000 containing electromagnetic spectral data (extracted from wildfire images from a particular location).Engineered KNN model (accuracy 88.7%) to analyze spectral aspects of wildfires while creating a predictive model for mapping wildfire burn-thresholds and evaluating BIR (Burn Index Ratio) for different map-points from each satellite imagery",
      imageUrl: p5,
    },
    {
      id: 6,
      title: "Gesture Mouse",
      description:
        "Leveraged an AI-driven gesture recognition system leveraging Deep-Learning and Computer Vision, enabling real-time control of PowerPoint  presentations with hand gestures, including cursor, pen, and navigation functions",
      imageUrl: p6,
    },
    {
      id: 7,
      title: "Job rec sys",
      description:
        "Leveraged deep learning models to develop a SOTA recommender system for a TikTok-style application for employment using Nvidia Merlin for pipeline creation and AWS Sage maker for Cloud deployment. Major focus : Candidate retrieval system and model development (Merlin with Two tower architecture",
      imageUrl: p7,
    },
    {
      id: 8,
      title:
        "Performance Analysis of CNN architectures in object multi-label Image Classifications",
      description:
        "International Conference on Informatics and Mathematical Sciences 2022",
      imageUrl: p8,
    },
    {
      id: 9,
      title:
        "Analytical assessment of ML algorithms for predicting campus placements",
      description:
        "Springer 2022 (Mobile Computing and Sustainable Informatics: ICMCSI)",
      imageUrl: p9,
    },
  ];

  return (
    <div id="projects" className="max-w-6xl mx-auto p-6">
      <h1 className="my-10 md:my-20 pb-2 text-4xl md:text-5xl text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text font-extralight tracking-wide text-transparent">
        Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="flip-card w-full h-64">
            <div className="flip-card-inner w-full h-full">
              <div className="flip-card-front w-full h-full">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flip-card-back w-full h-full bg-neutral-950 rounded-lg p-6">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p>
                    <a href="#navbar">navbar</a>
                  </p>
                  <p className="text-center text-sm text-white">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .flip-card {
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default ProjectGrid;
