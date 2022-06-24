import { SecondaryButton } from "../atoms/button/SecondaryButton";
import style from "styled-components";
import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickUser = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SCOntainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickUser}>一般ユーザー</SecondaryButton>
    </SCOntainer>
  );
};

const SCOntainer = style.div`
  text-align: center;
`;
