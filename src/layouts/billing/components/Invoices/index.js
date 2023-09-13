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

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card id="delete-account" sx={{ height: "90%" }}>
      <VuiBox mb="28px" display="flex" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="h6" fontWeight="medium" color="white">
          Movimientos recientes
        </VuiTypography>
        <VuiButton variant="contained" color="info" size="small">
          Nuevo
        </VuiButton>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice id="INC-001" ammount="$ 100.00" date="12/12/2021"
            description="Beca"
            type="Ingreso"
          />
          <Invoice id="EXP-001" ammount="$ 100.00" date="12/12/2021"
            description="Transporte"
            type="Gasto"
          />
          <Invoice id="INC-002" ammount="$ 100.00" date="12/12/2021"
            description="Beca"
            type="Ingreso"
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Invoices;
