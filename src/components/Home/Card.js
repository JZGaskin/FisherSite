import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  width: 700px;
  height: 100px;
  border: 3px solid var(--clr-oldgold);
  background-color: var(--clr-oldgold);
  border-radius: 5px;
  justify-content: space-around;
  font-size: 24px;
  color: var(--clr-gray);
  margin-top: 2rem;

  @media (max-width: 992px) {
    width: 100%;
    height: auto;
    margin: auto;
    padding: 2px;
    font-size: 100%;
    margin-top: 1rem;
  }
`

const Content = styled.div`
  align-self: center;
`
const Card = () => {
  return (
    <Container>
      <Content>Wealth Management & Retirement Planning</Content>
    </Container>
  )
}

export default Card
