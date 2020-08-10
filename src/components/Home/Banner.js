import React from "react"
import Background from "./Background"
import styled from "styled-components"

const HomeBanner = () => {
  return (
    <Background>
      <Content>
        <Slogan>
          <SloganList>plan smart,</SloganList>
          <SloganList> be steady,</SloganList>
          <SloganList>Rest Easy.</SloganList>
          <br />

          <CardList>
            <strong> Wealth Management & Retirement Planning </strong>
          </CardList>
        </Slogan>
      </Content>
    </Background>
  )
}

export default HomeBanner

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  justify-content: space-around;
  letter-spacing: 0.7rem;

  padding: 2rem;
  margin: 0 auto;
  max-width: 60rem;
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
const CardList = styled.li`
  margin-top: 2rem;
  font-family: var(--ff-slogan);
  font-size: 2rem;
  list-style-type: none;
  border: 3px solid var(--clr-oldgold);
  background-color: var(--clr-oldgold);
  border-radius: 5px;
  color: var(--clr-gray);
  padding: 10px;

  @media (max-width: 992px) {
    font-size: 1.3rem;
    padding: 1.3rem;
    line-height: 25px;
    text-align: center;
  }
`
