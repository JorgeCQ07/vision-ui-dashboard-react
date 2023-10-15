//hooks
import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

//Firebase crud
import * as firebase from '../../../../services/billing.js'

function Invoices() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    //@TODO: Cambiar el id por el id del usuario logueado
    firebase.getBillingOrderByDate("1", currentDate).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Card id="delete-account" sx={{ height: "90%" }}>
      <VuiBox mb="28px" display="flex" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="h6" fontWeight="medium" color="white">
          Movimientos recientes
        </VuiTypography>
        <VuiButton variant="contained" color="info" size="small"
          onClick={() => {
            firebase.postBilling("Pago", 1000, "10/14/2023", "Ingreso", "1");
            //@TODO: Esto al guardar en el modal
            firebase.getBilling("1").then((data) => {
              setData(data);
            });
          }}
        >
          Nuevo
        </VuiButton>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {data.map((item, index) => (
            index < 3 ?
              item.type === "Ingreso" ?
                <Invoice id={`INC-${index}`} ammount={item.amount} date={item.date}
                  description={item.description}
                  type={item.type}
                /> :
                <Invoice id={`EXP-${index}`} ammount={item.amount} date={item.date}
                  description={item.description}
                  type={item.type}
                /> : null
          ))}
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Invoices;
