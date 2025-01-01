import React from "react";
import styles from "./HexagonComponent.module.css";

const projects = [
  { id: 1, icon: "📁", label: "Project 1" },
  { id: 2, icon: "💻", label: "Project 2" },
  { id: 3, icon: "🎨", label: "Project 3" },
  { id: 4, icon: "📱", label: "Project 4" },
  { id: 5, icon: "🧠", label: "Project 5" },
  { id: 6, icon: "⚙️", label: "Project 6" },
];

const HexagonComponent = () => {
  return (
    <div className={styles.hexagon}>
      {projects.map((project, index) => (
        <div key={project.id} className={`${styles.node} ${styles[`node${index + 1}`]}`}>
          <div className={styles.icon}>{project.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default HexagonComponent;