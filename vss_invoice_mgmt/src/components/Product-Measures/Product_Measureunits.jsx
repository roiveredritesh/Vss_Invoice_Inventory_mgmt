import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { productmeasures } from "@/constants/productmeasureunit";

function Product_Measureunits(props) {
  const { classname, value, name, onChange } = props;

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
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Units </InputLabel>
        <Select
          label="unit"
          className={classname}
          value={value}
          onChange={handleMeasureUnitChange}
        >
          {productmeasures.map((unit) => (
            <MenuItem key={unit} value={unit}>
              {unit}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Product_Measureunits;
