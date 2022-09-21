import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useRouter } from "next/router";

const Card = ({ details }) => {
  const router = useRouter();
  return (
    <Styling>
      <img src={`/media/${details.imageSrc}`} width="100%" />
      <div className="details-card">
        <p className="name">{details.name}</p>
        <div className="info-container">
          <div className="card-info">
            <p>Type:</p>
            <p>{details.type}</p>
          </div>
          <div className="card-info">
            <p>Status:</p>
            <p>{details.status}</p>
          </div>
          <div className="card-info">
            <p>Gross Area</p>
            <p>{details.grossArea}</p>
          </div>
        </div>
        <Button
          text={"VIEW DETAILS"}
          onClick={() => router.push(`/${details.id}`)}
          bgColor="black"
        />
      </div>
    </Styling>
  );
};
export default Card;

const Styling = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 15px 30px 15px 30px;
  color: black;
  border-radius: 20px;
  border: none;
  width: 30rem;
  .details-card {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    z-index: 2;
    margin-top: -30px;
  }
  .info-container {
    width: 100%;
  }
  .card-info {
    width: 100;
    display: flex;
    justify-content: space-between;
    padding: 0 15px 0 15px;
  }
`;
