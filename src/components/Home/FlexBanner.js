import React from "react"
import styled from "styled-components"

const Body = styled.body`
  padding: 2rem;
  margin: 0 auto;
  max-width: 60rem;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  --margin: 3rem;
  --modifier: calc(40rem - 100%);
  margin: calc(var(--margin) * -1);

  > * {
    background-color: #000;
    min-width: calc(33% - (var(--margin) * 2));
    max-width: 100%;
    flex-grow: 1;
    flex-basis: calc(var(--modifier) * 999);
    height: 10vh;
    margin: var(--margin);
  }
`

const FlexBanner = () => {
  return (
    <Body>
      <Container>
        <div></div>
        <div></div>
        <div></div>
      </Container>
    </Body>
  )
}

export default FlexBanner
