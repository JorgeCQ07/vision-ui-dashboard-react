/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useEffect, useState } from "react";
import { Card, Stack, Grid } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import GreenLightning from "assets/images/shapes/green-lightning.svg";
import WhiteLightning from "assets/images/shapes/white-lightning.svg";
import linearGradient from "assets/theme/functions/linearGradient";
import colors from "assets/theme/base/colors";
import carProfile from "assets/images/shapes/car-profile.svg";
import LineChart from "examples/Charts/LineCharts/LineChart";
import { lineChartDataProfile1, lineChartDataProfile2 } from "variables/charts";
import { lineChartOptionsProfile2, lineChartOptionsProfile1 } from "variables/charts";
import CircularProgress from "@mui/material/CircularProgress";
import { BsPencil, BsPlus, BsTrash } from "react-icons/bs";
import VuiButton from "components/VuiButton";
const NoteCard = ({ note, deleteNote, editNote }) => {
  const [seeMode, setSeeMode] = useState(false);
  return (
    <Card
      onClick={() => setSeeMode(!seeMode)}
      mt={2}
      sx={({ breakpoints }) => ({
        [breakpoints.up("xxl")]: {
          maxHeight: "400px",
        },
      })}
      style={{ marginTop: "5px", maxHeight: seeMode ? "" : "200px" }}
    >
      <BsTrash
        onClick={() => deleteNote(note?.id)}
        color="white"
        style={{ position: "absolute", top: "5px", right: "5px", cursor: "pointer", margin: "4px" }}
      >
        X
      </BsTrash>
      <BsPencil
        onClick={() => editNote(note?.id)}
        color="white"
        style={{
          position: "absolute",
          top: "45px",
          right: "5px",
          cursor: "pointer",
          margin: "4px",
        }}
      />
      <VuiBox style={{marginbottom:"10px"}} display="flex" flexDirection="column">
        <VuiTypography variant="h3" color="white" fontWeight="bold" mb="2px">
          {note.title}
        </VuiTypography>
        <br />
        <VuiTypography variant="h6" color="white" fontWeight="regular" mb="6px">
          {note.description}
        </VuiTypography>
      </VuiBox>
    </Card>
  );
};

export default NoteCard;
