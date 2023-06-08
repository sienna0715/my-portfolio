import styled from "styled-components";
import { FONT_STYLE } from "../../style/fontStyle";

export const Wrap = styled.div`
  width: 100%;
  background-color: var(--color-main);
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1220px;
  height: 1800px;
  margin-top: 5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Bar = styled.div`
  width: 10rem;
  height: 0.5rem;
  background-color: var(--color-white);
`;

export const Title = styled.div`
  ${FONT_STYLE.title.title_40_extraBold}
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Comment = styled.div`
  ${FONT_STYLE.text.text_12_medium}
  color: var(--color-gray);
  margin-bottom: 4rem;
`;

export const MainImg = styled.img`
  width: 100%;
`;

export const Section = styled.div`
  margin-top: 3rem;
  display: flex;
  line-height: 2;
`;

export const LeftBox = styled.div`
  width: 30%;
  padding: 1rem;
  /* margin-right: 3rem; */
  display: flex;
  flex-direction: column;
`;

export const RightBox = styled.div`
  width: 70%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const SubTilte = styled.div`
  ${FONT_STYLE.title.title_16_extraBold}
  margin-top: -0.5rem;
`;

export const SubText = styled.div`
  color: var(--color-gray);
  margin-bottom: 0.5rem;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  .arrow {
    margin-left: 0.5rem;
  }
`;
