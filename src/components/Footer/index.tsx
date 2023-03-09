import {
  GithubOutlined,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import React from "react";
import { FaPhoneVolume, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./styles.module.css";

export const FooterBlock: React.FC = (props) => {
  return (
    <footer>
      <Link href="tel:+375333207718">
        <FaPhoneVolume style={{ fontSize: "20px", color: "#A7A7A7" }} />
      </Link>
      <Link href="mailto:marintos34@gmail.com">
        <MdEmail style={{ fontSize: "20px", color: "#A7A7A7" }} />
      </Link>
      <div className={styles.links}>
        <Link href="https://github.com/MarinaZai">
          <GithubOutlined style={{ fontSize: "20px", color: "#A7A7A7" }} />
        </Link>
        <Link href="https://twitter.com/Marina_zait">
          <TwitterOutlined style={{ fontSize: "20px", color: "#A7A7A7" }} />
        </Link>
        <Link href="https://www.linkedin.com/in/marinazaitseva/">
          <LinkedinFilled style={{ fontSize: "20px", color: "#A7A7A7" }} />
        </Link>
        <Link href="https://t.me/Marintos34">
          <FaTelegram style={{ fontSize: "20px", color: "#A7A7A7" }} />
        </Link>
      </div>
    </footer>
  );
};
