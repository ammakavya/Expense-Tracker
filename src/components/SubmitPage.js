import React from "react";
import { Box, Typography, Grid, Card } from "@mui/material";
import Divider from "@mui/material/Divider";
const SubmitPage = (props) => {
  const {
    firstName,
    lastname,
    email,
    mobileNumber,
    enterYourDetailedAdress,
    Address2,
    city,
    state,
    country,
    pincode,
    deliveryMobileNumber,
    enterYourNearestLandMark,
    booksSet,
    quantity,
    totalBooks,
    totalCost,
    totalsave,
    deliveryCharge,
    Upi,
    netbanking,
  } = props;
  return (
    <Box>
      <Card
        sx={{
          width: "300px",
          marginTop: "30px",
          marginLeft: "200px",
          textAlign: "justify",
        }}
      >
        <Typography sx={{ color: "green", fontFamily: "bold" }} variant="h4">
          Order Successful!
        </Typography>
        <Typography sx={{ fontWeight: "Bold", margin: "8px" }} variant="h6">
          Contact Info
        </Typography>
        <Typography sx={{ margin: "5px" }}>
          name:- {firstName} &nbsp;&nbsp;{lastname}
        </Typography>
        <Typography sx={{ margin: "5px" }}>
          email:-{email} &nbsp;&nbsp;&nbsp;&nbsp; mobile number:-{mobileNumber}
        </Typography>
        <Divider />
        <Typography sx={{ fontWeight: "Bold", margin: "8px" }}>
          Shipping Address
        </Typography>
        <Typography sx={{ margin: "3px" }}>
          name:-{firstName} &nbsp;&nbsp;{lastname}
        </Typography>
        <Typography sx={{ margin: "2px" }}>
          DetailedAdress:{enterYourDetailedAdress}
        </Typography>
        <Typography sx={{ margin: "2px" }}>
          {" "}
          Address2:{Address2} &nbsp;&nbsp; NearestLandMark:{" "}
          {enterYourNearestLandMark}
        </Typography>
        <Typography sx={{ margin: "2px" }}>
          city: {city} &nbsp;&nbsp; state:{state} &nbsp;&nbsp; country:{" "}
          {country}
        </Typography>
        <Typography sx={{ margin: "2px" }}>
          pincode :{pincode} &nbsp;&nbsp; deliveryMobileNumber:
          {deliveryMobileNumber}
        </Typography>
        <Divider />
        <Typography sx={{ fontWeight: "Bold", margin: "8px" }}>
          Payment method
        </Typography>
        <Typography sx={{ margin: "2px" }}>
          set of:-{booksSet}&nbsp;&nbsp;&nbsp;&nbsp; Q:-{quantity}
        </Typography>
        <Typography sx={{ margin: "2px" }}>
          total books:{totalBooks}&nbsp;&nbsp;totalCost{totalCost}
        </Typography>
        <Divider />
        <Typography sx={{ margin: "2px" }}>
          totalSaving{totalsave}&nbsp;&nbsp;deliveryCharges{deliveryCharge}
        </Typography>
        <Typography sx={{ fontWeight: "Bold", margin: "8px" }}>
          payment Mode
        </Typography>
        <Typography sx={{ margin: "2px" }}>
          payment done by{Upi}&nbsp;&nbsp;{netbanking}
        </Typography>
        <Divider />
      </Card>
    </Box>
  );
};

export default SubmitPage;
