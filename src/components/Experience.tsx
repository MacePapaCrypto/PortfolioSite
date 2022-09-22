import { Typography, Container } from '@mui/material';
import { forwardRef } from 'react';

const Experience = (props: any, ref: any) => {
  return(
    <div ref={ref}>
      <Container
        sx={{
          display: "flex",
          marginBottom: "10rem",
          marginTop: "10rem"
        }}
      >
        <Container
          sx={{
            width: "50%",
            height: "100%"
          }}
        >
          <Typography
            variant="h4"
            justifyContent="left"
          >
            Professional Experience
          </Typography>
        </Container>
        <Container
          sx={{
            display: "block",
            width: "50%",
            height: "100%"
          }}
        >
          <Typography
            variant="h4"
            justifyContent="right"
            marginBottom="2rem"
          >
            <b>Solidity & Full-Stack Engineer</b>
          </Typography>
          <Typography
            variant="h5"
            justifyContent="right"
            gutterBottom
          >
            Byte Masons / April 2022 - September 2022
          </Typography>
          <Typography
            variant="body2"
            justifyContent="right"
            marginBottom="3rem"
          >
            I created a modularized boilerplate ERC721 contract factory in solidity that allows users to "mix & match" their desired features,
            as well as built full-stack demos, documentation, and a contract hook API for upcoming products.
          </Typography>
          <Typography
            variant="h4"
            justifyContent="right"
            marginBottom="2rem"
          >
            <b>SAP Consultant</b>
          </Typography>
          <Typography
            variant="h5"
            justifyContent="right"
            gutterBottom
          >
            ifb Group / January 2020 - April 2022
          </Typography>
          <Typography
            variant="body2"
            justifyContent="right"
            gutterBottom
          >
            At ifb, I consulted with a variety of clients in the banking and insurance industry to build out customized or packaged reporting solutions.
            While there, I assisted in developing a Fraud Risk Platform, which leverages GCP, Kafka, and Machine Learning models in order to predict fraud in cash flows.
          </Typography>
        </Container>
      </Container>
      <Container
        sx={{
          display: "flex",
          marginBottom: "10rem"
        }}
      >
        <Container
          sx={{
            width: "50%",
            height: "100%"
          }}
        >
          <Typography
            variant="h4"
            justifyContent="left"
          >
            Education
          </Typography>
        </Container>
        <Container
          sx={{
            display: "block",
            width: "50%",
            height: "100%"
          }}
        >
          <Typography
            variant="h4"
            justifyContent="right"
            marginBottom="2rem"
          >
            <b>Clemson University</b>
          </Typography>
          <Typography
            variant="h6"
            justifyContent="right"
            fontSize="1.2rem"
            gutterBottom
          >
            Bachelor's Degree, Computer Science / Graduated 2019
          </Typography>
        </Container>
      </Container>
    </div>
  );
}

export default forwardRef(Experience);