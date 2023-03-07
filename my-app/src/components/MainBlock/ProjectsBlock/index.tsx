import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import Link from "antd/es/typography/Link";
import React from "react";
import { projectData } from "../../../data/data";
import styles from "./styles.module.css";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export const ProjectsBlock: React.FC = (props) => {
  return (
    <div className={styles.projectsBlock}>
      <h3>Projects</h3>
      <h4>Things I’ve built so far</h4>
      <div className={styles.cardsProject}>
        {projectData.map((item) => {
          return (
            <Card
              key={item.id}
              hoverable
              style={{ width: 240, margin: "1%" }}
              cover={<img alt="example" src={item.src} />}
            >
              <Meta
                title={item.name}
                description={
                  <div className={styles.info}>
                    <p className={styles.descr}>{item.description}</p>
                    <span className={styles.descr}>
                      Tech stack: {item.stack}
                    </span>
                    <div className={styles.linksProject}>
                      <Link
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#000000",
                          textDecoration: "underline",
                        }}
                        href={item.deploy}
                      >
                        <AiOutlineDeploymentUnit />
                        Deploy
                      </Link>
                      <Link
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#000000",
                          textDecoration: "underline",
                        }}
                        href={item.code}
                      >
                        <FaGithub />
                        Code
                      </Link>
                    </div>
                  </div>
                }
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};
