"use client";

import { Button } from "@mui/material";
import Link from "next/link";

const DonateButton = () => {
  return (
    <Button
      component={Link}
      href="/donate"
      // endIcon={<ArrowForwardIcon />}
      sx={{
        mt: 2,
        py: 1.5,
        px: 4,
        borderRadius: "25px",
        fontWeight: 600,
        "&:hover": {
          backgroundColor: "#800ede",
        },
      }}
    >
      Donate Now
    </Button>
  );
};

export default DonateButton;
