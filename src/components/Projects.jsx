import React, { useState } from "react";
import Navbar from "./Navbar";

const projects = [
  {
    title: "Federated Learning in 3D Brain-tumor Segmentation",
    description:
      "Pioneered research on federated learning aggregation algorithms for multimodal 3D brain tumor segmentation, training ResUNet and Transformer-encoded UNet models to achieve performance comparable to centralized learning approaches.",
    link: "#",
    domain: ["ml"],
  },
  {
    title: "Wildfire Aftermath Analysis using Satellite Imagery",
    description:
      "Built a segmentation pipeline with Detectron2 & Mask R-CNN for wildfire damage assessment, using Hadoop for distributed storage.",
    link: "#",
    domain: ["ml"],
  },
  {
    title: "Empathy-Driven Conversational AI (LLMs)",
    description:
      "Customized an emotionally adaptive chatbot with a custom state-of-mind class to analyze user conversation styles. Ongoing: Customizing the adaptation layer to guide users toward an optimal emotional state.",
    link: "#",
    domain: ["ml"],
  },
  {
    title: "AI Driven Interactive Systems",
    description:
      "Refined an AI-driven gesture recognition system, enabling real-time control with hand gestures. Created a portfolio chatbot adopting LLaMa 2 & compared it to OpenAI GPT in terms of text generation quality and accuracy.",
    link: "#",
    domain: ["sde", "ml"],
  },
  {
    title: "Movie Recommendation Systems",
    description:
      "Architected a sophisticated movie recommender system using RBMs, outperforming traditional K-means clustering methods on IMDB data. Developed an efficient Flask-based web application for user registration and personalized recommendations.",
    link: "#",
    domain: ["sde", "ml"],
  },
  {
    title: "EDQty- Multimodal Learning Tool",
    description:
      "Developed and deployed a multilingual learning companion using React and Flask, hosting on AWS EC2 for accessibility & inclusivity. Enabled real-time translation, Q&A, adaptive summarization, and captioning in a conversational AI interface.",
    link: "#",
    domain: ["sde", "ml"],
  },
  {
    title: "AI-Powered Code Generation",
    description:
      "Developed an AI-assisted programming assistant leveraging LLMs to generate, debug, and optimize code for multiple languages.",
    link: "#",
    domain: ["ml", "sde"], // Belongs to both ML & SDE
  },
];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter projects based on the selected category, allowing multi-category inclusion
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.domain.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 pt-0 mt-0">
        {/* Title */}
        <h1 className="mt-0 pb-10 text-4xl md:text-5xl text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text font-extralight tracking-wide text-transparent">
          Projects
        </h1>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-6 py-2 rounded-full text-white transition ${
              selectedCategory === "all"
                ? "bg-purple-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          <button
            className={`px-6 py-2 rounded-full text-white transition ${
              selectedCategory === "ml"
                ? "bg-purple-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedCategory("ml")}
          >
            ML Projects
          </button>
          <button
            className={`px-6 py-2 rounded-full text-white transition ${
              selectedCategory === "sde"
                ? "bg-purple-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedCategory("sde")}
          >
            SDE Projects
          </button>
        </div>

        {/* Project List */}
        <div className="grid gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-black shadow-md rounded-lg border border-gray-600"
            >
              <h2 className="text-xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="inline-block mt-3 text-slate-300 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
