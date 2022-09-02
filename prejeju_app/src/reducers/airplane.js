import { connect } from "react-redux";
import React from "react"
import Airplane from "../pages/Airplane"

const mapStateToProps = state => {
  console.log(state)
  return {
    airData: state.airplane,
    pageData: state.page,
  };
}

const AirPage = ({ airData, pageData }) => {
  return (
    <Airplane airData={airData} pageData={pageData} />
  )
}

export default connect(mapStateToProps)(AirPage);
