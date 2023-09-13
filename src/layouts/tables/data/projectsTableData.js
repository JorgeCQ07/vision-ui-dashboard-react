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

/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";

function Completion({ value, color }) {
  return (
    <VuiBox display="flex" flexDirection="column" alignItems="flex-start">
      <VuiTypography variant="button" color="white" fontWeight="medium" mb="4px">
        {value}%&nbsp;
      </VuiTypography>
      <VuiBox width="8rem">
        <VuiProgress value={value} color={color} sx={{ background: "#2D2E5F" }} label={false} />
      </VuiBox>
    </VuiBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

export default {
  columns: [
    { name: "Titulo", align: "left" },
    { name: "Descripcion", align: "left" },
    { name: "Fecha", align: "left" },
    { name: "Materia", align: "left" },
    { name: "Estado", align: "left" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      Titulo: (
        <VuiBox display="flex" alignItems="center">
          <AdobeXD size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Chakra Vision UI Version
          </VuiTypography>
        </VuiBox>
      ),
      Descripcion: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Crear una funcion para ...
        </VuiTypography>
      ),
      Fecha: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          12/12/2023
        </VuiTypography>
      ),
      Materia: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Globales
        </VuiTypography>
      ),
      Estado: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Working
        </VuiTypography>
      ),
      action,
    },
    {
      Titulo: (
        <VuiBox display="flex" alignItems="center">
          <Atlassian size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Add Progress Track
          </VuiTypography>
        </VuiBox>
      ),
      Descripcion: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Crear una función para ...
        </VuiTypography>
      ),
      Fecha: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          12/12/2023
        </VuiTypography>
      ),
      Materia: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Globales
        </VuiTypography>
      ),
      Estado: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Done
        </VuiTypography>
      ),
      action,
    },
    {
      Titulo: (
        <VuiBox display="flex" alignItems="center">
          <Slack size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Fix Platform Errors
          </VuiTypography>
        </VuiBox>
      ),
      Descripcion: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Definir la estructura...
        </VuiTypography>
      ),
      Fecha: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          12/12/2023
        </VuiTypography>
      ),
      Materia: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Bases de datos
        </VuiTypography>
      ),
      Estado: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Canceled
        </VuiTypography>
      ),
      action,
    },
    {
      Titulo: (
        <VuiBox display="flex" alignItems="center">
          <Spotify size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Launch our Mobile App
          </VuiTypography>
        </VuiBox>
      ),
      Descripcion: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Arreglar metodo de...
        </VuiTypography>
      ),
      Fecha: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          12/12/2023
        </VuiTypography>
      ),
      Materia: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Informatica
        </VuiTypography>
      ),
      Estado: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Canceled
        </VuiTypography>
      ),
      action,
    },
    {
      Titulo: (
        <VuiBox display="flex" alignItems="center">
          <Jira size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Add the New Pricing Page
          </VuiTypography>
        </VuiBox>
      ),
      Descripcion: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Crear una funcion para ...
        </VuiTypography>
      ),
      Fecha: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          12/12/2023
        </VuiTypography>
      ),
      Materia: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Programacion
        </VuiTypography>
      ),
      Estado: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Done
        </VuiTypography>
      ),
      completion: <Completion value={100} color="info" />,
      action,
    }

  ],
};
