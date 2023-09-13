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
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";

// Images
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";
import avatar5 from "assets/images/avatar5.png";
import avatar6 from "assets/images/avatar6.png";

function Author({ image, name, email }) {
  return (
    <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <VuiBox mr={2}>
        <VuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </VuiBox>
      <VuiBox display="flex" flexDirection="column">
        <VuiTypography variant="button" color="white" fontWeight="medium">
          {name}
        </VuiTypography>
        <VuiTypography variant="caption" color="text">
          {email}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

function Function({ job, org }) {
  return (
    <VuiBox display="flex" flexDirection="column">
      <VuiTypography variant="caption" fontWeight="medium" color="white">
        {job}
      </VuiTypography>
      <VuiTypography variant="caption" color="text">
        {org}
      </VuiTypography>
    </VuiBox>
  );
}

export default {
  columns: [
    { name: "Titulo", align: "left" },
    { name: "Descripcion", align: "left" },
    { name: "FechaCreacion", align: "center" },
    { name: "Prioridad", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    // {
    //   author: <Author image={avatar4} name="Esthera Jackson" email="esthera@simmmple.com" />,
    //   function: <Function job="Manager" org="Organization" />,
    //   status: (
    //     <VuiBadge
    //       variant="standard"
    //       badgeContent="Online"
    //       color="success"
    //       size="xs"
    //       container
    //       sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
    //         background: success.main,
    //         border: `${borderWidth[1]} solid ${success.main}`,
    //         borderRadius: borderRadius.md,
    //         color: white.main,
    //       })}
    //     />
    //   ),
    //   employed: (
    //     <VuiTypography variant="caption" color="white" fontWeight="medium">
    //       23/04/18
    //     </VuiTypography>
    //   ),
    //   action: (
    //     <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //       Edit
    //     </VuiTypography>
    //   ),
    // },
    {
      Titulo: "Nota 1",
      Descripcion: "Descripcion 1",
      FechaCreacion: "23/04/18",
      Prioridad:
        <VuiBadge
          variant="standard"
          badgeContent="Alta"
          color="error"
          size="xs"
          container
          sx={({ palette: { white, error }, borders: { borderRadius, borderWidth } }) => ({
            background: error.main,
            border: `${borderWidth[1]} solid ${error.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ,
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
    {
      Titulo: "Nota 2",
      Descripcion: "Descripcion 2",
      FechaCreacion: "23/04/18",
      Prioridad:
        <VuiBadge
          variant="standard"
          badgeContent="Media"
          color="warning"
          size="xs"
          container
          sx={({ palette: { white, warning }, borders: { borderRadius, borderWidth } }) => ({
            background: warning.main,
            border: `${borderWidth[1]} solid ${warning.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ,
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
    {
      Titulo: "Nota 3",
      Descripcion: "Descripcion 3",
      FechaCreacion: "23/04/18",
      Prioridad:
        <VuiBadge
          variant="standard"
          badgeContent="Baja"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ,
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },


  ],
};
