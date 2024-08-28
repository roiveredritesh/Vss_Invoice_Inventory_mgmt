import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { vendorstate } from "@/constants/vendorstatedropdown";

function Vendor_Statedropdown(props) {
    const { classname, value, name, onChange} = props;

    const handleStateChange = (event) =>{
        const newValue = event.target.value;
        onChange({
            target: {
                name: name,
                value: newValue,
            },
        });
    };

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel>Select State</InputLabel>
                <Select
                  label = "Select State"
                  className = {classname}
                  value = {value}
                  onChange={handleStateChange}
                >
                  {vendorstate.map((state) => (
                    <MenuItem key={state} value={state}>
                        {state}
                    </MenuItem>
                  ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default Vendor_Statedropdown;