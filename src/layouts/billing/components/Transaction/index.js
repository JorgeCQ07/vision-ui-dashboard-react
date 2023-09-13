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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

function Transaction({ id, type, ammount, description, date }) {
  return (
    <VuiBox key={id} component="tr" py={1} pr={2} mb={1}>
      <VuiBox mr={2} component={"td"}>
        <VuiButton
          variant="outlined"
          color={type === "Ingreso" ? "success" : "error"}
          iconOnly
          circular
        >
          <Icon sx={{ fontWeight: "bold" }}>
            {type === "Ingreso" ? "arrow_upward" : "arrow_downward"}
          </Icon>
        </VuiButton>
      </VuiBox>
      <VuiBox component="td">
        <VuiTypography variant="button" fontWeight="regular" color="text">
          {id}
        </VuiTypography>
      </VuiBox>
      <VuiBox component="td">
        <VuiTypography variant="button" fontWeight="regular" color="text">
          {ammount}
        </VuiTypography>
      </VuiBox>
      <VuiBox component="td">
        <VuiTypography variant="button" fontWeight="regular" color="text">
          {description}
        </VuiTypography>
      </VuiBox>
      <VuiBox component="td">
        <VuiTypography variant="button" fontWeight="regular" color="text">
          {date}
        </VuiTypography>
      </VuiBox>
      <VuiBox component="td">
        <VuiTypography variant="button" fontWeight="regular" color="text">
          <Icon sx={{ fontWeight: "bold" }}>
            edit
          </Icon>
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

// Typechecking props of the Transaction
Transaction.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ammount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Transaction;
