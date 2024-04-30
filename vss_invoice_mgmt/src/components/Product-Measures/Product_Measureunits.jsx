import React from "react";
import { productmeasures } from "@/constants/productmeasureunit";

const Product_Measureunits = (props) => {
  const { className, value, name, onChange } = props;

  const handleMeasureUnitChange = (event) => {
    const newValue = event.target.value;
    onChange({
      target: {
        name: name,
        value: newValue,
      },
    });
  };

  return (
    <select
      className={className}
      value={value}
      onChange={handleMeasureUnitChange}
    >
      {productmeasures.map((unit) => (
        <option key={unit}>{unit}</option>
      ))}
    </select>
  );
};

export default Product_Measureunits;
