import React from "react"
import styled, { css } from "styled-components"

export function Content({ data, html }) {
  const centered = data.center ? data.center : false
  return (
    <>
      <StyledContent
        center={centered}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></StyledContent>
      {data && data.underline && <Hr center={centered} />}
    </>
  )
}

const StyledContent = styled.div`
  ${props =>
    props.center &&
    css`
      text-align: center;
    `};
`

const Hr = styled.hr`
  margin: 2.2rem 0;

  ${props =>
    props.center &&
    css`
      margin-left: auto;
      margin-right: auto;
    `};
`

export const ContentBlock = {
  label: "Content",
  name: "content",
  key: "test",
  defaultItem: {
    content: "",
    center: false,
    underline: true,
  },
  fields: [
    { name: "content", label: "Content", component: "markdown" },
    { name: "center", label: "Center", component: "toggle" },
    { name: "underline", label: "Underline", component: "toggle" },
  ],
}
