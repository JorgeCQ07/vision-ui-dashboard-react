//Hooks
import React, { useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import CreditBalance from "./components/CreditBalance";

//Firebase crud
import * as firebase from '../../services/billing.js'
import { useAuth } from "../../services/auth.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Billing() {

  const [balance, setBalance] = useState(0);
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        firebase.getBalance("1", currentDate).then((data) => {
          setBalance(data);
        });
        firebase.getBillingOrderByDate("1", currentDate).then((data) => {
          setData(data);
        });
        // ...
      } else {
        // User is signed out
        window.location.href = "/authentication/sign-in";
        // ...
      }
    });

  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* Tarjeta de balance y transacciones recientes */}
      <VuiBox mt={4}>
        <VuiBox >
          <Grid item xs={12} lg={7} xl={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={6}>
                <CreditBalance balance={balance} />
              </Grid>
              <Grid item xs={12} md={6} xl={6}>
                <Invoices values={data} />
              </Grid>
            </Grid>
          </Grid>
        </VuiBox>
        {/* Tabla de transacciones */}
        <VuiBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Transactions values={data} />
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
