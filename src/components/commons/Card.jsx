import React from "react";
import styled from "styled-components";

function Card({ tagname, tagname2 }) {
  return (
    <CardContainer>
      <TagBox>
        <Tag>{tagname}</Tag>
        <Tag>{tagname2}</Tag>
      </TagBox>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  background-color: var(--color-card);
  width: 500px;
  height: 600px;
  border-radius: 2rem;
  transition: 0.5s;
  &:nth-child(1) {
    margin-bottom: 5rem;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const TagBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Tag = styled.span`
  background-color: var(--color-tag);
  padding: 0.5rem 1rem;
  border-radius: 0.7rem;
  margin-right: 0.8rem;
`;
