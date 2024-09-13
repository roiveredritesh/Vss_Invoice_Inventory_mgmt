import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Box, Typography } from "@mui/material";

function FloatingLabelTextarea({ name, value, onChange, label }) {
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
          top: isFocused || value ? -10 : 15,
          fontSize: isFocused || value ? 12 : 16,
          color: isFocused ? "#2563eb" : "rgba(0, 0, 0, 0.6)",
          transition: "all 0.2s ease",
          backgroundColor: "#f1f5f9",
          padding: "0 4px",
          pointerEvents: "none",
        }}
      >
        {label}
      </Typography>

      {/* Textarea component */}
      <TextareaAutosize
        name={name}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "14px",
          height: "30px",
          borderRadius: "4px",
          border: "1px solid rgba(0, 0, 0, 0.23)",
          transition: "border-color 0.2s ease",
          backgroundColor: "transparent",
          boxSizing: "border-box",
        }}
      />
    </Box>
  );
}

export default FloatingLabelTextarea;
