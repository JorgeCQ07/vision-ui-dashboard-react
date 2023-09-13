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

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { IoDocumentText } from "react-icons/io5";

function Invoice({ id, type, ammount, description, date, noGutter }) {
  return (
    <VuiBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb="32px"
    >
      <VuiBox lineHeight={1}>
        <VuiTypography display="block" variant="button" fontWeight="medium" color="white">
          {type === "Ingreso" ? (
            <VuiTypography variant="button" color="success">
              {id}
            </VuiTypography>
          ) : (
            <VuiTypography variant="button" color="error">
              {id}
            </VuiTypography>
          )}
        </VuiTypography>
        <VuiTypography variant="caption" fontWeight="regular" color="text">
          {description}
        </VuiTypography>
        &nbsp;&nbsp;
        <VuiTypography variant="caption" fontWeight="regular" color="text">
          {type === "Ingreso" ? (
            <VuiTypography variant="caption" fontWeight="regular" color="success">
              +{ammount}
            </VuiTypography>
          ) : (
            <VuiTypography variant="caption" fontWeight="regular" color="error">
              -{ammount}
            </VuiTypography>
          )}
        </VuiTypography>
        &nbsp;&nbsp;
        <VuiTypography variant="caption" fontWeight="regular" color="text">
          {date}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

// Setting default values for the props of Invoice
Invoice.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Invoice
Invoice.propTypes = {

};

export default Invoice;
