import React from "react";
import styled from "styled-components";

export default function Tags() {
  return (
    <TagWrap>
      <TagContainer>
        <TagBox>HTML</TagBox>
        <TagBox>CSS</TagBox>
        <TagBox>JavaScript</TagBox>
        <TagBox>TypeScript</TagBox>
        <TagBox>React</TagBox>
      </TagContainer>
      <TagContainer>
        <TagBox>React Router</TagBox>
        <TagBox>Zustand</TagBox>
        <TagBox>React-Query</TagBox>
        <TagBox>Styled Components</TagBox>
      </TagContainer>
      <TagContainer>
        <TagBox>PostCss</TagBox>
        <TagBox>TailwindCss</TagBox>
        <TagBox>Vercel</TagBox>
        <TagBox>AWS</TagBox>
        <TagBox>Postman</TagBox>
      </TagContainer>
      <TagContainer>
        <TagBox>Git</TagBox>
        <TagBox>Github</TagBox>
      </TagContainer>
    </TagWrap>
  );
}

export function HTMLTag() {
  return <Tag>HTML</Tag>;
}
export function CSSTag() {
  return <Tag>CSS</Tag>;
}
export function JavaScriptTag() {
  return <Tag>JavaScript</Tag>;
}
export function TypeScriptTag() {
  return <Tag>TypeScript</Tag>;
}
export function ReactTag() {
  return <Tag>React</Tag>;
}
export function RouterTag() {
  return <Tag>React Router</Tag>;
}
export function ZustandTag() {
  return <Tag>Zustand</Tag>;
}
export function QueryTag() {
  return <Tag>React-Query</Tag>;
}
export function StyledTag() {
  return <Tag>Styled Components</Tag>;
}
export function PostCssTag() {
  return <Tag>PostCss</Tag>;
}
export function TailwindTag() {
  return <Tag>TailwindCss</Tag>;
}
export function VercelTag() {
  return <Tag>Vercel</Tag>;
}
export function AWSTag() {
  return <Tag>AWS</Tag>;
}
export function PostmanTag() {
  return <Tag>Postman</Tag>;
}
export function GitTag() {
  return <Tag>Git</Tag>;
}
export function GithubTag() {
  return <Tag>Github</Tag>;
}

const TagWrap = styled.div`
  width: 100%;
  padding-left: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TagContainer = styled.div`
  margin-bottom: 4rem;
`;

const TagBox = styled.span`
  background-color: var(--color-darkgray);
  box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 1);
  padding: 0.5rem 1.5rem;
  margin-right: 3rem;
  border-radius: 5rem;
  font-size: 1.8rem;
`;

const Tag = styled.span`
  background-color: var(--color-darkgray);
  box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 1);
  padding: 0.5rem 1rem;
  border-radius: 5rem;
  margin-right: 1rem;
`;
