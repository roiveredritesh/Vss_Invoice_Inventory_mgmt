import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { statuses } from "@/constants/index";

function Status_Select(props) {
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
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select
          label="Status"
          className={classname}
          value={value}
          onChange={handleStatusChange}
        >
          {statuses.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Status_Select;
