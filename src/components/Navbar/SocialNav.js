import React from "react"
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaEnvelopeSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaPhoneSquare,
} from "react-icons/fa"
import styled from "styled-components"

export const SocialNav = () => {
  return (
    <Social>
      <Phone>
        <FaPhoneSquare />
      </Phone>
      <CallToday>814-254-3970</CallToday>
    </Social>
  )
}

const Social = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  /* line-height: 0; */
  padding-top: 1%;
  font-size: 2rem;
  margin-left: 1rem;

  @media (max-width: 992px) {
    display: none;
  }
`

const Phone = styled.a`
  color: #cfb53b;
  transition: var(--transition);
  /* cursor: pointer; */
  margin-right: 1rem;
  padding-top: 5%;

  /* &:hover {
    transform: translateY(-10%);
  } */
`
const CallToday = styled.p`
  color: #cfb53b;
  padding-top: 3%;
`
