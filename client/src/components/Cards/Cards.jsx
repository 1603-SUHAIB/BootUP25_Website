import React from "react";
import styled from "styled-components";

const Cards = ({ data }) => {
  return (
    <StyledWrapper>
      <div className="cards">
        {data.map((item) => (
          <div key={item.id} className="card">
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .card {
    position: relative;
    width: 190px;
    height: 254px;
    background: linear-gradient(137deg, rgb(255, 0, 179) 0%, rgba(0,212,255,1) 100%);
    transition: 0.3s ease;
    border-radius: 30px;
    filter: drop-shadow(0px 0px 30px rgba(209, 38, 197, 0.5));
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 15px;
    overflow: hidden; /* Ensure content fits inside */
  }

  /* Fix: Reduce opacity so text is visible */
  .card::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.6); /* Adjust transparency */
    position: absolute;
    z-index: 1;
    transition: 0.3s ease;
    height: 98%;
    width: 98%;
    top: 1%;
    left: 1%;
    border-radius: 28px;
  }

  .card-content {
    position: relative;
    z-index: 2;
    color: white;
  }

  .card:hover {
    filter: drop-shadow(0px 0px 30px rgba(209, 38, 197, 1));
  }

  h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
  }
`;

export default Cards;
