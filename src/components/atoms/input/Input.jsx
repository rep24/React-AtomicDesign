import style from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = style.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  putline: none;
`;
