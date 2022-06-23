import style from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

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
  return (
    <SCOntainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
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
