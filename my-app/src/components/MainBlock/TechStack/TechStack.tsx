import React from "react";
import { techStackData } from "../../../data/data";
import styles from "./styles.module.css";

export const TechStack: React.FC = (props) => {
  return (
    <div className={styles.techStack}>
      <h3>My Tech Stack</h3>
      <h4>Technologies I am familiar with</h4>
      <div className={styles.techStackIcons}>
        {techStackData.map((item) => {
          return <div key={item.id} className={styles.techStackIcon}>{item.icon}</div>;
        })}
      </div>
    </div>
  );
};
