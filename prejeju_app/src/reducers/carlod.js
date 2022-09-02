
import { connect } from "react-redux";
import React from "react"
import CarLod from "../pages/CarLod"



const mapStateToProps = state => {
  return {
    carLodData: state.carlod,
  };
}


const CarLodPage = ({ carLodData }) => {

  return (
    <CarLod carLodData={carLodData} />
  )
}

export default connect(mapStateToProps)(CarLodPage);
