import { Link } from "react-router-dom";
import style from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>
      <SLink to="/users">Users</SLink>
    </SHeader>
  );
};

const SHeader = style.header`
  background-color : #11999e;
  color #fff;
  text-align: center;
  padding:8px 0;
`;

const SLink = style(Link)`
  margin: 0 8px;
`;