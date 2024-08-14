import React, { useState, useEffect } from "react";
import styles from "./DynamicIsland.module.css";

function DynamicIsland() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    const messages = [
      "Welcome to my portfolio!",
      "Check out my latest project",
      "Open for new opportunities",
      "Let's connect on LinkedIn",
    ];

    const updateMessage = () => {
      setContent(messages[Math.floor(Math.random() * messages.length)]);
      setIsExpanded(true);
      setTimeout(() => setIsExpanded(false), 5000); // Close the island after 5 seconds
    };

    const interval = setInterval(updateMessage, 10000); // Show a new message every 10 seconds

    updateMessage(); // Show the first message immediately when the component mounts

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`${styles.island} ${isExpanded ? styles.expanded : ""}`}>
      {isExpanded && <p>{content}</p>}
    </div>
  );
}

export default DynamicIsland;
