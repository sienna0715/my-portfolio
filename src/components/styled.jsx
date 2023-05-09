import styled from "styled-components";

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

export const Wrap = styled.div`
  height: 100%;
  margin: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Container = styled.div`
  width: 650px;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;
export const LeftBox = styled.div`
  width: 100px;
  margin-right: 3rem;
`;
export const RightBox = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  line-height: 2;
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
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
`;
export const SubTitle = styled.div`
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: ${(props) => (props.lineheight ? props.lineheight : "none")};
`;
export const Date = styled.div`
  color: #ccc;
  margin-top: 1rem;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Contents = styled.span`
  margin-bottom: 1rem;
  line-height: 2;
`;
export const Img = styled.img`
  width: 100%;
  margin-top: 1rem;
`;

export const Intro = styled.p`
  margin-bottom: 1rem;
  line-height: 2;
`;
export const BulletedText = styled.li`
  list-style: disc;
`;
export const Text = styled.span`
  height: 33px;
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => (props.margin ? props.margin : "0")};
  .icon {
    margin-right: 0.5rem;
    font-size: 0.9rem;
  }
`;
export const Gray = styled.span`
  color: #ccc;
  margin-left: 1rem;
`;
export const Box = styled.div``;
