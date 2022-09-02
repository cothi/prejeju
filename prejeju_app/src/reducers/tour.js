import { connect } from "react-redux";
import React from "react"
import Tour from "../pages/Tour"



const mapStateToProps = state => {
  return {
    tourData: state.tour,
  };
}


const TourPage = ({ tourData }) => {

  return (
    <Tour foodData={tourData} />
  )
}

export default connect(mapStateToProps)(TourPage);
