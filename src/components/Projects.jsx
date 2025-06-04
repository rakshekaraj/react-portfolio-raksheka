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
    title:
      "Smart Meeting Summarizer – LLM-Powered Chrome Extension for Google Meet",
    description:
      "Developed a Chrome extension that captures live captions from Google Meet and summarizes them using OpenAI’s GPT-3.5 via a FastAPI backend. Integrated DOM parsing, transcript buffering, and AWS-hosted inference to deliver real-time meeting insights.",
    link: "https://medium.com/@rakshekaraj/smart-meeting-summarizer-your-ai-assistant-for-google-meet-57f957a206ca",
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
    title: "Delhi Air Pulse",
    description:
      "cloud-native AQI intelligence platform using AWS Lambda, DynamoDB, and microservices to deliver real-time air quality analytics and forecasts. It features a React.js frontend with multi-zone heatmaps and embedded ML inference for dynamic, low-latency insights.",
    link: "#",
    domain: ["sde"],
  },
  {
    title: "Custom Multi-Head Attention CUDA Kernel for High-Throughput LLMs",
    description:
      "Built a custom CUDA kernel to optimize multi-head attention in transformers, achieving 3× faster inference and 40% memory savings. Integrated into PyTorch with mixed-precision and tiling optimizations, boosting GPU throughput by 150% on NVIDIA A100.",
    link: "#",
    domain: ["ml"],
  },
  {
    title:
      "MPS - Custom operation: Optimized Scaled Dot-Product Attention for PyTorch Backend",
    description:
      "Optimized a Scaled Dot-Product Attention operator for PyTorch’s MPS backend, reducing memory failures by 70% via dynamic chunking and buffer reuse. Improved long-context inference stability beyond 12k tokens by integrating low-level memory and graph execution enhancements.",
    link: "https://medium.com/@rakshekaraj/optimizing-pytorch-mps-attention-memory-efficient-large-sequence-processing-without-accuracy-5239f565f07b",
    domain: ["ml"],
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
                target="_blank"
                rel="noopener noreferrer"
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
