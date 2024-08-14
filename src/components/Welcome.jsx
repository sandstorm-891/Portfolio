import React, { useState, useRef, useEffect } from "react";
import styles from "./Welcome.module.css";

const sections = [
  {
    title: "About Me",
    content:
      "A highly motivated B.Tech graduate in Computer Science and Engineering with expertise in Data Science and Machine Learning. Proficient in Python and adept with contemporary data analysis tools. Passionate about solving complex problems and creating innovative solutions.",
  },
  {
    title: "Skills",
    content: "My technical toolkit includes:",
    skills: [
      "Python",
      "C++",
      "SQL",
      "MATLAB",
      "Machine Learning",
      "NLP",
      "PyTorch",
      "TensorFlow",
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Git",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "Experience",
    content: [
      {
        role: "AI/ML Engineer Intern",
        company: "Internpe",
        period: "July 2023 - August 2023",
        achievements: [
          "Developed and optimized predictive models, increasing accuracy by 15%.",
          "Implemented machine learning pipelines using Docker.",
          "Conducted data preprocessing and feature engineering to enhance model performance.",
        ],
      },
      {
        role: "Machine Learning Engineer Intern",
        company: "Coincent.ai",
        period: "September 2022 - November 2022",
        achievements: [
          "Trained models for autonomous vehicle navigation, improving reliability by 20%.",
          "Developed simulation environments to test driving algorithms.",
          "Conducted research to enhance model robustness.",
        ],
      },
    ],
  },
  {
    title: "Projects",
    content: [
      {
        name: "Fraud Detection in Financial Transactions",
        description:
          "Created a real-time fraud detection system for banking and e-commerce sectors.",
        link: "#",
      },
      {
        name: "Next Word Prediction",
        description:
          "Developed an NLP model for text auto-completion and virtual assistants.",
        link: "#",
      },
      {
        name: "Personalized Recommendation System",
        description:
          "Built a recommendation engine for an e-commerce platform based on user behavior.",
        link: "#",
      },
    ],
  },
  {
    title: "Certifications",
    content: [
      "Microsoft Certified: Azure AI Fundamentals (2022)",
      "IBM Certified: Machine Learning using Python (2023)",
      "AWS Certified: AWS Cloud Practitioner Essentials (2023)",
      "NPTEL Certified: Introduction to Internet of Things (2022)",
      "NPTEL Certified: Leadership and Team Effectiveness (2023)",
    ],
  },
];

function Welcome() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [cloudPosition, setCloudPosition] = useState({ x: 0, y: 0 });
  const [showCloud, setShowCloud] = useState(false);
  const [showTornado, setShowTornado] = useState(false);
  const cloudRef = useRef(null);
  const tornadoRef = useRef(null);

  const toggleSection = (index, event) => {
    setExpandedSection(expandedSection === index ? null : index);
    setCloudPosition({ x: event.clientX, y: event.clientY });
    setShowCloud(true);
    setShowTornado(true);
  };

  useEffect(() => {
    if (showCloud) {
      const timer = setTimeout(() => {
        setShowCloud(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showCloud]);

  useEffect(() => {
    if (showTornado) {
      const timer = setTimeout(() => {
        setShowTornado(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showTornado]);

  return (
    <div className={styles.welcome}>
      <div className={styles.nebulaBackground}></div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Sandipan Bhowmik</h1>
          <h2>Data Scientist & Machine Learning Engineer</h2>
        </div>
        <div className={styles.sectionGrid}>
          {sections.map((section, index) => (
            <div
              key={index}
              className={`${styles.section} ${expandedSection === index ? styles.expanded : ""}`}
              onClick={(event) => toggleSection(index, event)}
            >
              <h3>{section.title}</h3>
              <div className={styles.sectionContent}>
                {typeof section.content === "string" && (
                  <p>{section.content}</p>
                )}
                {section.skills && (
                  <div className={styles.skillList}>
                    {section.skills.map((skill, i) => (
                      <span key={i} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                {Array.isArray(section.content) &&
                  section.content.some((item) => item.role) &&
                  section.content.map((exp, i) => (
                    <div key={i}>
                      <h4>
                        {exp.role} at {exp.company}
                      </h4>
                      <p>{exp.period}</p>
                      <ul>
                        {exp.achievements.map((achievement, j) => (
                          <li key={j}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                {Array.isArray(section.content) &&
                  section.content.some((item) => item.name) &&
                  section.content.map((project, i) => (
                    <div key={i}>
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                      <a href={project.link} className={styles.projectLink}>
                        View Project
                      </a>
                    </div>
                  ))}
                {Array.isArray(section.content) &&
                  section.content.every((item) => typeof item === "string") && (
                    <ul>
                      {section.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {showCloud && (
        <div
          ref={cloudRef}
          className={styles.cloud}
          style={{
            left: `${cloudPosition.x - 50}px`,
            top: `${cloudPosition.y - 50}px`,
          }}
        />
      )}
      {showTornado && (
        <div
          ref={tornadoRef}
          className={styles.tornado}
          style={{
            left: `${cloudPosition.x - 50}px`,
            top: `${cloudPosition.y - 50}px`,
          }}
        />
      )}
    </div>
  );
}

export default Welcome;
