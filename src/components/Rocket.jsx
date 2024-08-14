import React, { useState, useEffect } from "react";
import styles from "./Rocket.module.css";

function Rocket({ isActive }) {
  return (
    <div className={`${styles.rocket} ${isActive ? styles.active : ""}`}>
      <img src="C:\Users\USER\Downloads\Rocket.jpg" alt="Rocket" />
    </div>
  );
}

export default Rocket;
