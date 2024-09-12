import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Box, Typography } from "@mui/material";

function FloatingLabelTextarea({ name, value, onChange, label, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* Floating Label */}
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          left: 12,
          top: isFocused || value ? -10 : 20,
          fontSize: isFocused || value ? 12 : 16,
          color: isFocused ? "#2563eb" : "rgba(0, 0, 0, 0.6)",
          transition: "all 0.2s ease",
          backgroundColor: "#f1f5f9",
          padding: "0 4px",
        }}
      >
        {label}
      </Typography>

      {/* Textarea component */}
      <TextareaAutosize
        name={name}
        minRows={2}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "25px 14px 6px 14px",
          borderRadius: "4px",
          border: "1px solid rgba(0, 0, 0, 0.23)",
          outlineColor: isFocused ? "#2563eb" : "rgba(0, 0, 0, 0.23)",
          transition: "border-color 0.2s ease",
          backgroundColor: "transparent",
        }}
      />
    </Box>
  );
}

export default FloatingLabelTextarea;
