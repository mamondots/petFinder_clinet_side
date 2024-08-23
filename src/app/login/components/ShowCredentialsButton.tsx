"use client";

import { Button } from "@mui/material";
import { useState } from "react";
import StorageIcon from "@mui/icons-material/Storage";
import ShowCredentialsModal from "./ShowCredentialsModal";

const ShowCredentialButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ShowCredentialsModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Button
        fullWidth={true}
        onClick={() => setIsModalOpen(true)}
        sx={{
          margin: "15px 0 10px 0",
          fontSize: "14px",
          fontWeight: "semibold",
        }}
        variant="outlined"
        startIcon={<StorageIcon />}
      >
        Show Demo Credentials
      </Button>
    </>
  );
};

export default ShowCredentialButton;
