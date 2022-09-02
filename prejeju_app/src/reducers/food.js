import { connect } from "react-redux";
import React from "react"
import Food from "../pages/Food"



const mapStateToProps = state => {
  return {
    foodData: state.food,
  };
}


const FoodPage = ({ foodData }) => {
  return (
    <Food foodData={foodData} />
  )
}

export default connect(mapStateToProps)(FoodPage);
