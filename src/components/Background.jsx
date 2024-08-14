import React, { useState } from "react";
import styles from "./Background.module.css";

function Background() {
  const [clouds, setClouds] = useState([]);

  const addCloud = (e) => {
    const newCloud = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setClouds((prevClouds) => [...prevClouds, newCloud]);

    setTimeout(() => {
      setClouds((prevClouds) =>
        prevClouds.filter((cloud) => cloud.id !== newCloud.id),
      );
    }, 2000); // Remove cloud after 2 seconds
  };

  return (
    <div className={styles.background} onClick={addCloud}>
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className={styles.cloud}
          style={{ left: cloud.x, top: cloud.y }}
        />
      ))}
    </div>
  );
}

export default Background;
