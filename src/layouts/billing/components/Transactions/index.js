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

// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// @mui material components
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="18px"
        sx={({ breakpoints }) => ({
          [breakpoints.down("lg")]: {
            flexDirection: "column",
          },
        })}
      >
        <VuiTypography
          variant="lg"
          fontWeight="bold"
          textTransform="capitalize"
          color="white"
          sx={({ breakpoints }) => ({
            [breakpoints.only("sm")]: {
              mb: "6px",
            },
          })}
        >
          Lista de Movimientos
        </VuiTypography>
        <VuiBox display="flex" alignItems="flex-start">
          <VuiBox color="white" mr="6px" lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </VuiBox>
          <VuiTypography variant="button" color="text" fontWeight="regular">
            1 - 30 Marzo 2023
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox>
        <TableContainer>
          <MuiTable>
            <VuiBox component="thead">
              <TableRow>
                <VuiBox
                  key={"type"}
                  component="th"
                  width={"auto"}
                  textAlign={"left"}
                  fontSize={8}
                  color="white">
                </VuiBox>
                <VuiBox
                  key={"id"}
                  component="th"
                  width={"auto"}
                  textAlign={"left"}
                  fontSize={15}
                  color="white">
                  ID
                </VuiBox>
                <VuiBox
                  key={"ammount"}
                  component="th"
                  width={"auto"}
                  textAlign={"left"}
                  fontSize={15}
                  color="white">
                  Monto
                </VuiBox>
                <VuiBox
                  key={"description"}
                  component="th"
                  width={"auto"}
                  textAlign={"left"}
                  fontSize={15}
                  color="white">
                  Descripción
                </VuiBox>
                <VuiBox
                  key={"date"}
                  component="th"
                  width={"auto"}
                  textAlign={"left"}
                  fontSize={15}
                  color="white">
                  Fecha
                </VuiBox>
                <VuiBox
                  key={"actions"}
                  component="th"
                  width={"auto"}
                  textAlign={"left"}
                  fontSize={15}
                  color="white">
                  Accion
                </VuiBox>
              </TableRow>
            </VuiBox>
            <TableBody>
              {/* Aqui agregar funcion para cargar movimientos desde BE */}
              <Transaction
                id="INC-001"
                type="Ingreso"
                ammount="$ 100.00"
                description="Beca"
                date="12/12/2021"
              />
              <Transaction
                id="EXP-001"
                type="Gasto"
                ammount="$ 100.00"
                description="Transporte"
                date="12/12/2021"
              />
              <Transaction
                id="INC-002"
                type="Ingreso"
                ammount="$ 100.00"
                description="Beca"
                date="12/12/2021"
              />
            </TableBody>
          </MuiTable>
        </TableContainer>
      </VuiBox>
    </Card>
  );
}

export default Transactions;
