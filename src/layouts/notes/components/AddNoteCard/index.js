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

import React, { useState } from "react";
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
import { BsPlus } from "react-icons/bs";
import VuiButton from "components/VuiButton";
import VuiInput from "components/VuiInput";

const cardStyle = {
  position: "fixed",
  top: "25%",
  left: "25%",
  width: "50%",
  height: "50%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "4",
  borderColor: "white",
  color: "white",
};

const AddNoteCard = ({onSave, onCancel, onEdit, note}) => {
  const { gradients, info } = colors;
  const { cardContent } = gradients;
  const [noteTitle, setNoteTitle] = useState(note?note.title:"")
  const [noteDescription, setNoteDescription] = useState(note?note.description:"")
  const [inputErrors, setInputErrors] = useState([false,false])

  function checkInputs(){
    const newErrors=[...inputErrors]
    if (noteTitle==""){
      newErrors[0]=!newErrors[0]
      setInputErrors(newErrors)
      return true
    }
    if (noteDescription==""){
      newErrors[1]=!newErrors[1]
      setInputErrors(newErrors)
      return true
    }
    return false
  }

  function handleOnSave(){
    if (checkInputs()){
      return
    }
    onSave({title:noteTitle, description:noteDescription})

  }

  function handleOnEdit(){
    if (checkInputs()){
      return
    }
    onEdit(note.id,{title:noteTitle, description:noteDescription})

  }

  return (
    <Card style={cardStyle}>
      <VuiTypography variant="lg" color="text" fontWeight="regular">
        Here you can add your notes
      </VuiTypography>

      <VuiInput error={noteTitle=="" || inputErrors[0]}  value={noteTitle} onChange={(e)=>setNoteTitle(e.target.value)} style={{ margin: "10px" }} placeholder="Type here Note's title" />

      <VuiInput error={noteDescription=="" || inputErrors[1]} value={noteDescription} onChange={(e)=>setNoteDescription(e.target.value)} multiline rows={5} placeholder="Type here..." />

      <VuiBox margin="10px" display="flex">
        <VuiButton onClick={onCancel} style={{margin:"10px"}} color="error">Cancel</VuiButton>
        <VuiButton onClick={()=>note? handleOnEdit():handleOnSave()} style={{margin:"10px"}}  color="success">Save</VuiButton>
      </VuiBox>
    </Card>
  );
};

export default AddNoteCard;
