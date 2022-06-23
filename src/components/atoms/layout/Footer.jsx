import { Link } from "react-router-dom";
import style from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2022 test Inc.</SFooter>;
};

const SFooter = style.footer`
  background-color : #11999e;
  color #fff;
  text-align: center;
  padding:8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
