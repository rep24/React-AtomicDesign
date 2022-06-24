import React, { useContext } from "react";
import style from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <Sname>{name}</Sname>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = style.div`
  text-align: center;
`;

const SImg = style.img`
  border-radius: 50%;
`;
const Sname = style.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;

`;

const SEdit = style.span`
  text-decoration: underline;
  color: #aaa;
  cursol: pointer;
`;
