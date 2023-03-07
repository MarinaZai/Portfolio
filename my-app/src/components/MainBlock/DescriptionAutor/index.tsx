import { Image } from "antd";
import React from "react";
import styles from "./styles.module.css";

export const DescriptionAutor: React.FC = (props) => {
  return (
    <div className={styles.descriptionAutor}>
      <h3 className={styles.greetings}>
        Hi 👋, my name is Marina and I am a Junior front-end developer.
        <br />
        Welcome to my portfolio page!
      </h3>
      <Image
        style={{
          borderRadius: "50%",
          border: "solid 4px",
        }}
        width={200}
        src="https://media.licdn.com/dms/image/D4E03AQEzBbcge4bdUQ/profile-displayphoto-shrink_800_800/0/1678188993094?e=1683763200&v=beta&t=72bQ5NgZ0orc2vScQ5pG5fL_r9tFq0lkiwrrgID9BH8"
      />
    </div>
  );
};
