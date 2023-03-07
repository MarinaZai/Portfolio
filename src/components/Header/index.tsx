import {
  GithubOutlined,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import React from "react";
import styles from "./styles.module.css";
type HeaderProps = {
  switchTheme: () => void;
};

export const HeaderBlock: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h3 className={styles.logo}>M.Z.</h3>
      <div className={styles.links}>
        <Link href="https://github.com/MarinaZai">
          <GithubOutlined style={{ color: "#A7A7A7" }} />
        </Link>
        <Link href="https://twitter.com/Marina_zait">
          <TwitterOutlined style={{ color: "#A7A7A7" }} />
        </Link>
        <Link href="https://www.linkedin.com/in/marinazaitseva/">
          <LinkedinFilled style={{ color: "#A7A7A7" }} />
        </Link>
      </div>
      <button onClick={props.switchTheme} className={styles.switchTheme}>
        Switch theme
      </button>
    </header>
  );
};
