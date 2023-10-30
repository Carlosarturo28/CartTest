import { ColorButton, DotButton } from "./styles";

export const Selector = ({ type, item, onClick, active }) => {
  switch (type) {
    case "button":
      return (
        <ColorButton onClick={onClick} $active={active}>
          {item}
        </ColorButton>
      );
    default:
      return <DotButton onClick={onClick} $active={active} />;
  }
};
