import React from "react"
import Background from "./Background"
import styled from "styled-components"
import Card from "./Card"

const HomeBanner = () => {
  return (
    <Background>
      <Content>
        <Slogan>
          <SloganList>plan smart,</SloganList>
          <SloganList> be steady,</SloganList>
          <SloganList>Rest Easy.</SloganList>
          <Card />
        </Slogan>
      </Content>
    </Background>
  )
}

export default HomeBanner

const Content = styled.div`
  text-align: left;
  justify-content: space-around;
  letter-spacing: 0.7rem;
  /* line-height: 5px; */
`
const Slogan = styled.h1`
  /* text-transform: capitalize; */
  color: var(--clr-white);
  letter-spacing: 4px;
  margin: auto;

  @media (max-width: 992px) {
    width: 175px;
    height: auto;
    margin: auto;
    padding-top: 10%;
  }
`
const SloganList = styled.li`
  margin-top: 2rem;
  font-family: var(--ff-slogan);
  font-size: 5rem;
  list-style-type: none;

  @media (max-width: 992px) {
    font-size: 2rem;
  }
`
