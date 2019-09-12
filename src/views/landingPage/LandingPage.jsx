/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and  this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import RGNavbar from "components/Navbars/NavBarRG.jsx";
import Footer from "components/Footer/Footer.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";

import bigChartData from "variables/charts.jsx";

class LandingPage extends React.Component {
  // componentDidMount() {
  //   document.body.classList.toggle("landing-page");
  // }
  // componentWillUnmount() {
  //   document.body.classList.toggle("landing-page");
  // }
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <RGNavbar />
        <PageHeader />
        {/* INCLUIR SECTIONS!!!!!!!!!!!!!! */}
        <Footer />
      </>
    );
  }
}

export default LandingPage;
