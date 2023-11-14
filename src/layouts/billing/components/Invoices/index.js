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
import Modal from "../Modal/index.js";

//Firebase crud
import * as firebase from '../../../../services/billing.js'
import { getAuth } from "firebase/auth";
import { signOut } from "../../../../services/auth.js";

function Invoices({ values, showModal }) {

  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    setData(values);
    setCurrentDate(new Date().toLocaleDateString());
  }, [values]);

  return (
    <Card id="delete-account" sx={{ height: "90%" }}>
      <VuiBox mb="28px" display="flex" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="h6" fontWeight="medium" color="white">
          Movimientos recientes
        </VuiTypography>
        <VuiButton variant="contained" color="info" size="small"
          onClick={() => {
            // AQUI Abrir modal
            showModal(true);

          }}
        >
          Nuevo
        </VuiButton>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {data.slice(-3).map((item, index) => (
            item.type === "Ingreso" ?
              <Invoice id={item.id} ammount={item.amount} date={item.date}
                description={item.description}
                type={item.type}
              /> :
              <Invoice id={item.id} ammount={item.amount} date={item.date}
                description={item.description}
                type={item.type}
              />
          ))}
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Invoices;
