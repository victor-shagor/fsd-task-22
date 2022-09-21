import React from "react";
import styled from "styled-components";

const FloorTable = ({ floor }) => {
  return (
    <Styling>
      <div className="info-container">
        <div className="card-infos">
          <p>FLOOR</p>
          <p>AVAILABLE SPACES</p>
          <p>OCCUPIER(S)</p>
        </div>
        <hr />
        {floor &&
          floor.map((el, idx) => (
            <div key={idx}>
              <div className="card-infos">
                <p>{el.label}</p>
                <p>{el.availableSpace}</p>
                <p>{el.occupier}</p>
              </div>
              <hr />
            </div>
          ))}
      </div>
    </Styling>
  );
};
export default FloorTable;

const Styling = styled.div`
  width: 95%;
  .info-container {
    width: 100%;
  }
  .card-infos {
    width: 100;
    display: flex;
    padding: 0 15px 0 15px;
    p {
      width: 15rem;
      margin-right: 3rem;
    }
  }
`;
