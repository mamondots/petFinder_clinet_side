"use client";

import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LearnAboutButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        mt: 3,
        py: 1.5,
        px: 4,
        borderRadius: "25px",
        fontWeight: 600,
        "&:hover": {
          backgroundColor: "#800ede",
        },
      }}
      href="/about-us"
    >
      Learn More About Us
    </Button>
  );
};

export default LearnAboutButton;
