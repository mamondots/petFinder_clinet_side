"use client";

import { Button } from "@mui/material";

const BannerButton = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "white",
        borderColor: "white",
        fontWeight: 600,
        "&:hover": {
          borderColor: "#800ede",
          color: "#800ede",
        },
      }}
    >
      Learn More
    </Button>
  );
};

export default BannerButton;
