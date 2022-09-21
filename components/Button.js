import styled from "styled-components";

const Button = ({ onClick, text, bgColor, color, width }) => {
  return (
    <Styling
      onClick={onClick}
      text={text}
      bgColor={bgColor}
      color={color}
      width={width}
    >
      {text}
    </Styling>
  );
};

const Styling = styled.button`
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  padding: 15px 30px 15px 30px;
  color: ${(props) => (props.color ? props.color : "white")};
  border: none;
  width: ${(props) => (props.width ? props.width : "100%")};
`;

export default Button;
