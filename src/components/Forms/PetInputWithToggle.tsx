import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type PetInputWithToggleProps = {
  name: string;
  label: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
};

const PetInputWithToggle: React.FC<PetInputWithToggleProps> = ({
  name,
  label,
  size = "small",
  fullWidth = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <TextField
      name={name}
      label={label}
      type={showPassword ? "text" : "password"}
      size={size}
      fullWidth={fullWidth}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PetInputWithToggle;
