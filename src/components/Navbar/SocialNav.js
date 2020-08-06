import React from "react"
import styled from "styled-components"
import { OldPhone } from "@styled-icons/entypo/OldPhone"

export const SocialNav = () => {
  return (
    <Social>
      <Phone>
        <PhoneIcon size="25" />
        {/* <FaPhoneSquare /> */}
      </Phone>

      <CallToday>814-254-3970</CallToday>
    </Social>
  )
}

const Social = styled.div`
  display: flex;
  padding-top: 1%;
  font-size: 2rem;
  margin-left: 1rem;

  @media (max-width: 992px) {
    display: none;
  }
`

const Phone = styled.ul`
  color: var(--clr-gold);
  transition: var(--transition);
  margin-right: 1rem;
  padding-top: 2%;

  &:hover {
    transform: translateY(-10%);
  }
`
const CallToday = styled.p`
  color: var(--clr-gold);
  padding-top: 3%;
`

const PhoneIcon = styled(OldPhone)`
  color: var(--clr-gold);
`
