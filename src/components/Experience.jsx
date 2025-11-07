import React, { useState } from "react";

const TimelineItem = ({
  title,
  role,
  date,
  location,
  description,
  skills,
  workType,
  isLeft,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  // Close popup when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".timeline-item")) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const card = (
    <div
      className="timeline-item p-4 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 shadow-lg rounded-lg transform transition-all duration-300 hover:bg-neutral-800/80 w-full cursor-pointer"
      onClick={handleCardClick}
    >
      <h3 className="font-bold text-xl mb-1 text-purple-300">{title}</h3>
      <p className="text-lg mb-1 text-gray-300">{role}</p>
      <p className="text-gray-400 mb-1">{date}</p>
      <p className="text-sm text-gray-500">{location}</p>
      <p className="text-sm text-purple-400/70 italic">{workType}</p>
    </div>
  );

  const descriptionCard = (
    <div
      className="timeline-item p-4 bg-neutral-800/90 backdrop-blur-sm border border-purple-900/30 rounded-lg shadow-xl w-full transform transition-all duration-300"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="text-sm leading-relaxed mb-4 text-gray-300">
        {description}
      </p>
      <div className="mt-2">
        <p className="text-sm font-semibold mb-2 text-purple-300">Skills:</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs bg-purple-950/50 border border-purple-800/30 px-2 py-1 rounded-full text-purple-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <button
        className="mt-4 text-sm text-purple-400 hover:text-purple-300"
        onClick={() => setIsExpanded(false)}
      >
        Close
      </button>
    </div>
  );

  // Desktop layout
  const desktopLayout = (
    <div className="hidden md:flex items-center w-full mb-8">
      <div className="w-5/12 relative">
        {isLeft
          ? card
          : isExpanded && (
              <div className="absolute top-0 left-0 w-full z-20">
                {descriptionCard}
              </div>
            )}
      </div>
      <div className="w-2/12 flex justify-center relative">
        <div className="w-3 h-3 bg-purple-400 rounded-full relative z-10 shadow-glow"></div>
        <div className="w-0.5 h-24 bg-purple-900/30 absolute top-0"></div>
      </div>
      <div className="w-5/12 relative">
        {!isLeft
          ? card
          : isExpanded && (
              <div className="absolute top-0 right-0 w-full z-20">
                {descriptionCard}
              </div>
            )}
      </div>
    </div>
  );

  // Mobile layout
  const mobileLayout = (
    <div className="md:hidden mb-8">
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 bg-purple-400 rounded-full relative z-10 shadow-glow"></div>
        <div className="w-0.5 h-full bg-purple-900/30 absolute left-1.5 top-3"></div>
      </div>
      <div className="ml-8 relative">
        {card}
        {isExpanded && <div className="mt-4">{descriptionCard}</div>}
      </div>
    </div>
  );

  return (
    <>
      {desktopLayout}
      {mobileLayout}
    </>
  );
};

const Timeline = () => {
  const experiences = [
    {
      title: "Amazon",
      role: "SDE",
      date: "September 2025 - present",
      location: "Seattle, Washington, United States",
      workType: "Full-time",
      description:
        "Working with a team on risk management and bot mitigation.",
      skills: ["Java", "JavaScript"],
      isLeft: true,
    },
    {
      title: "WorkUp",
      role: "Machine Learning Engineer",
      date: "May 2024 - Jul 2024",
      location: "Los Angeles, California, United States",
      workType: "Internship · Hybrid",
      description:
        "Leveraged deep learning models to develop a SOTA recommender system for a TikTok-style application for employment using Nvidia Merlin for pipeline creation and AWS Sage maker for Cloud deployment. Major focus: Candidate retrieval system and model development (Merlin with Two tower architecture)",
      skills: ["MongoDB", "Nvidia Merlin", "AWS SageMaker"],
      isLeft: true,
    },
    {
      title: "KANINI",
      role: "Software Engineering Intern",
      date: "Feb 2023 - Jun 2023",
      location: "Chennai, Tamil Nadu, India",
      workType: "Full-time",
      description:
        "Worked on software integration and development utilizing various web technologies and frameworks.",
      skills: [
        "AngularJS",
        "C#",
        "Web Technologies",
        "DBMS",
        "Bootstrap",
        "HTML5",
        "Node.js",
        "JavaScript",
        ".NET Framework",
        "CSS",
      ],
      isLeft: false,
    },
    {
      title: "MSAII",
      role: "Software Engineering Intern",
      date: "Nov 2022 - Feb 2023",
      location: "Chennai, Tamil Nadu, India",
      workType: "Contract · Remote",
      description:
        "Engineered a resilient microservices backend (FastAPI, Celery, RabbitMQ) for React dashboard, designed for fault isolation and horizontal scalability",
      skills: [
        "Web development",
        "API handling",
        "",
        "Computer Vision",
        "DBMS",
      ],
      isLeft: true,
    },
    {
      title: "Mitacs",
      role: "Machine Learning Globalink Research Intern",
      date: "Jul 2022 - Oct 2022",
      location: "Waterloo, Ontario, Canada",
      workType: "Full-time · On-site",
      description:
        "Assembled and modeled k8 rovers for a project sponsored by Canadian Space Agency, demonstrated usage through seminars for PhD candidates, under Dr Julie Mueller and Inksmith Technologies. Researched and applied RCNN models to increase speed in object detection in rover prototypes by 15%",
      skills: [
        "Data Analytics",
        "Computer Vision",
        "DBMS",
        "Big Data Analytics",
        "Machine Learning",
      ],
      isLeft: false,
    },
    {
      title: "zebo.ai",
      role: "Machine Learning Intern",
      date: "Oct 2021 - Jan 2022",
      location: "Remote",
      workType: "Part-time",
      description:
        "Pioneered development of advanced fraud detection models, leveraging anomaly detection and pattern recognition for financial transactions, reduced false positives and improved precision by 17%.",
      skills: [
        "Computer Vision",
        "Data Science",
        "DBMS",
        "Neural Networks",
        "Python",
      ],
      isLeft: true,
    },
  ];

  return (
    <div id="experience" className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="my-10 md:my-20 pb-2 text-4xl md:text-5xl text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text font-extralight tracking-wide text-transparent">
        Experience
      </h1>
      <div className="relative">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
      {/* <p className="text-center justify-center">
        <a href="#navbar" className="text-purple-600 hover:text-purple-400">
          go to top
        </a>
      </p> */}
    </div>
  );
};

const styles = `
  .shadow-glow {
    box-shadow: 0 0 8px 2px rgba(167, 139, 250, 0.3);
  }
`;

export default Timeline;
