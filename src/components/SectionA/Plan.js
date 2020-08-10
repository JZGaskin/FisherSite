import React from "react"
import styled from "styled-components"
// import { FaHandshake, FaFileContract, FaSmileBeam } from "react-icons/fa"
// import FlexBanner from "../Home/FlexBanner"

const Section = styled.section`
  padding: 3rem;
`
const Container = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
`
const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
`
const Subtitle = styled.h4`
  text-align: center;
  text-transform: capitalize;
`

export default function Plan() {
  return (
    <Section>
      <Container>
        <Title>Experienced Financial Advisor</Title>
        <Subtitle>
          <strong>Wealth Management</strong> in
          <strong> 3 easy steps</strong>
        </Subtitle>
        {/* <br />
        <br />
        <div className="row">
          <div className="col-sm-4 text-center">
            <FaHandshake className="plan-icon text-center" />
            <br />
            <br />
            <h6 className="plan-label text-center text-strong">
              Consult with an expert
            </h6>
            <p>
              We'll evaluate your brand, discuss your needs and agree on next
              steps.
            </p>
          </div>
          <div className="col-sm-4 text-center">
            <FaFileContract className="plan-icon text-center" />
            <br />
            <br />
            <h6 className="plan-label text-center">Get a Customized Plan</h6>
            <p>
              We'll work with your goals to design the perfect representation
              for your business.
            </p>
          </div>
          <div className="col-sm-4 text-center">
            <FaSmileBeam className="plan-icon text-center" />
            <br />
            <br />
            <h6 className="plan-label text-center">Look Great to the World</h6>
            <p>Sit back and relax knowing your business looks great online.</p>
          </div>
        </div> */}
        {/* <FlexBanner /> */}
      </Container>
    </Section>
  )
}
