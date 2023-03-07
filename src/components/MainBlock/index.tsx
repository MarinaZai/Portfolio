import React from "react";
import { DescriptionAutor } from "./DescriptionAutor";
import { ProjectsBlock } from "./ProjectsBlock";
import styles from "./styles.module.css";
import { TechStack } from "./TechStack";

export const MainBlock: React.FC = (props) => {
  return (
    <main>
      <DescriptionAutor />
      <TechStack />
      <ProjectsBlock />
    </main>
  );
};
