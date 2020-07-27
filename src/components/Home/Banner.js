import React from "react"
import Background from "./Background"
import styled from "styled-components"

const HomeBanner = () => {
  return (
    <Background>
      <Content>
        <Slogan>
          <SloganList>Your Personal Professional</SloganList>
          <SloganList>Financial Advisor</SloganList>
          {/* <SloganList>Portfolio</SloganList> */}
        </Slogan>
      </Content>
    </Background>
  )
}

export default HomeBanner

const Content = styled.div`
  text-align: center;
  justify-content: center;
  letter-spacing: 0.7rem;
  line-height: 1.25px;
`
const Slogan = styled.h1`
  text-transform: capitalize;
  color: #fff;
  font-family: var(--ff-slogan);
  letter-spacing: 4px;
  margin: auto;
`
const SloganList = styled.ul`
  margin-top: 1rem;
`
