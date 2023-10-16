import React from "react";

// @mui components
import { Card, Stack } from "@mui/material";

// Vision UI Dashboard assets
import balance from "assets/images/billing-background-balance.png";
import Graph from "assets/images/shapes/graph-billing.svg";

import palette from "assets/theme/base/colors";

// Vision UI Dashboard components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// React icons
import { FaEllipsisH } from "react-icons/fa";
import { MdOutlineDomain } from "react-icons/md";

const CreditBalance = ({ balance }) => {
  return (
    <Card sx={{ padding: "30px" }}>
      <VuiBox display="flex" flexDirection="column">
        <VuiBox
          mb="32px"
          p="20px"
          display="flex"
          flexDirection="column"
          sx={{ backgroundImage: `url(${balance})`, backgroundSize: "cover", borderRadius: "18px" }}
        >
          <VuiBox display="flex" justifyContent="space-beetween" alignItems="center">
            <VuiTypography variant="caption" color="white" fontWeight="medium" mr="auto">
              Credit Balance
            </VuiTypography>
            <FaEllipsisH color="white" size="18px" sx={{ cursor: "pointer" }} />
          </VuiBox>
          <VuiBox display="flex" justifyContent="space-beetween" alignItems="center">
            <VuiTypography variant="h2" color="white" fontWeight="bold" mr="auto">
              {balance < 0 ?
                <span style={{ color: palette.error.main }}>₡{balance}</span>
                : <span style={{ color: palette.success.main }}>₡{balance}</span>
              }
            </VuiTypography>
            <VuiBox component="img" src={Graph} sx={{ width: "58px", height: "20px" }} />
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default CreditBalance;
