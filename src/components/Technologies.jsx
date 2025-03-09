import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  FaFlask,
  FaPython,
  FaNodeJs,
  FaAws,
  FaGitSquare,
  FaBootstrap,
  FaDocker,
} from "react-icons/fa";
import {
  SiFastapi,
  SiCplusplus,
  SiGooglecloud,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiKubernetes,
  SiHuggingface,
  SiSelenium,
  SiSpacy,
  SiOpencv,
  SiMlflow,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiDask,
  SiJupyter,
  SiAnaconda,
  SiXcode,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbAtom } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";

const technologies = [
  {
    icon: <FaPython className="text-yellow-500 lg:text-6xl" />,
    name: "Python",
  },
  { icon: <SiCplusplus className="text-blue-600 lg:text-6xl" />, name: "C++" },
  {
    icon: <RiReactjsLine className="text-cyan-400 lg:text-6xl" />,
    name: "React",
  },
  {
    icon: <FaNodeJs className="text-green-500 lg:text-6xl" />,
    name: "Node.js",
  },
  {
    icon: <SiTailwindcss className="text-sky-400 lg:text-6xl" />,
    name: "Tailwind CSS",
  },
  {
    icon: <FaBootstrap className="text-purple-500 lg:text-6xl" />,
    name: "Bootstrap",
  },
  { icon: <FaFlask className="text-red-500 lg:text-6xl" />, name: "Flask" },
  {
    icon: <SiFastapi className="text-green-600 lg:text-6xl" />,
    name: "FastAPI",
  },
  { icon: <SiMysql className="text-orange-600 lg:text-6xl" />, name: "MySQL" },
  {
    icon: <SiMongodb className="text-green-600 lg:text-6xl" />,
    name: "MongoDB",
  },
  { icon: <FaDocker className="text-blue-500 lg:text-6xl" />, name: "Docker" },
  {
    icon: <FaGitSquare className="text-orange-700 lg:text-6xl" />,
    name: "Git",
  },
  {
    icon: <SiGooglecloud className="text-blue-300 lg:text-6xl" />,
    name: "Google Cloud",
  },
  { icon: <FaAws className="text-orange-600 lg:text-6xl" />, name: "AWS" },
  {
    icon: <SiKubernetes className="text-blue-600 lg:text-6xl" />,
    name: "Kubernetes",
  },
  {
    icon: <SiHuggingface className="text-yellow-500 lg:text-6xl" />,
    name: "Hugging Face",
  },
  {
    icon: <SiSelenium className="text-green-500 lg:text-6xl" />,
    name: "Selenium",
  },
  { icon: <SiSpacy className="text-green-600 lg:text-6xl" />, name: "SpaCy" },
  { icon: <SiOpencv className="text-slate-500 lg:text-6xl" />, name: "OpenCV" },
  { icon: <SiMlflow className="text-red-500 lg:text-6xl" />, name: "MLflow" },
  {
    icon: <SiTensorflow className="text-orange-600 lg:text-6xl" />,
    name: "TensorFlow",
  },
  { icon: <SiKeras className="text-red-500 lg:text-6xl" />, name: "Keras" },
  { icon: <SiPytorch className="text-red-700 lg:text-6xl" />, name: "PyTorch" },
  {
    icon: <SiScikitlearn className="text-green-600 lg:text-6xl" />,
    name: "Scikit-Learn",
  },
  { icon: <SiPandas className="text-green-600 lg:text-6xl" />, name: "Pandas" },
  { icon: <SiNumpy className="text-blue-600 lg:text-6xl" />, name: "NumPy" },
  { icon: <SiDask className="text-blue-600 lg:text-6xl" />, name: "Dask" },
  {
    icon: <SiJupyter className="text-orange-600 lg:text-6xl" />,
    name: "Jupyter",
  },
  {
    icon: <SiAnaconda className="text-green-600 lg:text-6xl" />,
    name: "Anaconda",
  },
  {
    icon: <VscVscode className="text-blue-600 lg:text-6xl" />,
    name: "VS Code",
  },
  { icon: <TbAtom className="text-purple-600 lg:text-6xl" />, name: "Atom" },
  { icon: <SiXcode className="text-blue-600 lg:text-6xl" />, name: "Xcode" },
  {
    icon: <DiVisualstudio className="text-blue-600 lg:text-6xl" />,
    name: "Visual Studio",
  },
];

const Technologies = () => {
  return (
    <div className="m-3 lg:pb-20 lg:pt-20 border-b border-neutral-800 pb-24">
      <h1 className="my-20 pb-2 text-5xl text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text font-extralight tracking-wide text-transparent">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group rounded-2xl border-4 border-neutral-800 p-4 hover:animate-wiggle"
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
