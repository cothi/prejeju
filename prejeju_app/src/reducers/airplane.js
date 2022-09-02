import { connect } from "react-redux";
import React from "react"
import Airplane from "../pages/Airplane"

const mapStateToProps = state => {
  return {
    airData: state.airplane,
  };
}

const AirPage = ({ airData }) => {
  return (
    <Airplane airData={airData} />
  )
}

export default connect(mapStateToProps)(AirPage);
