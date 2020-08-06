import React from "react"
import { Grid, Cell } from "styled-css-grid"

const BannerGrid = () => {
  return (
    <Grid
      columns={"400px 400px 400px 400px"}
      rows={"1fr 1fr 1fr"}
      areas={["TL ML MR TR", "LM MLM RLM RM", "BL BML BMR BR"]}
    >
      <Cell area="ML">plan smart</Cell>
      <Cell area="MLM">be steady</Cell>
      <Cell area="BML">rest easy</Cell>
      <Cell area="MR">MR</Cell>
      <Cell area="RLM">RLM</Cell>
      <Cell area="BMR">BMR</Cell>
    </Grid>
  )
}

export default BannerGrid
