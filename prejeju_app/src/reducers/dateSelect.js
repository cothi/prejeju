import { connect } from "react-redux";
import React from "react"
import DateSelect from "../pages/dateSelect"



const mapStateToProps = state => {
  return {
    selectData: state.page,
  };
}


const SelectPage = ({ selectData }) => {

  return (
    <DateSelect selectData={selectData} />
  )
}

export default connect(mapStateToProps)(SelectPage);
