import styled from "styled-components";

export const Wrap = styled.div`
  margin: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Container = styled.div`
  width: 650px;
`;
export const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;
export const ContentsBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;
export const Tag = styled.span`
  width: max-content;
  max-height: 30px;
  background-color: #ededed;
  color: #5800a5;
  padding: 0 0.5rem;
  border-radius: 5px;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  line-height: 2;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 1rem;
`;

export const Line = styled.div`
  height: 16px;
  border-bottom: 2px solid #000;
  flex-grow: 2;
`;
export const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 1.7rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
`;
export const SubTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
export const Contents = styled.span`
  line-height: 2;
`;

export const Button = styled.button`
  width: 10rem;
  background-color: #242323;
  border: 1px solid #242323;
  color: #fff;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
