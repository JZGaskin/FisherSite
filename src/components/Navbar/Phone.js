import React from "react"
import styled from "styled-components"
import { OldPhone } from "@styled-icons/entypo/OldPhone"

const PhoneIcon = styled(OldPhone)`
  color: var(--clr-gold);
`

export default function Phone() {
  return (
    <div>
      <PhoneIcon />
    </div>
  )
}
