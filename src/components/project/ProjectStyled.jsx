import styled from "styled-components";
import { FONT_STYLE } from "../../style/fontStyle";
import { BREAKPOINTTABLET } from "../../breakpoint";

export const Wrap = styled.div`
  width: 100%;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1220px;
  height: max-content;
  margin-top: 5rem;
  padding-bottom: 3rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Bar = styled.div`
  width: 7rem;
  height: 0.5rem;
  background-color: var(--color-main);
`;

export const Title = styled.div`
  ${FONT_STYLE.title.title_40_bold}
  color: var(--color-main);
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Comment = styled.div`
  ${FONT_STYLE.text.text_12_medium}
  color: var(--color-darkgray);
  margin-bottom: 4rem;
`;

export const MainImg = styled.img`
  width: 100%;
`;

export const Section = styled.div`
  margin-top: 3rem;
  display: flex;
  line-height: 2;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftBox = styled.div`
  width: 30%;
  padding: 1rem;
  /* margin-right: 3rem; */
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    width: max-content;
    flex-direction: row;
  }
`;

export const RightBox = styled.div`
  width: 70%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ImgBox = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 400px;
  margin-right: 1rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-bottom: 1rem;
  }
`;

export const SmallImg = styled.img`
  width: 270px;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

export const MobileImg = styled.img`
  width: 150px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-bottom: 1rem;
  }
`;

export const MobileBox = styled.div`
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    margin-right: 5rem;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  @media screen and (max-width: ${BREAKPOINTTABLET}px) {
    /* margin-right: 2rem; */
  }
`;

export const SubTilte = styled.div`
  ${FONT_STYLE.title.title_16_bold}
  margin-top: -0.5rem;
`;

export const ContentsTitle = styled.div`
  ${FONT_STYLE.text.text_11_bold}
  color: var(--color-gray);
  margin-bottom: 0.5rem;
`;

export const ContentsText = styled.div`
  ${FONT_STYLE.text.text_11_bold}
  display: flex;
  align-items: center;
  .arrow {
    margin-left: 0.5rem;
  }
`;

export const Text = styled.div`
  ${FONT_STYLE.text.text_11_medium}
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const MyWork = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  background-color: var(--color-lightgray);
  color: black;
  padding: 1rem 2rem;
  border-radius: 1rem;
  margin-top: 1rem;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const ListText = styled.li`
  ${FONT_STYLE.text.text_11_medium}
  list-style-type: disc;
`;
