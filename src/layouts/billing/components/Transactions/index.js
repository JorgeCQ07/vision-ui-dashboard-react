//hooks
import { useState, useEffect } from "react";

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

function Transactions({ values }) {

  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    setData(values);
  }, [values]);


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
            {
              currentDate
            }
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
              {data.map((item, index) => (
                item.type === "Ingreso" ?
                  <Transaction
                    id={item.id}
                    type={item.type}
                    ammount={item.amount}
                    description={item.description}
                    date={item.date}
                  /> :
                  <Transaction
                    id={item.id}
                    type={item.type}
                    ammount={item.amount}
                    description={item.description}
                    date={item.date}
                  />
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
      </VuiBox>
    </Card>
  );
}

export default Transactions;
