import style from "styled-components";
import { BaseButton } from "./baseButton";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = style(BaseButton)`
  background-color: #11999e;
  
`;
