import { connect } from "react-redux";
import React from "react"
import Cafe from "../pages/Cafe"



const mapStateToProps = state => {
  return {
    cafeData: state.cafe,
  };
}


const CafePage = ({ cafeData }) => {

  return (
    <Cafe cafeData={cafeData} />
  )
}

export default connect(mapStateToProps)(CafePage);
