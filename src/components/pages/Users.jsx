import style from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `サンプル-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "example@email.com",
    phone: "090-0909-0909",
    company: {
      name: "テスト会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwich = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SCOntainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwich}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SCOntainer>
  );
};

const SCOntainer = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  pading 24px;
`;

const SUserArea = style.div`
  padding-top: 40px;
  width: 60%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1f));
  grid-gap: 20px;
`;
