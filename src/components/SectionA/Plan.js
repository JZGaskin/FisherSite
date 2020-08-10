import React from "react"
import styled from "styled-components"
import { Handshake } from "@styled-icons/fa-solid/Handshake"
import { FileContract } from "@styled-icons/fa-solid/FileContract"
import { CheckmarkDoneCircle } from "@styled-icons/ionicons-sharp/CheckmarkDoneCircle"

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
const Subtitle = styled.h3`
  text-align: center;
  text-transform: capitalize;
`
const Icon1 = styled(Handshake)`
  color: var(--clr-green);
  height: 25%;
  width: 25%;
`
const Icon2 = styled(FileContract)`
  color: var(--clr-green);
  height: 25%;
  width: 25%;
`
const Icon3 = styled(CheckmarkDoneCircle)`
  color: var(--clr-green);
  height: 25%;
  width: 25%;
`

export default function Plan() {
  return (
    <Section>
      <Container>
        <Title>Experienced Financial Advisor</Title>
        <Subtitle>Wealth Management in 3 easy steps</Subtitle>

        <br />
        <br />
        <div className="row">
          <div className="col-sm-4 text-center">
            <Icon1 className="plan-icon text-center" />
            <br />
            <br />
            <h6 className="plan-label text-center text-strong">
              Consult with an Expert
            </h6>
            <p>
              We'll evaluate your brand, discuss your needs and agree on next
              steps.
            </p>
          </div>
          <div className="col-sm-4 text-center">
            <Icon2 className="plan-icon text-center" />
            <br />
            <br />
            <h6 className="plan-label text-center">Get a Customized Plan</h6>
            <p>
              We'll work with your goals to design the perfect representation
              for your business.
            </p>
          </div>
          <div className="col-sm-4 text-center">
            <Icon3 className="plan-icon text-center" />
            <br />
            <br />
            <h6 className="plan-label text-center">Look Great to the World</h6>
            <p>Sit back and relax knowing your business looks great online.</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
