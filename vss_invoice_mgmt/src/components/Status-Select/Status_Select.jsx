import React from "react";
import { statuses } from "../../constants/index";

const Status_Select = (props) => {
  //const { classname, value } = props;
  console.log("@Status_list", statuses);
  return (
    <select>
      {statuses.map((status) => (
        <option>{status}</option>
      ))}
    </select>
  );
};

export default Status_Select;
