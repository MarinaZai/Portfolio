import React from "react";
import { DescriptionAutor } from "./DescriptionAutor";
import styles from "./styles.module.css";
import { TechStack } from "./TechStack/TechStack";

export const MainBlock: React.FC = (props) => {
  return (
    <main>
      <DescriptionAutor />
      <TechStack />
    </main>
  );
};
