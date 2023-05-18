import styled from "styled-components";

export const Wrap = styled.div`
  margin: 3rem;
`;
export const Container = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
export const ContentBox = styled.div`
  width: 100%;
  /* background-color: aquamarine; */
  display: flex;
`;
export const Img = styled.img`
  width: 50%;
  margin-bottom: 0.5rem;
  border: 1px solid #242323;
`;

export const TextBox = styled.span`
  width: 50%;
  padding: 1rem;
  font-size: 1.2rem;
  line-height: 1.8;
`;
export const BulletedText = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;
export const Bulleted = styled.div`
  margin-right: 0.5rem;
  margin-top: 0.1rem;
`;
export const Text = styled.span``;
export const BordText = styled.span`
  font-weight: bold;
`;

export const LinkBox = styled.div`
  width: 100%;
  display: flex;
`;
export const Link = styled.span`
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 2rem;
  background-color: #353535;
  color: #fff;
  padding: 0.5rem;
  .icon {
    margin-right: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const Button = styled.button`
  width: max-content;
  border: none;
  background-color: #fff;
  color: #242323;
  border-bottom: 1px solid #242323;
  font-size: 1.3rem;
  cursor: pointer;
`;
