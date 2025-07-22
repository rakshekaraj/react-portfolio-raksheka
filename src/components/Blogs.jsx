import React from "react";
import Navbar from "./Navbar";

const blogs = [
  {
    title: "Optimizing PyTorch MPS Attention",
    summary:
      "A deep dive into optimizing scaled dot-product attention for long-context inference on Apple's MPS backend using dynamic chunking and memory reuse.",
    link: "https://medium.com/@rakshekaraj/optimizing-pytorch-mps-attention-memory-efficient-large-sequence-processing-without-accuracy-5239f565f07b",
    tags: ["AI", "PyTorch", "Performance"],
  },
  {
    title:
      "Smart Meeting Summarizer – LLM-Powered Chrome Extension for Google Meet",
    summary:
      "Developed a Chrome extension that captures live captions from Google Meet and summarizes them using OpenAI’s GPT-3.5 via a FastAPI backend. Integrated DOM parsing, transcript buffering, and AWS-hosted inference to deliver real-time meeting insights.",
    link: "https://medium.com/@rakshekaraj/smart-meeting-summarizer-your-ai-assistant-for-google-meet-57f957a206ca",
    tags: ["Generative AI", "FastAPI", "LLM", "Chrome Extension"],
  },
  {
    title: "Federated Learning: Encoder Aggregation with Contribution Factors",
    summary:
      "Explains how personalizing decoders and weighting clients in federated learning can improve model performance in sensitive medical segmentation tasks.",
    link: "https://medium.com/@rakshekaraj/contribution-aware-personalization-for-3d-federated-brain-tumor-segmentation-8b5d62200428",
    tags: ["Federated Learning", "Medical AI"],
  },
  // Add more blogs here
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 pt-0 mt-0">
        <h1 className="mt-0 pb-10 text-4xl md:text-5xl text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text font-extralight tracking-wide text-transparent">
          Blogs
        </h1>

        <div className="grid gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="p-4 bg-black shadow-md rounded-lg border border-gray-600"
            >
              <h2 className="text-xl font-semibold text-white">{blog.title}</h2>
              <p className="text-gray-300 mt-2">{blog.summary}</p>
              <div className="flex flex-wrap mt-2 space-x-2">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-800 text-white px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-slate-300 font-medium hover:underline"
              >
                Read Blog →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
