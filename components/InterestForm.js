import styled from "styled-components";
import Button from "./Button";

const InterestForm = ({ onClick, onChangeFormValue, error }) => {
  return (
    <Styling>
      <h1>REGISTER YOUR INTEREST</h1>
      <label htmlFor="email">Email</label>
      <br></br>
      {error && <p className="error">{error}</p>}
      <input
        name="email"
        className="input"
        onChange={(e) => onChangeFormValue(e)}
      />
      <Button
        color="black"
        bgColor="white"
        text="submit"
        onClick={onClick}
        width="100px"
      />
    </Styling>
  );
};

const Styling = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .error {
    color: red;
  }
  .input {
    background: white;
    height: 40px;
    width: 20rem;
    color: black;
  }
`;

export default InterestForm;
