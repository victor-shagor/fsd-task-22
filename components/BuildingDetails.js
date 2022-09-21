import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import FloorTable from "./FloorTable";
import InterestForm from "./InterestForm";

const BuildingDetails = ({
  building,
  onClickFormSubmit,
  onChangeFormValue,
  error,
}) => {
  const totalAvailableSpace = building?.floors.reduce(
    (acc, el) => el.availableSpace + acc,
    0
  );

  return (
    <Styling>
      <div className="container">
        <img src={`/media/${building?.imageSrc}`} width="100%" height="30%" />
        <div className="details-card">
          <p className="name">{building?.name}</p>
          <div className="info-container">
            <hr />
            <div className="card-info">
              <p>Type:</p>
              <p>{building?.type}</p>
            </div>
            <hr />
            <div className="card-info">
              <p>Status:</p>
              <p>{building?.status}</p>
            </div>
            <hr />
            <div className="card-info">
              <p>Gross Area</p>
              <p>{building?.grossArea}</p>
            </div>
            <hr />
            <div className="card-info">
              <p>Current total available space</p>
              <p>{totalAvailableSpace}</p>
            </div>
            <hr />
            <div className="card-info">
              <p>{building?.description}</p>
            </div>
            <hr />
          </div>
        </div>
        <FloorTable floor={building?.floors} />
        <InterestForm
          onClick={onClickFormSubmit}
          onChangeFormValue={(e) => onChangeFormValue(e)}
          error={error}
        />
      </div>
    </Styling>
  );
};

export default BuildingDetails;

const Styling = styled.div`
  width: 100vw;
  background: black;
  color: white;
  .container {
    width: 70vw;
    height: 100%;
    margin: 0 4rem 0 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name {
    font-size: 30px;
  }
  .details-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    color: white;
  }
  .info-container {
    width: 100%;
  }
  .card-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 15px 0 15px;
  }
`;
