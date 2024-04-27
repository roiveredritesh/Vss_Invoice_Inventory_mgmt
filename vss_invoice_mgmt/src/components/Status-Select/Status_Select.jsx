import React from "react";
import { statuses } from "@/constants/index";

const Status_Select = (props) => {
  const { classname, value, name, onChange } = props;

  const handleStatusChange = (event) => {
    const newValue = event.target.value;
    onChange({
      target: {
        name: name,
        value: newValue,
      },
    });
  };
  return (
    <select className={classname} value={value} onChange={handleStatusChange}>
      {statuses.map((status) => (
        <option key={status}>{status}</option>
      ))}
    </select>
  );
};

export default Status_Select;
