import React from "react";
import styled from "styled-components";
import buildingData from "../buildings.json";
import Card from "./Card";

const BuildingCards = () => {
  return (
    <Styling>
      {buildingData.map((building) => (
        <Card key={building.id} details={building} />
      ))}
    </Styling>
  );
};

export default BuildingCards;

const Styling = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
