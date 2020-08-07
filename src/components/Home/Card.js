import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  --margin: 2rem;
  --modifier: calc(40rem - 100%);
  margin: calc(var(--margin) * -1);
  border: 3px solid var(--clr-oldgold);
  background-color: var(--clr-oldgold);
  border-radius: 5px;
  font-size: 16px;
  color: var(--clr-gray);

  > * {
    min-width: calc(33% - (var(--margin) * 2));
    max-width: 100%;
    flex-grow: 1;
    flex-basis: calc(var(--modifier) * 999);
    height: 10vh;
    margin: var(--margin);
  }

  /* @media (max-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    margin: auto;
    padding: 2px;
    font-size: 100%;
    margin-top: 1rem;
  } */
`

const Content = styled.div`
  align-self: center;
  font-size: 1em;
`
const Card = () => {
  return (
    <Container>
      <Content>Wealth Management & Retirement Planning</Content>
    </Container>
  )
}

export default Card
