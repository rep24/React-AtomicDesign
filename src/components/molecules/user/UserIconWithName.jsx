import style from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <Sname>{name}</Sname>
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
